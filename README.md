# ⚡ PEC 2 - Desarrollo Frontend con Framework JavaScript

![TypeScript](https://img.shields.io/badge/Typescript-TS-3178C6)  
<sub>🗓️ Desarrollado en abril del 2026</sub>

| Campo | Valor |
|---|---|
| **Login UOC** | mturur |
| **Nombre** | Marc Turu Roca |
| **Máster** | Desarrollo de Sitios y Aplicaciones Web |

--- 

## Decisiones técnicas generales


### Estructura de ramas

Se ha trabajado con ramas Git a pesar de ser un proyecto individual, con el objetivo de mantener un historial limpio y organizado. Los merges se han realizado con `--no-ff` para preservar el commit de merge aunque la rama base no hubiera cambiado.

## Ejercicios

### PEC2_Ej1 - Primeros códigos

### PEC2_Ej2
En esta parte:
```ts
let array:number[]=[2,3,4];
console.log(array.shift()); //2
printArray(array); // 3,4
```
debido a que se espera `3` y `4` solamente después, no se puede hacer 
```ts
console.log(array[0]); //2
```
, ya que no se eliminaría el `2`. 

Aquí:
```ts
console.log(array.sort().join(',')); //1,3,4,8
console.log(array.reverse().join(',')); //8,4,3,1
```
se añadieron los `.join(',')` (aparte del `reverse()` que faltaba) para que las salidas coincidieran, ya que `console.log()` imprime los arrays diferentes.  
También se podría haber hecho:
```ts
printArray(array.sort());
printArray(array.reverse());
```
pero se quiso cambiar lo mínimo posible el código no indicado con /**/.

![Ejecución consola del resultado](Result_PEC2_Ej2b.png)

### PEC2_Ej3 - Aplicación TODO

### Hotfixes
Rama dedicada a correcciones menores transversales: variables globales, diseño responsive, comentarios en el código y mejoras de UI.

---

> Marc Turu Roca · Máster Universitario de Desarrollo de Sitios y Aplicaciones Web