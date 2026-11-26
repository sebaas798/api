# Fetch API — personaje de Rick and Morty

Ejercicio para practicar cómo consumir una API externa con `fetch`.

## Qué hace

Al apretar **Obtener API**:

1. Hace un `fetch` a la [Rick and Morty API](https://rickandmortyapi.com/) y pide el personaje con id 183.
2. Convierte la respuesta a JSON y saca `id`, `name`, `status` e `image` con desestructuración.
3. Muestra en la página el id, el nombre, el estado (vivo/muerto) y un link para ver la imagen.

## Cómo probarlo

Abrí `index.html` en el navegador y tocá el botón.

## Tecnología

- HTML y JavaScript vanilla (`fetch` con `.then()` y template literals)
