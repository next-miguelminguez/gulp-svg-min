# Generador de librería CSS para SVG
Tarea que minificar SVG apartir de un archivo de configuración.

## Requisitos
Tener NodeJS y NPM instalados y Gulp de manera global.

## Instalación
Clonar o descargar repositorio.
Instalar las dependencias
```bash
$ npm install
```

## Ejecutar

Para ejecutar la tarea puedes usar cualquiera de los comando siguientes

```bash
$ npm start
```
o

```bash
$ gulp
```

## Configuración

En el archivo `./config.js` están definidas las opciones de configuración.

| Clave | Descripción | Valor por defecto| 
| --- | --- | ---| 
| **src**  | Directorio donde se encuentran los SVG  | `./src/svg`| 
| **dest** | Directorio donde se generara los SVG | `./build/svg`| 
| **suffix** | Sufijo del nombre del archivo | `-min`| 
