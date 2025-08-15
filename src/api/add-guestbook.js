const { db } = require('./firebase-admin');

exports.handler = async (event, context) => {
  // CORS 헤더 설정
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // OPTIONS 요청 처리 (CORS preflight)
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  // POST 요청만 허용
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // 요청 본문 파싱
    const { name, message, relationship } = JSON.parse(event.body);

    // 입력 검증
    if (!name || !message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: '이름과 메시지는 필수입니다.' })
      };
    }

    // 방명록 데이터 생성
    const guestbookData = {
      name: name.trim(),
      message: message.trim(),
      relationship: relationship?.trim() || '',
      timestamp: new Date().toISOString(),
      ip: event.headers['x-forwarded-for'] || event.headers['client-ip'] || 'unknown'
    };

    // Firestore에 저장
    const docRef = await db.collection('guestbooks').add(guestbookData);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        id: docRef.id,
        message: '방명록이 성공적으로 작성되었습니다.'
      })
    };

  } catch (error) {
    console.error('방명록 추가 오류:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: '서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.'
      })
    };
  }
}; 