import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  getDocs,
  query,
  where,
} from '@angular/fire/firestore';

interface Perfil {
  user?: string;
  nombre: string;
  imagen: string;
  acerca: string;
}

@Injectable({
  providedIn: 'root',
})
export class PerfilService {
  constructor(private firestore: Firestore) {}

  get_perfil(id_perfil: string) {
    const perfilesRef = collection(this.firestore, 'perfiles');
    const perfilQuery = where('user', '==', id_perfil);
    const q = query(perfilesRef, perfilQuery);
    return getDocs(q);
  }

  add_perfil(nuevo_perfil: Perfil) {
    const perfilesRef = collection(this.firestore, 'perfiles');
    return addDoc(perfilesRef, nuevo_perfil);
  }
}
