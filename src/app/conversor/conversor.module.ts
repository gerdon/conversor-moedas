import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConversorComponent } from './components/conversor.component';

import { ConversorService } from './services/conversor.service';
import { MoedaService } from './services/moeda.service';

@NgModule({
  declarations: [
    ConversorComponent
  ],
  imports: [
    CommonModule
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
