const admin = require('firebase-admin');

// Firebase Admin SDK 초기화 (서버 사이드에서만 실행)
let app = null;
let db = null;

if (!admin.apps.length) {
  try {
    const serviceAccount = {
      type: "service_account",
      project_id: process.env.FIREBASE_PROJECT_ID,
      private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
      private_key: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
      client_id: process.env.FIREBASE_CLIENT_ID,
      auth_uri: "https://accounts.google.com/o/oauth2/auth",
      token_uri: "https://oauth2.googleapis.com/token",
      auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
      client_x509_cert_url: process.env.FIREBASE_CLIENT_CERT_URL
    };

    app = admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}-default-rtdb.firebaseio.com`
    });

    db = admin.firestore();
    console.log('Firebase Admin SDK 초기화 성공');
  } catch (error) {
    console.error('Firebase Admin SDK 초기화 실패:', error);
  }
} else {
  app = admin.app();
  db = admin.firestore();
}

module.exports = { admin, db }; 