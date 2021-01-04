import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from './auth/guards';
import { PagesComponent } from './pages.component';
const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {
                path: 'home',
                loadChildren: () =>
                    import('./home/home.module').then((m) => m.HomeModule),
            },
            {
                path: 'employee',
                loadChildren: () =>
                    import('./employee/employee.module').then((m) => m.EmployeeModule),
            },
            {
                path: 'workdays',
                loadChildren: () =>
                    import('./workdays/workdays.module').then((m) => m.WorkdaysModule),
            },
            {
                path: 'workdays',
                loadChildren: () =>
                    import('./workdays/workdays.module').then((m) => m.WorkdaysModule),
            },
            {
                path: 'salary',
                loadChildren: () =>
                    import('./salary/salary.module').then((m) => m.SalaryModule),
            },
            {
                path: 'email',
                pathMatch: 'full',
                loadChildren: () =>
                    import('./email/email.module').then((m) => m.EmailModule),
            },

            {
                path: 'report',
                loadChildren: () =>
                    import('./report/report.module').then((m) => m.ReportModule),
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule { }
