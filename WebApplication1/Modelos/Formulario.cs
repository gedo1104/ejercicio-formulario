using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Modelos
{
    public class Formulario
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Nombre_Formulario { get; set; }
        [Required]
        public string metaData { get; set; }
    }
}
