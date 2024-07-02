# Documentación del Proyecto Encriptador/Desencriptador

## Descripción

Este proyecto consiste en una aplicación web que permite encriptar y desencriptar texto ingresado por el usuario. Soporta tanto mayúsculas como minúsculas.

## Estructura del Proyecto

El proyecto está estructurado de la siguiente manera:

```
proyecto-encriptador/
│
├── index.html
├── style.css
├── script.js
└── assets/
    ├── favicon.png
    ├── entrada-vacia.png
```

## Archivos Principales

- **index.html**: Contiene la estructura principal de la aplicación.
- **style.css**: Hoja de estilos que define el diseño y la presentación.
- **script.js**: Archivo JavaScript que maneja la lógica de encriptado, desencriptado y otras funcionalidades.

## Recursos

- **favicon.png**: Icono de la aplicación.
- **entrada-vacia.png**: Imagen mostrada cuando no hay texto de entrada.

## Funcionalidades

### Entrada de Texto

- Sección donde el usuario ingresa el texto a encriptar o desencriptar.
- Botones para encriptar y desencriptar el texto ingresado.

### Salida de Texto

- Muestra el resultado del texto encriptado o desencriptado.

### Encriptación de numeros

- Soporte para encriptar numeros.

### Copiar Texto

- Botón para copiar el texto resultante.

### Resetear

- Botón para restablecer la aplicación.

## Soporte para mayúsculas y minúsculas

- La aplicación soporta mayúsculas y minúsculas en el texto de entrada.

## Soporte para el error "aimes"

- La aplicación soporta el error "aimes", más información de este error en el Changelog

### Selección de temas

- Posibilidad de cambiar el tema del encriptador por 3 temas.

---

## Changelog

### Error "aimes"

El error "aimes" ocurre durante el proceso de encriptación cuando la letra 'a' se convierte incorrectamente en "aimes" en lugar de la salida esperada "ai". Esto sucede debido a un problema de secuencia en las sustituciones durante la encriptación. En lugar de primero transformar 'a' en "ai", el encriptador realiza la sustitución de 'i' como "imes" antes de que 'a' pueda ser correctamente encriptado, lo que resulta en la combinación no deseada "aimes".

### Importancia de Comprenderlo

Es crucial comprender este error porque afecta la legibilidad de los mensajes encriptados. Aunque muchos encriptadores puedan manejar correctamente este proceso, aquellos con el error "aimes" tendrán todas sus cadenas encriptadas conteniendo "mes", lo cual podría hacer que esos mensajes sean ilegibles para otros sistemas de desencriptación.

### Ejemplo

Un ejemplo de texto encriptado con este error sería: "nober enterstobery simesenterndober haimesckenteraimesdober loberl".

### Soporte para Corregir el Error "aimes"

Para solucionar este problema, la aplicación ahora cuenta con soporte integrado para corregir el error "aimes" durante la desencriptación. Esto se logra eliminando la subcadena "mes" en los textos desencriptados, permitiendo que este encriptador pueda interpretar correctamente tanto mensajes encriptados con el error "aimes" como aquellos sin él.

## Accede al proyecto [aqui](https://adolfsan99.github.io/proyecto-encriptador/)

## Desarrollado por [Adolfo Sánchez López](https://github.com/Adolfsan99).
