import { Component, inject, Signal } from '@angular/core';
import ApiFormularioService from '../core/services/api-formulario.service';
import { CreacionFormulario } from '../core/interfaces/request/creacionFormulario';
import {toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CreacionFormularioResponse } from '../core/interfaces/response/creacionFormularioResponse';

@Component({
  selector: 'app-form-list',
  imports: [CommonModule],
  templateUrl: './form-list.component.html',
  styles: ``,
  providers: [ApiFormularioService]
})
export class FormListComponent {
    private apiFormularioService : ApiFormularioService = inject(ApiFormularioService);

    private router : Router = inject(Router);

    public listaFormulario: Signal<CreacionFormularioResponse[]> = toSignal(this.apiFormularioService.obtenerListaformulario(), {
      initialValue: []
    });


    EditarFormulario(formulario: CreacionFormularioResponse){

      this.router.navigate(['/editar-formulario'], {
        state: { formulario: formulario }
      });
    }

    nuevoFormulario(){
      this.router.navigate(['/editar-formulario'], {
        state: { }
      });
    }
//visualizar-formulario
    verFormulario(formulario: CreacionFormularioResponse){
      this.router.navigate(['/visualizar-formulario'], {
        state: { formulario: formulario }
      });
    }

}
