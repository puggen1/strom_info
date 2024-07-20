import { initializeApp } from 'firebase/app';
import 'dotenv/config'
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";
let apiKey = process.env.FIREBASE_APIKEY
let authDomain = process.env.FIREBASE_AUTHDOMAIN
let projectId = process.env.FIREBASE_PROJECTID
let storageBucket = process.env.FIREBASE_STORAGEBUCKET
let messagingSenderId = process.env.FIREBASE_MESSAGINGSENDERID
let appId = process.env.FIREBASE_APPID
let measurementId = process.env.FIREBASE_MEASUREMENTID
const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId
};

const app = initializeApp(firebaseConfig);



export default app
  