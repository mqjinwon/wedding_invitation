const { db } = require('./firebase-admin');

exports.handler = async (event, context) => {
  // CORS 헤더 설정
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, OPTIONS'
  };

  // OPTIONS 요청 처리 (CORS preflight)
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  // GET 요청만 허용
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // 쿼리 파라미터 파싱
    const { limit = '50', offset = '0' } = event.queryStringParameters || {};
    
    const limitNum = Math.min(parseInt(limit), 100); // 최대 100개로 제한
    const offsetNum = parseInt(offset);

    // Firestore에서 방명록 조회
    let query = db.collection('guestbooks')
      .orderBy('timestamp', 'desc')
      .limit(limitNum);

    if (offsetNum > 0) {
      // offset 구현을 위한 스킵 (실제 프로덕션에서는 cursor 기반 pagination 권장)
      const skipQuery = db.collection('guestbooks')
        .orderBy('timestamp', 'desc')
        .limit(offsetNum);
      
      const skipDocs = await skipQuery.get();
      const lastDoc = skipDocs.docs[skipDocs.docs.length - 1];
      
      if (lastDoc) {
        query = query.startAfter(lastDoc);
      }
    }

    const snapshot = await query.get();
    
    const guestbooks = [];
    snapshot.forEach((doc) => {
      guestbooks.push({
        id: doc.id,
        ...doc.data()
      });
    });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        data: guestbooks,
        total: guestbooks.length,
        hasMore: guestbooks.length === limitNum
      })
    };

  } catch (error) {
    console.error('방명록 조회 오류:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: '서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.'
      })
    };
  }
}; 