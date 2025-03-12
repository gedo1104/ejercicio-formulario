import { Component, inject, OnInit } from '@angular/core';
import ApiFormularioService from '../core/services/api-formulario.service';
import { ActivatedRoute, ActivatedRouteSnapshot, Route, Router } from '@angular/router';
import { FormField } from '../core/interfaces/response/formfield';
import { CreacionFormularioResponse } from '../core/interfaces/response/creacionFormularioResponse';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-input-list',
  imports: [CommonModule],
  templateUrl: './form-input-list.component.html',
  styleUrl: './form-input-list.component.scss'
})
export default class FormInputListComponent   {

  listaPropiedades: FormField[] = [];

  tituloFormulario: string = '';

  ngOnInit(): void {
    debugger
    const dataFromState : CreacionFormularioResponse = history.state.formulario;
    if (dataFromState) {
      this.tituloFormulario = dataFromState.nombre_Formulario;
      this.listaPropiedades  = dataFromState.metaData ;
    }
  }
}
