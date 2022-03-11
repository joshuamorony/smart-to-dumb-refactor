import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { ClientShellModule } from '../feature/client-shell/client-shell.module';

@Injectable({
  providedIn: ClientShellModule,
})
export class ClientsService {
  constructor() {}

  public getClients() {
    return of(['One', 'Two', 'Three']);
  }
}
