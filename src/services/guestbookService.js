import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from '../firebase/config';

const GUESTBOOK_COLLECTION = 'guestbooks';

// 방명록 추가
export const addGuestbook = async guestbookData => {
  try {
    const now = new Date();
    const docRef = await addDoc(collection(db, GUESTBOOK_COLLECTION), {
      ...guestbookData,
      timestamp: serverTimestamp(),
      createdAt: now.toISOString(),
      clientTimestamp: now.getTime(), // 클라이언트 시간도 저장
    });

    // 반환할 때는 현재 시간을 사용 (serverTimestamp는 아직 null일 수 있음)
    return {
      id: docRef.id,
      ...guestbookData,
      timestamp: now,
      createdAt: now.toISOString(),
    };
  } catch (error) {
    console.error('방명록 추가 실패:', error);
    throw error;
  }
};

// 방명록 목록 조회 (최신순)
export const getGuestbooks = async () => {
  try {
    const q = query(
      collection(db, GUESTBOOK_COLLECTION),
      orderBy('timestamp', 'desc')
    );
    const querySnapshot = await getDocs(q);

    const guestbooks = [];
    querySnapshot.forEach(doc => {
      const data = doc.data();

      // timestamp 처리 개선
      let timestamp;
      if (data.timestamp) {
        // Firebase Timestamp 객체인 경우
        if (
          data.timestamp.toDate &&
          typeof data.timestamp.toDate === 'function'
        ) {
          timestamp = data.timestamp.toDate();
        }
        // 이미 Date 객체인 경우
        else if (data.timestamp instanceof Date) {
          timestamp = data.timestamp;
        }
        // 숫자나 문자열인 경우
        else {
          timestamp = new Date(data.timestamp);
        }
      }
      // timestamp가 없는 경우 clientTimestamp 사용
      else if (data.clientTimestamp) {
        timestamp = new Date(data.clientTimestamp);
      }
      // clientTimestamp도 없는 경우 createdAt 사용
      else if (data.createdAt) {
        timestamp = new Date(data.createdAt);
      }
      // 둘 다 없는 경우 현재 시간 사용
      else {
        timestamp = new Date();
      }

      // 유효하지 않은 날짜인 경우 현재 시간으로 대체
      if (isNaN(timestamp.getTime())) {
        timestamp = new Date();
      }

      guestbooks.push({
        id: doc.id,
        name: data.name,
        password: data.password,
        message: data.message,
        timestamp: timestamp,
        createdAt: data.createdAt,
      });
    });

    return guestbooks;
  } catch (error) {
    console.error('방명록 조회 실패:', error);
    throw error;
  }
};

// 방명록 수정
export const updateGuestbook = async (id, message) => {
  try {
    const guestbookRef = doc(db, GUESTBOOK_COLLECTION, id);
    await updateDoc(guestbookRef, {
      message,
      updatedAt: new Date().toISOString(),
    });
    return true;
  } catch (error) {
    console.error('방명록 수정 실패:', error);
    throw error;
  }
};

// 방명록 삭제
export const deleteGuestbook = async id => {
  try {
    const guestbookRef = doc(db, GUESTBOOK_COLLECTION, id);
    await deleteDoc(guestbookRef);
    return true;
  } catch (error) {
    console.error('방명록 삭제 실패:', error);
    throw error;
  }
};

// 로컬 스토리지에서 데이터 마이그레이션 (기존 데이터가 있는 경우)
export const migrateFromLocalStorage = async () => {
  try {
    const localData = localStorage.getItem('guestbooks');
    if (localData) {
      const localGuestbooks = JSON.parse(localData);

      // 기존 데이터를 Firebase로 마이그레이션
      for (const guestbook of localGuestbooks) {
        await addGuestbook({
          name: guestbook.name,
          password: guestbook.password,
          message: guestbook.message,
        });
      }

      // 로컬 스토리지 데이터 삭제
      localStorage.removeItem('guestbooks');
      console.log('로컬 스토리지 데이터가 Firebase로 마이그레이션되었습니다.');
    }
  } catch (error) {
    console.error('데이터 마이그레이션 실패:', error);
  }
};
