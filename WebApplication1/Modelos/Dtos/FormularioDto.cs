using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Modelos.Dtos
{
    public class FormularioDto
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "El nombre es requerido")]
        [MaxLength(60, ErrorMessage = "El numero maximo de caracteres es de 60")]
        public string nombre_Formulario { get; set; }
        //Dictionary<string, object>
        public string metaData { get; set; }

    }
}
