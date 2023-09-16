APLICACION WEB (USUARIOS, CATEGORIAS Y PRUDUCTOS)

BASE DE DATOS POSTGRES

Instalar la version 4.20.1 o superior de Docker Desktop y levantar el mismo.

Entrar a la consola (PowerShell) de su computadora y dar el siguiente comando, el cual bajara, instalara y hara correr postgres con el nombre mi-postgres en el puerto externo 54321

docker run --name mi-postgres -e POSTGRES_PASSWORD=postgres -p 54321:5432 postgres

Dar el el siguiente comando para asegurarse que postgres esta corriendo

docker ps

Despues de dar el comando docker ps, el resutado deberia parecerse a lo siguiente

1ab05c84e383 postgres "docker-entrypoint.s…" 6 days ago Up 3 hours 0.0.0.0:54321->5432/tcp mi-postgres

DONDE 1ab05c84e383 es el ID del contenedor en el cual esta corriendo el servidor Postgress. En su caso dicho ID tendra un numero diferente.

Dar el siguiente comando para ingresar al servidor Postgres

docker exec -it mi-postgres psql -U postgres -W

Una vez ingresado al servidor Postgres, dar el siguiente comando para crear la base de datos project_db

CREATE DATABASE project_db

Instalar DBeaver y crear la conexion a la base de datos personas_db con los siguientes datos

Host: localhost

Port: 54321

Database: project_db

Username: postgres

Password: postgres

Instalar NodeJS en su computadora. Instalar npm 9.6.7 en su computadora.

En su computadora crear una carpeta con el nombre users-categories-products (el nombre de la carpeta es solo un ejemplo, puede usar otro nombre).

Bajar a la carpeta users-categories-products todos los archivos del repositorio publico https://github.com/mwfernandezm/users-categories-products.git.

Instalar Visual Studio Code (VSC) en su computadora y en la terminal del VSC ir a la carpeta users-categories-product y dar el siguiente comando que permitira inicializar el manejador de paquetes de Node.

npm init

Luego dar el comando el siguiente comando para instalar los siguientes paquetes: 

npm i dotenv
npm i express
npm i morgan
npm i pg
npm i pg-hstore
npm i pino
npm i pino-pretty
npm i sequelize

En la terminal del VSC , ir a la carpta src y luego dar el siguiente comando para levantar el servidor Express en el puerto 3000

node index.js

Despues dar el comando node index.js, la terminal del VSC deberia mostrar ser el siguiente mensaje

Server is listening on http://localhost: 3000

Instalar Postman en su computadora y usando los diferentes metodos (POST, GET, PUT y DELETE ) en Postman probar las siguientes rutas de la aplicacion:

PRUEBA DE LA APLICACION CON USUARIOS

POST http://localhost:3000/api/usuarios/

GET http://localhost:3000/api/usuarios/

GET http://localhost:3000/api/usuarios/:id

PUT http://localhost:3000/api/usuarios/:id

DELETE http://localhost:3000/api/usuarios/:id

GET http://localhost:3000/api/usuarios/:id/categorias

GET http://localhost:3000/api/usuarios/all/categorias/all

GET http://localhost:3000/api/usuarios/:id/categorias/:id

GET http://localhost:3000/api/usuarios/all/categorias/all/productos/all



PRUEBA DE LA APLICACION CON CATEGORIAS

POST http://localhost:3000/api/categorias/

GET http://localhost:3000/api/categorias/

GET http://localhost:3000/api/categorias/:id

PUT http://localhost:3000/api/categorias/:id

DELETE http://localhost:3000/api/categorias/:id

GET http://localhost:3000/api/categorias/:id/productos

GET http://localhost:3000/api/categorias/all/productos/all



PRUEBA DE LA APLICACION CON PRODUCTOS

POST http://localhost:3000/api/productos/

GET http://localhost:3000/api/productos/

GET http://localhost:3000/api/productos/:id

PUT http://localhost:3000/api/productos/:id

DELETE http://localhost:3000/api/productos/:id





