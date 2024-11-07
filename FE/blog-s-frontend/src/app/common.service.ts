import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {}
  showUserModal = new BehaviorSubject<boolean>(false);
  handleUserModal(value: boolean) {
    this.showUserModal.next(value);
  }
}
