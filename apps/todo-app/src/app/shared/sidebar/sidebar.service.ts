import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  $collapsed = new BehaviorSubject<boolean>(false);

  toggleMenu() {
    const collapsed = this.$collapsed.getValue();
    this.$collapsed.next(!collapsed);
  }
}
