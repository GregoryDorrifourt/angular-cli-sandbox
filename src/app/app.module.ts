import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { DadModule } from './dad/dad.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './interface/navbar/navbar.component';
import { FooterComponent } from './interface/footer/footer.component';
import { HeaderComponent } from './interface/header/header.component';
import { PlansWallComponent } from './plans-wall/plans-wall.component';
import { FaiResultsComponent } from './fai-results/fai-results.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent,
        FooterComponent,
        HeaderComponent,
        PlansWallComponent,
        FaiResultsComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        DadModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
