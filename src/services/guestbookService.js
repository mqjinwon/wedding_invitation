import { 
  collection, 
  addDoc, 
  getDocs, 
  orderBy, 
  limit, 
  query,
  serverTimestamp,
  doc,
  updateDoc,
  deleteDoc,
  getDoc
} from 'firebase/firestore';
import { db } from '../firebase/config';

const COLLECTION_NAME = 'guestbooks';

// 방명록 추가
export const addGuestbook = async (guestbookData) => {
  try {
    // 네트워크 연결 확인
    if (!navigator.onLine) {
      throw new Error('인터넷 연결을 확인해주세요.');
    }

    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      ...guestbookData,
      password: guestbookData.password, // 비밀번호 저장
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
    // 네트워크 연결 확인
    if (!navigator.onLine) {
      throw new Error('인터넷 연결을 확인해주세요.');
    }

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
    
    // 구체적인 오류 메시지 제공
    if (error.code === 'permission-denied') {
      throw new Error('방명록 접근 권한이 없습니다. 관리자에게 문의해주세요.');
    } else if (error.code === 'unavailable') {
      throw new Error('서비스가 일시적으로 사용할 수 없습니다. 잠시 후 다시 시도해주세요.');
    } else if (error.message.includes('ERR_BLOCKED_BY_CLIENT') || error.message.includes('blocked')) {
      throw new Error('광고 차단기나 보안 확장 프로그램이 서비스 접근을 차단하고 있습니다. 확장 프로그램을 비활성화하고 다시 시도해주세요.');
    } else if (error.message.includes('network') || error.message.includes('fetch')) {
      throw new Error('네트워크 연결을 확인해주세요.');
    } else {
      throw new Error('방명록을 불러오는데 실패했습니다. 잠시 후 다시 시도해주세요.');
    }
  }
};

// 방명록 수정
export const updateGuestbook = async (id, updateData, password) => {
  try {
    // 네트워크 연결 확인
    if (!navigator.onLine) {
      throw new Error('인터넷 연결을 확인해주세요.');
    }

    // 마스터 비밀번호 확인
    
    const MASTER_PASSWORD = 'admin12345678';
    
    if (password !== MASTER_PASSWORD) {
      // 개별 방명록 비밀번호 확인을 위해 문서 조회
      const docRef = doc(db, COLLECTION_NAME, id);
      const docSnap = await getDoc(docRef);
      
      if (!docSnap.exists()) {
        throw new Error('방명록을 찾을 수 없습니다.');
      }
      
      const guestbookData = docSnap.data();
      if (guestbookData.password !== password) {
        throw new Error('비밀번호가 올바르지 않습니다.');
      }
    }

    const docRef = doc(db, COLLECTION_NAME, id);
    await updateDoc(docRef, {
      ...updateData,
      updatedAt: serverTimestamp(),
    });
    
    return {
      success: true,
      message: '방명록이 성공적으로 수정되었습니다.'
    };
  } catch (error) {
    console.error('방명록 수정 오류:', error);
    
    if (error.message.includes('비밀번호가 올바르지 않습니다')) {
      throw error;
    } else if (error.code === 'permission-denied') {
      throw new Error('방명록 수정 권한이 없습니다.');
    } else if (error.code === 'not-found') {
      throw new Error('수정할 방명록을 찾을 수 없습니다.');
    } else if (error.message.includes('ERR_BLOCKED_BY_CLIENT') || error.message.includes('blocked')) {
      throw new Error('광고 차단기나 보안 확장 프로그램이 서비스 접근을 차단하고 있습니다.');
    } else {
      throw new Error('방명록 수정에 실패했습니다. 잠시 후 다시 시도해주세요.');
    }
  }
};

// 방명록 삭제
export const deleteGuestbook = async (id, password) => {
  try {
    // 네트워크 연결 확인
    if (!navigator.onLine) {
      throw new Error('인터넷 연결을 확인해주세요.');
    }

    // 마스터 비밀번호 확인
    const MASTER_PASSWORD = 'admin12345678';
    
    if (password !== MASTER_PASSWORD) {
      // 개별 방명록 비밀번호 확인을 위해 문서 조회
      const docRef = doc(db, COLLECTION_NAME, id);
      const docSnap = await getDoc(docRef);
      
      if (!docSnap.exists()) {
        throw new Error('방명록을 찾을 수 없습니다.');
      }
      
      const guestbookData = docSnap.data();
      if (guestbookData.password !== password) {
        throw new Error('비밀번호가 올바르지 않습니다.');
      }
    }

    const docRef = doc(db, COLLECTION_NAME, id);
    await deleteDoc(docRef);
    
    return {
      success: true,
      message: '방명록이 성공적으로 삭제되었습니다.'
    };
  } catch (error) {
    console.error('방명록 삭제 오류:', error);
    
    if (error.message.includes('비밀번호가 올바르지 않습니다')) {
      throw error;
    } else if (error.code === 'permission-denied') {
      throw new Error('방명록 삭제 권한이 없습니다.');
    } else if (error.code === 'not-found') {
      throw new Error('삭제할 방명록을 찾을 수 없습니다.');
    } else if (error.message.includes('ERR_BLOCKED_BY_CLIENT') || error.message.includes('blocked')) {
      throw new Error('광고 차단기나 보안 확장 프로그램이 서비스 접근을 차단하고 있습니다.');
    } else {
      throw new Error('방명록 삭제에 실패했습니다. 잠시 후 다시 시도해주세요.');
    }
  }
};
