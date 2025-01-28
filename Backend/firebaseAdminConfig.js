const admin=require('firebase-admin');
const serviceAccount=require('./credentials.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db=admin.firestore();
const auth=admin.auth();

const Users=db.collection('Users');

module.exports={Users,auth};