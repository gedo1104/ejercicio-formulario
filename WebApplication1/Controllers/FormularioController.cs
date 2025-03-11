using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Modelos;
using WebApplication1.Modelos.Dtos;
using WebApplication1.Repositorio.IRepositorio;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FormularioController : ControllerBase
    {
        private readonly IFormularioRepositorio _fRepo;
        
        public FormularioController(IFormularioRepositorio fRepo)
        {
            _fRepo = fRepo;

        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IActionResult CrearFormulario([FromBody] FormularioDto formularioDto) {

            if(!ModelState.IsValid)
                return BadRequest(ModelState);
            
            if (formularioDto == null)
                return BadRequest(ModelState);

            var formulario = new Formulario
            {
                Id= formularioDto.Id,
                Nombre_Formulario= formularioDto.nombre_Formulario,
                metaData = formularioDto.metaData

            };
            if (!_fRepo.CrearFormulario(formulario))
            {
                ModelState.AddModelError("", "errores al guardar");
                return StatusCode(500, ModelState);
            }
            
            return Ok(formulario);
        }

        [HttpGet]
        public IActionResult GetFormularios()
        {
            var listaformularios = _fRepo.GetFormularios();

            var listaFormularioDto = new List<FormularioDto>();

            foreach (var item in listaformularios)
            {
                var formulario = new FormularioDto
                {
                    Id = item.Id,
                    nombre_Formulario = item.Nombre_Formulario,
                    metaData = item.metaData

                };

                listaFormularioDto.Add(formulario);
            }
            return Ok(listaFormularioDto);
        }

        [HttpPatch("{formularioId:int}", Name = "Actualizarformulario")]
        public IActionResult ActualizarFormulario(int formularioId, [FromBody] FormularioDto formularioDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (formularioDto == null)
                return BadRequest(ModelState);

            var formulario = new Formulario
            {
                Id = formularioDto.Id,
                Nombre_Formulario = formularioDto.nombre_Formulario,
                metaData = formularioDto.metaData

            };

            if (!_fRepo.ActualizarFormulario(formulario))
            {
                ModelState.AddModelError("", "errores al actualizar");
                return StatusCode(500, ModelState);
            }
            return Ok(formulario);

        }
    }

   
}
