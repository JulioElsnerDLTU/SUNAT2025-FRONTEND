import { Injectable } from '@angular/core';
import { User } from '../models/user.model'; // Ajustar la ruta de importación según sea necesario

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user: User = {
    id: 1,
    name: 'Juan Pérez',
    email: 'juan.perez@example.com',
    password: '',
    image: '',
    status: true,
    roles: ['user']
  };

  getUser(): User {
    return this.user; // Devuelve los datos del usuario
  }
}
