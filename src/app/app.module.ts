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
import { RouterModule } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NeonSectionComponent } from './components/neon-section/neon-section.component';
import { AboutUsSectionComponent } from './components/about-us-section/about-us-section.component';
import { ArtistsSectionComponent } from './components/artists-section/artists-section.component';
import { FaqSectionComponent } from './components/faq-section/faq-section.component';
import { GalleryModule } from '@ks89/angular-modal-gallery';

@NgModule({
    declarations: [
        HomePageComponent,
        AppNavbarComponent,
        AppMainComponent,
        AppFooterComponent,
        NeonSectionComponent,
        AboutUsSectionComponent,
        ArtistsSectionComponent,
        FaqSectionComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        AngularMaterialModule,
        NgBootstrapModule,
        RouterModule,
        NgbCollapseModule,
        GalleryModule
    ],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}