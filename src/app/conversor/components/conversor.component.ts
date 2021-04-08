import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

// Models
import { Conversao } from '../models/conversao.model';
import { ConversaoResponse } from '../models/conversao-response.model';
import { Moeda } from '../models/moeda.model';

// Services
import { ConversorService } from '../services/conversor.service';
import { MoedaService } from '../services/moeda.service';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {

  @ViewChild("conversaoForm", { static: true }) conversaoForm: NgForm;

  moedas: Moeda[];
  conversao: Conversao;
  possuiErro: boolean;
  conversaoResponse: ConversaoResponse;

  constructor(
    private conversorService: ConversorService,
    private http: HttpClient,
    private moedaService: MoedaService,
  ) { }

  ngOnInit(): void {
    this.moedas = this.moedaService.listarTodas();
    this.init();
  }

  /**
   * Efetua a chamada para a conversão dos valores.
   *
   * @return void
   */
   init(): void {
  	this.conversao = new Conversao('EUR', 'BRL', null);
  	this.possuiErro = false;
  }

  /**
   * Efetua a chamada para a conversão dos valores.
   *
   * @return void
   */
  converter(): void {
  	if (this.conversaoForm.form.valid) {
  	  this.conversorService
        .converter(this.conversao)
  	  	.subscribe(
  		    response => {this.conversaoResponse = response; console.log(response);},
          error => this.possuiErro = true
        );
  	}
  }

}
