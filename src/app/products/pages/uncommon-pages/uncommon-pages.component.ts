import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

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
    female: 'invitarla',
  };

  changeClient(): void {
    this.name = 'Cloe';
    this.gender = 'female';
  }
  // i18nPlural
  public clients: string[] = ['Cristian', 'Cloe', 'Jhon', 'Doe', 'Jane'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': ' 1 cliente esperando',
    '=2': ' 2 clientes esperando',
    other: ' # clientes esperando',
  };

  deleteClient(): void {
    this.clients.shift();
  }

  //Keyvalue Pipe
  public person = {
    name: 'Cristian',
    age: 30,
    address: 'Calle 123',
  };
  //Async Pipe

  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap((value) => console.log('tap', value)),
  );

  public promiseValue: Promise<String> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
    }, 3500);
  })
}
