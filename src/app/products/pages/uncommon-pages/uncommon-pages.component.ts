import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-pages',
  templateUrl: './uncommon-pages.component.html',
  styleUrl: './uncommon-pages.component.css',
})
export class UncommonPagesComponent {

  //i18n Select
  public name: string = 'Cristian';
  public gender: 'male' | 'female' = 'male';

  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient():void {
    this.name = 'Cloe';
    this.gender = 'female';
  }
  // i18nPlural
  public clients: string[] = ['Cristian', 'Cloe', 'Jhon', 'Doe', 'Jane'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': ' 1 cliente esperando',
    '=2': ' 2 clientes esperando',
    'other': ' # clientes esperando'
  }

  deleteClient(): void {
    this.clients.shift();
  }

}
