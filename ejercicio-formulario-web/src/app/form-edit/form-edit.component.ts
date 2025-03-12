import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import ApiFormularioService from '../core/services/api-formulario.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { CreacionFormulario } from '../core/interfaces/request/creacionFormulario';
import { FormField, InputType } from '../core/interfaces/response/formfield';
import { CreacionFormularioResponse } from '../core/interfaces/response/creacionFormularioResponse';


@Component({
  selector: 'app-form-edit',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-edit.component.html',
  styleUrl: './form-edit.component.scss'
})
export default class FormEditComponent implements OnInit {

  private apiFormularioService : ApiFormularioService = inject(ApiFormularioService);

  listaPropiedades: FormField[] = [];

  form: FormGroup = new FormGroup({
    esEdicion: new FormControl(false),
    id: new FormControl(Math.floor(Math.random() * 1000) + 1),
    nombreFormulario:new FormControl(),
    label: new FormControl(),
    nombre: new FormControl(),
    tipoInput: new FormControl(),
    requerido: new FormControl(),
    soloLectura: new FormControl(),
    placeHolder: new FormControl(),
    maxLength: new FormControl(),
    max:new FormControl(),
    min: new FormControl(),
    options: new FormControl(),
  })

  ngOnInit(): void {
    debugger
    const dataFromState : CreacionFormularioResponse = history.state.formulario;
    if (dataFromState) {
      // Actualizar el formulario con los datos recibidos
      this.form.patchValue({
        esEdicion: true,
        id: dataFromState.Id || Math.floor(Math.random() * 1000) + 1,
        nombreFormulario: dataFromState.nombre_Formulario || '',
        label:  '',
        nombre:  '',
        tipoInput:  '',
        requerido:  false,
        soloLectura: false,
        placeHolder:  '',
        maxLength:  null
      });

      this.listaPropiedades  = dataFromState.metaData ;

    }
  }

  agregarPropiedad(){
    debugger
    const valorFormulario = this.form.getRawValue();
    this.listaPropiedades.push({
      idPropiedad:  Math.floor(Math.random() * 1000) + 1,
      label: valorFormulario.label as string,
      name : valorFormulario.nombre as string,
      type : valorFormulario.tipoInput as InputType,
      required : valorFormulario.requerido as boolean,
      readOnly : valorFormulario.soloLectura as boolean,
      placeholder: valorFormulario.placeHolder as string,
      maxLength: valorFormulario.maxLength as number,
      min: 0,
      max: 0,
      options: []

    });

  }


  guardarFormulario(){
    const valorFormulario = this.form.getRawValue();
    const cuerpo: CreacionFormulario = {
      id:valorFormulario.id as number,
      nombre_Formulario:valorFormulario.nombreFormulario as string,
      metaData: JSON.stringify(this.listaPropiedades),
    }
    if(valorFormulario.esEdicion){
      this.apiFormularioService.actualizarFormulario(cuerpo).subscribe(()=> {
        this.limpiarFormulario();
      });
    }else {
      this.apiFormularioService.crearFormulario(cuerpo).subscribe(()=> {
        this.limpiarFormulario();
      });
    }

  }


  private limpiarFormulario(): void {
    this.form.patchValue({
      esEdicion: false,
      id: Math.floor(Math.random() * 1000) + 1,
      nombreFormulario: '',
      label: '',
      nombre: '',
      tipoInput: '',
      requerido: false,
      soloLectura: false,
      placeHolder: '',
      maxLength: null,
      min: 0,
      max: 0,
      options: []
    });

    this.listaPropiedades = [];
  }

  eliminarElmento(item: FormField){
    console.log(item)
    const index = this.listaPropiedades.findIndex( x => x.idPropiedad == item.idPropiedad  );

    this.listaPropiedades.splice (index, 1);

  }

}

