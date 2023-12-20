import { CommonModule } from '@angular/common';
import { HomePageComponent } from "./views/home-page/home-page.component";
import { AppNavbarComponent } from "./components/app-navbar/app-navbar.component";
import { AppMainComponent } from "./components/app-main/app-main.component";
import { AppFooterComponent } from "./components/app-footer/app-footer.component";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AngularMaterialModule } from "./modules/angular-material.module";
import { NgBootstrapModule } from "./modules/ng-bootstrap.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppComponent } from "./app.component";

@NgModule({
    declarations: [
        HomePageComponent,
        AppNavbarComponent,
        AppMainComponent,
        AppFooterComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        AngularMaterialModule,
        NgBootstrapModule,
        FlexLayoutModule,
    ],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}