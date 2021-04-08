import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ConversorComponent } from './components/conversor.component';

import { ConversorService } from './services/conversor.service';
import { MoedaService } from './services/moeda.service';
import { NumeroDirective } from './directives/numero.directive';

@NgModule({
  declarations: [
    ConversorComponent,
    NumeroDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    ConversorComponent
  ],
  providers: [
    ConversorService,
    MoedaService,
  ]
})
export class ConversorModule { }
