import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import ApiFormularioService from '../core/services/api-formulario.service';

@Component({
  selector: 'app-form-edit',
  imports: [],
  templateUrl: './form-edit.component.html',
  styleUrl: './form-edit.component.scss'
})
export default class FormEditComponent implements OnInit {
  private apiFormularioService : ApiFormularioService = inject(ApiFormularioService);

  private router : Router = inject(Router);

  ngOnInit(): void {
    debugger
    const data = this.router.getCurrentNavigation()?.extras.state?.['formulario'];

    console.log(data)
  }
}

