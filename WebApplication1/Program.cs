using Microsoft.EntityFrameworkCore;
using WebApplication1.Data;
using WebApplication1.Repositorio;
using WebApplication1.Repositorio.IRepositorio;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

builder.Services.AddControllers();
//configuracion
builder.Services.AddDbContext<ApplicationDbContext>(opciones =>
{
    opciones.UseSqlServer(builder.Configuration.GetConnectionString("ConexionSql"));
});

builder.Services.AddScoped<IFormularioRepositorio, FormularioRepositorio>();

builder.Services.AddSwaggerGen();

builder.Services.AddCors(p => p.AddPolicy("PolicyCors", build =>
{
    build.WithOrigins("*").AllowAnyMethod().AllowAnyHeader();
}));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.MapOpenApi();

}

app.UseHttpsRedirection();
app.UseCors("PolicyCors");
app.MapControllers();

app.Run();


