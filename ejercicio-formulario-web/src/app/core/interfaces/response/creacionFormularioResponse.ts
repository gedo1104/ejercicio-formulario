import { FormField } from "./formfield";


export interface CreacionFormularioResponse {
  Id: number;
  nombre_Formulario: string;
  metaData: Array<FormField>
}