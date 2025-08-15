import { 
  collection, 
  addDoc, 
  getDocs, 
  orderBy, 
  limit, 
  query,
  serverTimestamp 
} from 'firebase/firestore';
import { db } from '../firebase/config';

const COLLECTION_NAME = 'guestbooks';

// 방명록 추가
export const addGuestbook = async (guestbookData) => {
  try {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      ...guestbookData,
      timestamp: serverTimestamp(),
    });
    
    return {
      success: true,
      id: docRef.id,
      message: '방명록이 성공적으로 작성되었습니다.'
    };
  } catch (error) {
    console.error('방명록 추가 오류:', error);
    throw new Error('방명록 작성에 실패했습니다. 잠시 후 다시 시도해주세요.');
  }
};

// 방명록 목록 조회
export const getGuestbooks = async (limitCount = 50) => {
  try {
    const q = query(
      collection(db, COLLECTION_NAME),
      orderBy('timestamp', 'desc'),
      limit(limitCount)
    );
    
    const querySnapshot = await getDocs(q);
    const guestbooks = [];
    
    querySnapshot.forEach((doc) => {
      guestbooks.push({
        id: doc.id,
        ...doc.data(),
        timestamp: doc.data().timestamp?.toDate?.()?.toISOString() || new Date().toISOString()
      });
    });
    
    return {
      success: true,
      data: guestbooks,
      total: guestbooks.length,
      hasMore: guestbooks.length === limitCount
    };
  } catch (error) {
    console.error('방명록 조회 오류:', error);
    throw new Error('방명록을 불러오는데 실패했습니다. 잠시 후 다시 시도해주세요.');
  }
};
