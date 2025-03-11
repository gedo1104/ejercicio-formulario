import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CreacionFormulario } from "../interfaces/request/creacionFormulario";


@Injectable({providedIn: 'root'})
export default class ApiFormularioService {

  private http : HttpClient = inject(HttpClient);

  private baseRoute : string = 'https://localhost:7116';

  obtenerListaformulario (): Observable<CreacionFormulario[]>{

    return this.http.get<CreacionFormulario[]>(`${this.baseRoute}/api/Formulario`);
  }

  crearFormulario(bodyRequest: CreacionFormulario) : Observable<CreacionFormulario>{

    return this.http.post<CreacionFormulario>(`${this.baseRoute}/api/Formulario`, bodyRequest);
  }

  actualizarFormulario(bodyRequest: CreacionFormulario) : Observable<CreacionFormulario>{

    return this.http.patch<CreacionFormulario>(`${this.baseRoute}/api/Formulario/${bodyRequest.Id}`, bodyRequest);
  }
}