import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path:'listado-formulario',
    loadComponent: ()=> import( './form-list/form-list.component').then((a)=>a.FormListComponent ),
  },
  {
    path: 'editar-formulario',
    loadComponent: ()=> import('./form-edit/form-edit.component')
  },
  {
    path: 'visualizar-formulario',
    loadComponent: ()=> import('./form-input-list/form-input-list.component')
  },
  {
    path: '',
    redirectTo:'listado-formulario' ,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo:'listado-formulario'
  }
];
