Este proyecto permite gestionar la información de una veterinaria, incluyendo dueños, mascotas, turnos, historiales médicos y consultas de chequeos o vacunas pendientes.
La aplicación está organizada en diferentes módulos, cada uno con su propio service y controller.

1. mascotas_dueños

Este módulo se encarga de registrar y consultar la información de los dueños y sus mascotas.
Permite agregar nuevos dueños o mascotas, y consultar a qué dueño pertenece cada mascota.

Endpoints para probar en Postman:

GET /veterinaria → muestra la lista de dueños registrados.

GET /veterinaria/:id → muestra las mascotas de un dueño específico.

POST /veterinaria/nuevosDueños → agrega un nuevo dueño.

POST /veterinaria/nuevasMascotas → agrega una nueva mascota.

2. turnos

Este módulo administra los turnos veterinarios de las mascotas.
Permite registrar nuevos turnos y modificar los ya existentes.

Endpoints para probar en Postman:

POST /veterinaria/turnos → crea un nuevo turno.

PUT /veterinaria/cambiarTurno → modifica un turno existente.

 3. historial_medico

Registra toda la información médica de las mascotas, incluyendo vacunas, tratamientos y controles veterinarios.
Permite consultar los historiales y agregar nuevas entradas. 

Endpoints para probar en Postman:

GET /historial_medico → muestra todos los historiales médicos.

POST /historial_medico → agrega una nueva entrada al historial de una mascota.

4.consultas_clientes
Este módulo analiza los historiales médicos y genera una lista de dueños que deben agendar un chequeo o una vacuna próxima.
Ayuda a mantener actualizados los controles veterinarios.

Endpoint para probar en Postman:

POST /consulta_clientes/pendientes → devuelve los dueños con chequeos o vacunas pendientes.


EXPLICACION PORQUE HAY PARTE QUE USO "private" y no "const" o "let"
private → lo uso dentro de clases para que nadie cambie los datos desde afuera.

const → para cosas que no van a cambiar nunca.

let → cuando el valor sí puede cambiar.

Así evito errores y tengo el código más ordenado.
