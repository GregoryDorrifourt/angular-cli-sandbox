import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DadComponent } from './dad/dad.component';
import { NavbarComponent } from './interface/navbar/navbar.component';
import { FooterComponent } from './interface/footer/footer.component';
import { HeaderComponent } from './interface/header/header.component';
import { PlansWallComponent } from './plans-wall/plans-wall.component';

@NgModule({
    declarations: [
        AppComponent,
        DadComponent,
        HomeComponent,
        NavbarComponent,
        FooterComponent,
        HeaderComponent,
        PlansWallComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
