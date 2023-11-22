import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCY0_TglStMJ760zG_Dc4npjxtw_sPCeQc",
  authDomain: "project-web-kelas-1d06e.firebaseapp.com",
  databaseURL: "https://project-web-kelas-1d06e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "project-web-kelas-1d06e",
  storageBucket: "project-web-kelas-1d06e.appspot.com",
  messagingSenderId: "907184674408",
  appId: "1:907184674408:web:9bfe7fa2f01700e47a0ddd",
  measurementId: "G-HYYK9152FQ"
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
const storage = getStorage(app)

export {storage,database };
