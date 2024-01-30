import { VoucherSectionComponent } from './components/voucher-section/voucher-section.component';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from "./views/home-page/home-page.component";
import { AppNavbarComponent } from "./components/app-navbar/app-navbar.component";
import { AppMainComponent } from "./components/app-main/app-main.component";
import { AppFooterComponent } from "./components/app-footer/app-footer.component";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, importProvidersFrom } from "@angular/core";
import { provideAnimations } from "@angular/platform-browser/animations";
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
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from './environments/environment';
import { FirebaseService } from './services/firebase.service';
import { Artist1sAvailableTattoosComponent } from './components/artist1s-available-tattoos/artist1s-available-tattoos.component';
import { Artist1TattoosGalleryComponent } from './components/artist1-tattoos-gallery/artist1-tattoos-gallery.component';
import { PrimeNgModule } from './modules/prime-ng.module';


@NgModule({
    declarations: [
        HomePageComponent,
        AppNavbarComponent,
        AppMainComponent,
        AppFooterComponent,
        NeonSectionComponent,
        AboutUsSectionComponent,
        ArtistsSectionComponent,
        FaqSectionComponent,
        Artist1sAvailableTattoosComponent,
        Artist1TattoosGalleryComponent,
        VoucherSectionComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        AngularMaterialModule,
        NgBootstrapModule,
        RouterModule,
        NgbCollapseModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireStorageModule,
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        PrimeNgModule,
        
    ],
    providers: [
        FirebaseService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}