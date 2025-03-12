import { CreacionFormulario } from "../interfaces/request/creacionFormulario";
import { CreacionFormularioResponse } from "../interfaces/response/creacionFormularioResponse";


export class CreacionFormularioMapper {

  static fromJson (response: {[key: string]: unknown}[]): CreacionFormularioResponse[] {
    return response.map((item) => {
      debugger
      const metaData = JSON.parse(item['metaData']as string) ;
      return {
        Id: item['id'],
        nombre_Formulario: item['nombre_Formulario'],
        metaData: metaData
      } as CreacionFormularioResponse;
    });
  }
}
