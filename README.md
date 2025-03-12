# ejercicio-formulario
Clonar el repositorio en una carpeta local.

## levantamiento de base de datos
1. abrir el sql server, restaurar la base de datos: ejercicio.bak
   
## levantamiento de back-end
el back esta desarrollado con .net 9
1. el back-end se encuentra en la carpeta WebApplication1
2. para configurar la base de datos, se debe de dirigir al archivo appsetings en el nodo ConexionSql deberar cambiar el DataBase, id, password con sus datos de configuracion
3. levantar el back nos ofrecera un puerto https, mismo que sera utilizado para conectar con el front

## levantamiento de front end
el front esta desarrollado con angular 19
1. el front se encuentra en la carpeta ejercicio-formulario-web
2. dentro del proyecto ejecutar los comandos npm install
3. ir al archivo api-formulario.service.ts que se encuentra en  \ejercicio-formulario-web\src\app\core\services, vamos a modificar la linea private baseRoute : string = 'https://localhost:7116' con el puerto que se haya levantado el back.
5. ejecutar el projecto con el comando ng serve
6. vamos a un navegador nos dirigimos a la ruta:
http://localhost:4200/listado-formulario

pantalla inicial:
![image](https://github.com/user-attachments/assets/e83a9754-146c-4a4e-8c56-c3a1466f6fc3)

patanlla visualizar formulario
![image](https://github.com/user-attachments/assets/00ae67ec-a1c2-4a97-9ca6-d2ed73d066ad)

pantalla creacion / edicion
![image](https://github.com/user-attachments/assets/0401eb1a-0284-4671-be02-6a84c39dce4a)
