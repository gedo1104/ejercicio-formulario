using WebApplication1.Modelos;

namespace WebApplication1.Repositorio.IRepositorio
{
    public interface IFormularioRepositorio
    {
        ICollection<Formulario> GetFormularios();

        bool CrearFormulario(Formulario formulario);

        bool ActualizarFormulario(Formulario formulario);

        bool Guardar();
    }
}
