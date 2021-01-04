export enum routes {
  DASHBOARD = '/dashboard',
  TYPOGRAPHY = '/typography',
  TABLES = '/tables',
  NOTIFICATION = '/notification',
  UI_ELEMENTS_ICONS = '/ui/icons',
  UI_ELEMENTS_CHARTS = '/ui/charts',
  UI_ELEMENTS_MAP = '/ui/map',
  LOGIN = '/login',
  HOME = '/home',
}

export const routesLink = [
  {
    path: '/home',
    name: 'Trang chủ',
    icon: 'assets/sidebar/home.svg',
    child: []
  },
  {
    path: '/employee',
    name: 'Nhân viên',
    icon: 'assets/sidebar/employee.svg',
    child: [],
  },
  {
    path: '/workdays',
    name: 'Công',
    icon: 'assets/sidebar/time.svg',
    child: [],
  },
  {
    path: '/salary',
    name: 'Lương',
    icon: 'assets/sidebar/salary.svg',
    child: []
  },

  {
    path: '/email',
    name: 'Hòm thư',
    icon: 'assets/sidebar/email.svg',
    child: []
  },
  {
    path: '/report',
    name: 'Báo cáo',
    icon: 'assets/sidebar/report.svg',
    child: [],

  },

];
