# Ejemplo Redux con Hooks
## Contador donde se puede indicar el valor a incrementar o decrementar realizado con Hooks y Redux

La aplicacion inicia con:

```
npm start

```
El proyecto se encuentra modularizado en carpetas.
En la carpeta "contador" se encuentran los componentes creados:

- btnDecrementar: boton para decrementar el valor indicado al contador
- btnIncrementar: boton para incrementar el valor indicado al contador
- inputValor: input para indicar el valor a incrementar/decrementar
- mostrar: es solo un h1 que muestra el valor actual del contador

Utilice CSS para dar un diseño agradable pero basico. Son varios CSS, algunos dentro de los compomentes y otros generales. La idea de hacer esto es que se pueda apreciar que React permite incorporar varios archivos CSS.
Para la posicion de los elementos utilice el display flex.

## En cuanto a Redux 

Redux es una forma para poder tener "variables globales al proyecto" es decir, poder conservar ciertos valores que sean generales al proyecto, permitiendo verlos y cambiarlos desde cualquier componente.

En este ejemplo puse dentro de una carpeta (store) los 2 archivos referidos a Redux:

- El archivo actions.js contiene constantes para ser utilizadas en el programa, su intencion es minimizar los errores de tipeo.
- El archivo configureStore contiene los valores iniciales del state y el reducer.

Redux se actualizo para poder ser utilizado con Hooks por lo que ahora dispone de unos use. Para este ejemplo utilice:

- useSelector() para poder acceder al valor almacenado en el store. Ejemplo:

```
const value = useSelector(store => store.value)
```

- useDispatch() para poder modificar el valor de las variables.

```
const dispatch = useDispatch();

...

dispatch({type: VALUE, data: value});

```

## En cuanto a Hooks

A Julio 2020 es de las ultimas mejoras de ReactJS, el objetivo es poder utilizar variables persistentes dentro de las funciones, es decir, no necesitar usar clases con state. Simplificando, los hooks son a las funciones, lo que el state es a las clases.


Espero los sirva!








# Redux in Hooks. Example
## This is a counter where you can indicate a value for increment and decrement. I made it with Hooks and Redux

To start the application:

```
npm start

```

For your convinience I created folders for each component.

In "Contador" folder you can find:

- btnDecrementar: decrement button
- btnIncrementar: increment button
- inputValor: input to value. This value will be increment/decrement when you click buttons
- mostrar: h1 to show counter

There are a lot of CSS files, some into a component folder and other are general. Then you can see that React allows you to create a lot of css files in your project.

I used display flex.

## Redux concern... 

Redux is a way to have "global variables available into the entire project", that means we can persist some values for entire application. Then you can see it and change it in any component too.

For this example I created store folder and 2 files for Redux:

- actions.js file contain constants to be used in component and reducer for avoid errors.
- The configureStore file with initial values for state and the reducer.

Redux have been updated to Hooks so now have some "use..." functions for this. For this example I had used:

- useSelector() to access store values. Ex:

```
const value = useSelector(store => store.value)
```

- useDispatch() to change values into store.

```
const dispatch = useDispatch();

...

dispatch({type: VALUE, data: value});

```

## Talking about Hooks...

By July 2020 one of the lastest improvements into ReactJs are Hooks. It is a way to persist variables into functions, so you wont need to use classes anymore. 

Hooks is to function like state is to classes.

Hope you find it useful!
