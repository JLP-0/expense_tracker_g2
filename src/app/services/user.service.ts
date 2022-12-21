import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private auth: Auth) {}

  register({ email, password }: any) {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then((userCredentials) => {
        return true;        
      })
      .catch((error) => {
        console.log(error)
        return false;
      });
  }

  login({ email, password }: any) {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredentials) => {      
        return true;
      })
      .catch((error) => {               
        return false;
      });
  }


  is_user_logged_in() {
    const user = this.auth.currentUser;
    if (user) {
      return true;
    }
    return false;
  }

  get_user() {
    const user = this.auth.currentUser;
    if (user) {
      return {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        emailVerified: user.emailVerified,
        uid: user.uid,
      };
    } else {
      return null;
    }
  }

  logout() {
    console.log('User logged out');
    return signOut(this.auth);
  }
}
