## 0. Property 'charAt' does not exist on type 'number' - ts(2339)
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