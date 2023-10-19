
# Mi Aplicación con Docker

Bienvenido al README de "Mi Aplicación". A continuación, se detallan los pasos para construir y ejecutar la aplicación utilizando Docker.

## Pre-requisitos

- Asegúrese de tener instalado [Docker](https://www.docker.com/get-started) en su equipo. Si aún no lo ha hecho, puede seguir el enlace para obtener las instrucciones de instalación.
- Si va a utilizar `docker-compose`, es necesario contar con [Docker Compose](https://docs.docker.com/compose/install/) instalado.

## Construcción de la imagen Docker

1. Diríjase al directorio donde se encuentra el `Dockerfile` de su proyecto.
   
   ```bash
   cd ruta/del/proyecto
   ```

2. A continuación, construya la imagen de Docker utilizando el siguiente comando:
   
   ```bash
   docker build -t nombre-de-la-imagen .
   ```

## Ejecución con Docker

Una vez que haya construido la imagen, puede ejecutar la aplicación utilizando el siguiente comando:

```bash
docker run -p puerto-local:puerto-contenedor nombre-de-la-imagen
```

Si está utilizando `docker-compose`, simplemente navegue al directorio donde se encuentra su archivo `docker-compose.yml` y ejecute:

```bash
docker-compose up
<<<<<<< HEAD
```
=======
```
>>>>>>> 3e59b8d473a00ed0f3c21d8f2cce95c0403d1083
