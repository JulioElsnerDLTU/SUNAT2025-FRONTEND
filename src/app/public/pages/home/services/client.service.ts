import { Injectable } from '@angular/core';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private clients: Client[] = [
    {
      id: 1,
      name: 'Cliente 1',
      ruc: '123456789',
      status: true,
      image: 'assets/1.jpg',
      codigo_seguimiento: '131-1P',
      address: 'Address 1',
      TipoEmpresa: 'Type 1',
      declaracion_renta: 'Declaration 1',
      reminders: []
    },
    {
      id: 2,
      name: 'Cliente 2',
      ruc: '987654321',
      status: true,
      image: 'assets/2.jpg',
      codigo_seguimiento: '002',
      address: 'Address 2',
      TipoEmpresa: 'Type 2',
      declaracion_renta: 'Declaration 2',
      reminders: []
    },
    {
      id: 3,
      name: 'Cliente 3',
      ruc: '456123789',
      status: true,
      image: 'assets/3.jpg',
      codigo_seguimiento: '231-1P',
      address: 'Address 3',
      TipoEmpresa: 'Type 3',
      declaracion_renta: 'Declaration 3',
      reminders: []
    }
  ];

  getClients(): Client[] {
    return this.clients;
  }
}
