## 0. (0,5 puntos) Property 'charAt' does not exist on type 'number' - ts(2339)

![Error ts(2339)](Error_ts(2339).png)  

### Explicación
Se produce un error porque `c.apple` es un número y `.charAt()` solamente existe en strings.  
Typescript detecta esto en tiempo de compilación y lo asvisa en el IDE con una línea roja, un código de error y una breve explicación, evitando que se genere un TypeError en tiempo de ejecución.

### Ventajas
- Detecta errores antes de ejecutar el código.  
- Mejora la seguirdad de los tipos.  
- Reduce fallos inesperados en producción.

## 1. (1 punto) Para cada uno de los valores del fichero code2.ts, ¿Qué tipo de datos inferirá TypeScript? Explica por qué se ha inferido este tipo de datos.

```ts
const a = 1042;
```
**1042 literal**, ya que 1042 es un número declarado con const y TypeScript detecta que el valor nunca cambiará, por lo cual, en vez de declarar `number`, fija el valor exacto del número.

```ts
const b = 'apples and oranges';
```
**"apples and oranges"**, ya que, al igual que pasaba con el ejemplo anterior, al ser declarado con const, el `string` se convierte en un literal inmutable.

```ts
const c = 'pinneaples';
```
**"pineaples"**, igual que el caso anterior pero cambiando el valor.

```ts
const d = [true, true, false];
```
**boolean[]**, ya que TypeScript detecta que los tres elementos del `array` son `boolean`, por lo que lo infiere como un `array de booleanos` y no como literales `true` o `false`.

```ts
const e = { type: 'ficus' };
```
**{type: string}**, ya que, aunque al ser `const` la variable `e` no puede reasignarse, el objeto en sí **no** es inmutable, por lo que sus propiedades sí se pueden cambiar. Por lo que en vez de inferirlo como "ficus" (como en los casos **b** y **c**), esta vez lo amplia a `string`.

```ts
const f = [1, false];
```
**(number | boolean)[]**, ya que, como el `array` contiene elementos de tipos distintos, TypeScript los infiere simplemente agregando los dos tipos (tipo unión).

```ts
const g = [3];
```
**number[]**, ya que, similar a como paso con **d**, el contenido del `array` puede cambiar y en vez de inferirlo como el literal 3, lo amplía a `number`.

```ts
const h = null;
```
**null**, ya que no tiene ningún tipo más específico.

## 2. (1 punto) ¿Por qué se dispara cada uno de los errores del fichero code3.ts?

```ts
const i: 3 = 3;
i = 4; // Error TS2588 : Cannot assign to 'i' because it is a constant.ts(2588)
```
Tal y como dice la propia descipción, al declarar `i` como una constante, no se puede modificar su valor.  
Es por eso que aparece el código de error **ts(2588)**.

```ts
const j = [1, 2, 3];
j.push(4);
j.push('5'); // Error TS2345: Argument of type '"5"' is not assignable to parameter of type 'number'.
```
Debido a que la variable `j` fue inferida como un `array` de `numbers` (`number[]`) por TypeScript, muestra un error al intentar añadir un `string` (que no un `number`, como pasa con la línea anterior).  
Es por esto que aparece el código de error **ts(2345)**.  

```ts
let k: never = 4; // Error TSTS2322: Type '4' is not assignable to type 'never'.
```
Lo que sucede en este apartado es que `never`, al ser un tipo de dato reservado para utilidades como funciones que no esperan devolver nada, cuando se le intenta asignar un número, muestra el error, ya que `never` representa un *bottom type* y no se le puede asignar ningún valor.  
Es por eso que aparece el código de error **ts(2322)**.

```ts
let l: unknown = 4;
let m = l * 2; // Error TS2571: Object is of type 'unknown'.
```
El tipo `unknown` acepta cualquier valor en la asignación (como `any`), pero si antes de hacer una comprobación de su tipo se intenta realizar una operación, se muestra este error. Debido a que se intenta realizar la operación `l * 2` sin antes comprobar que `l` efectivamente es un `number`, ocurre esta situación.  
Es por eso que aparece el código de error **ts(2571)**.

## 3. (0,5 puntos) ¿Cuál es la diferencia entre una clase y una interface en TypeScript?

La diferencia principal es que las interfaces simplemente definen la estructura de un objeto y sus tipados, y por otro lado, las clases no solo definen esta estructura, sinó que también lo hacen con el comportamiento y la implementación, existiendo en tiempo de ejecución para utilizar estos objetos definidos.  
Es decir, las clases no solamente representan las reglas que definen un objeto, sino que sirven para crear objetos con implementación (propiedades y métodos).