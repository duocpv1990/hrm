import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

import { routes } from '../../../../consts';
import { User } from '../../../../pages/auth/models';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: any;
  @Output() signOut: EventEmitter<void> = new EventEmitter<void>();
  public routes: typeof routes = routes;
  public flatlogicEmail: string = "https://flatlogic.com";


  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('access_user'));
  }

  public signOutEmit(): void {
    localStorage.clear();
    this.signOut.emit();
  }
}
