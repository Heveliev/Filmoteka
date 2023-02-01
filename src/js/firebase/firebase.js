// import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";
// import {GoogleAuthProvider,signInWithPopup,getAuth,signInWithRedirect,} from 'firebase/auth';


// const btn = document.querySelector('.btn');

// const firebaseConfig = {
//   apiKey: "AIzaSyArNPp9xjH5IqYaB8WyQICdPwXFEttyI5U",
//   authDomain: "filmoteka-5986e.firebaseapp.com",
//   databaseURL: "https://filmoteka-5986e-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "filmoteka-5986e",
//   storageBucket: "filmoteka-5986e.appspot.com",
//   messagingSenderId: "256276542250",
//   appId: "1:256276542250:web:c111a64a847dec70f5a453",
//   measurementId: "G-NDMMEKG2KM"
// };
// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);

// const prov = new GoogleAuthProvider();
// const auth = getAuth();

// btn.addEventListener('click',onClick);

//  function onClick(evt){
//     signInWithPopup(auth,prov).then((result)=>{
//         const credential =  GoogleAuthProvider.credentialFromResult(result);
//         const token = credential.accessToken;
//         const user = result.user;
//         const {displayName,email} = user;
        
//     }).catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         const email = error.email;
//         const credential = GoogleAuthProvider.credentialFromError(error);
//     console.log(error)
//       });
// }





