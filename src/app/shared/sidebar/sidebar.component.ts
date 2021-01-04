import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes, routesLink } from '../../consts/routes';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  public routes: typeof routes = routes;
  public isOpenUiElements = false;
  listRoute = routesLink;
  isActive;
  currentUrl;
  constructor(public router: Router) {
    this.getTabActive();
    this.isActive = 1;
  }
  public openUiElements() {
    this.isOpenUiElements = !this.isOpenUiElements;
  }
  closeSidenav() {}

  getTabActive() {
    if (this.router.url.includes('home')) {
      this.currentUrl = 'home';
    } else if (this.router.url.includes('account')) {
      this.currentUrl = 'account';
    } else if (this.router.url.includes('course')) {
      this.currentUrl = 'course';
    } else if (this.router.url.includes('market-place')) {
      this.currentUrl = 'market-place';
    } else if (this.router.url.includes('user-service')) {
      this.currentUrl = 'user-service';
    }
  }
  checkIsActive(path) {
    if (path.includes(this.currentUrl)) {
      return true;
    } else {
      return false;
    }
  }
}
