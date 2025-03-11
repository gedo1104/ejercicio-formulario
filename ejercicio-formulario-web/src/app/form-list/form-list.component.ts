import { Component, inject, Signal } from '@angular/core';
import ApiFormularioService from '../core/services/api-formulario.service';
import { CreacionFormulario } from '../core/interfaces/request/creacionFormulario';
import {toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

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

    public listaFormulario: Signal<CreacionFormulario[]> = toSignal(this.apiFormularioService.obtenerListaformulario(), {
      initialValue: []
    });


    verFormulario(formulario: CreacionFormulario){
      debugger
      this.router.navigateByUrl('/editar-formulario', {state: {
        formulario: formulario
      }, });
    }

}
