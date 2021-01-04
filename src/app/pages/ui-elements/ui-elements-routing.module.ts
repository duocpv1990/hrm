import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { IconsPageComponent } from './components';
import { ChartsPageComponent } from './containers';

const routes: Routes = [
  {
    path: 'icons',
    component: IconsPageComponent
  },
  {
    path: 'charts',
    component: ChartsPageComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class UiElementsRoutingModule {
}
