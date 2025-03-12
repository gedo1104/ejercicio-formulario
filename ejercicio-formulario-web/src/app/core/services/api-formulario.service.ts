import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { CreacionFormulario } from "../interfaces/request/creacionFormulario";
import { CreacionFormularioResponse } from "../interfaces/response/creacionFormularioResponse";
import { CreacionFormularioMapper } from "../mappers/creacionFormularioMapper";


@Injectable({providedIn: 'root'})
export default class ApiFormularioService {

  private http : HttpClient = inject(HttpClient);

  private baseRoute : string = 'https://localhost:7116';

  obtenerListaformulario (): Observable<CreacionFormularioResponse[]>{

    return this.http.get<any>(`${this.baseRoute}/api/Formulario`).pipe(
      map( resp => CreacionFormularioMapper.fromJson(resp))
    );
  }

  crearFormulario(bodyRequest: CreacionFormulario) : Observable<CreacionFormulario>{

    return this.http.post<CreacionFormulario>(`${this.baseRoute}/api/Formulario`, bodyRequest);
  }

  actualizarFormulario(bodyRequest: CreacionFormulario) : Observable<CreacionFormulario>{
    debugger
    return this.http.patch<CreacionFormulario>(`${this.baseRoute}/api/Formulario/${bodyRequest.id}`, bodyRequest);
  }
}