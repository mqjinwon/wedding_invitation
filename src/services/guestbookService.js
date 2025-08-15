// 서버리스 함수를 사용한 방명록 서비스
const API_BASE = '/api';

export const addGuestbook = async (guestbookData) => {
  try {
    const response = await fetch(`${API_BASE}/add-guestbook`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(guestbookData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || '방명록 작성에 실패했습니다.');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('방명록 추가 오류:', error);
    throw error;
  }
};

export const getGuestbooks = async (limit = 50, offset = 0) => {
  try {
    const response = await fetch(
      `${API_BASE}/get-guestbooks?limit=${limit}&offset=${offset}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || '방명록 조회에 실패했습니다.');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('방명록 조회 오류:', error);
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
