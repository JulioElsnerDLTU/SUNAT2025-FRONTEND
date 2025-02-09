import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Toast} from 'primeng/toast';
import {ButtonModule} from 'primeng/button';
import {MessageService} from 'primeng/api';
import {ClientListComponent} from './components/client-list/client-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, ClientListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers : [MessageService]
})
export class AppComponent {
  title = 'SUNATPJ-FRONT';

  constructor(private messageService: MessageService) {}

  show(){
    this.messageService.add({severity:'info', summary: 'Info', detail: 'Message Content', life: 3000});
  }
}
