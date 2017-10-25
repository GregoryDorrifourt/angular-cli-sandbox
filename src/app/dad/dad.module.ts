import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HelperService } from "../shared/services/helper.service";

import { DadComponent } from "./dad.component";

@NgModule({
    imports: [
    CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        DadComponent
    ],
    providers: [
        HelperService
    ]
})
export class DadModule { }
