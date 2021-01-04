import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgxImageGalleryModule } from 'ngx-image-gallery';
import { NgApexchartsModule } from "ng-apexcharts";

import { HeaderModule } from './header/header.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { SettingsMenuComponent } from './ui-elements/settings-menu/settings-menu.component';
import { DateMenuComponent } from './ui-elements/date-menu/date-menu.component';
import { LayoutComponent } from './layout/layout.component';
import { LoaderComponent } from './loader/loader.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
    declarations: [
        SidebarComponent,
        FooterComponent,
        SettingsMenuComponent,
        DateMenuComponent,
        LayoutComponent,
        LoaderComponent,
    ],
    imports: [
        HeaderModule,
        MatListModule,
        MatIconModule,
        RouterModule,
        MatExpansionModule,
        MatButtonModule,
        CommonModule,
        MatMenuModule,
        MatSelectModule,
        FormsModule,
        MatSidenavModule,
        MatFormFieldModule,
        MatProgressSpinnerModule,
        NgxImageGalleryModule,
        NgApexchartsModule,
        MatDialogModule
    ],
    exports: [
        HeaderModule,
        SidebarComponent,
        FooterComponent,
        SettingsMenuComponent,
        DateMenuComponent,
        LayoutComponent,
        LoaderComponent,
        NgxImageGalleryModule,
        NgApexchartsModule
    ]
})
export class SharedModule { }
