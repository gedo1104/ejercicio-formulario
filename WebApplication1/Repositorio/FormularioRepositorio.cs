using WebApplication1.Data;
using WebApplication1.Modelos;
using WebApplication1.Repositorio.IRepositorio;

namespace WebApplication1.Repositorio
{
    public class FormularioRepositorio: IFormularioRepositorio
    {

        private readonly ApplicationDbContext _db;

        public FormularioRepositorio(ApplicationDbContext db)
        {
            _db = db;
        }

        public bool ActualizarFormulario(Formulario formulario)
        {
            _db.Formulario.Update(formulario);
            return Guardar();
        }

        public bool CrearFormulario(Formulario formulario)
        {
            _db.Formulario.Add(formulario);
            return Guardar();
        }

        public ICollection<Formulario> GetFormularios()
        {
            return _db.Formulario.OrderBy(f => f.Id).ToList();
        }

        public bool Guardar()
        {
            return _db.SaveChanges() >=0?true:false;
        }
    }
}
