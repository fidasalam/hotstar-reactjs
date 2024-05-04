
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyBvcihoK702SKcpUoPPRy5f0CYbhLk-jqg",
  authDomain: "hotstar-clone-5323f.firebaseapp.com",
  projectId: "hotstar-clone-5323f",
  storageBucket: "hotstar-clone-5323f.appspot.com",
  messagingSenderId: "322266660858",
  appId: "1:322266660858:web:ca5cc06e0d4f81a5e46e43",
  measurementId: "G-4BTEZGX4WN"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
