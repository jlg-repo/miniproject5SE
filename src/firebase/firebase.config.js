import { initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: add sdks for firebase products 

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta
    projectID: import.meta
    storageBucket: "dummy"
    messagingSenderId: import.meta
    appId: import.meta

};

const app = initializeApp(firebaseConfig);
export default auth = getAuth(app);
