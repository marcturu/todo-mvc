## 0. Property 'charAt' does not exist on type 'number' - ts(2339)
![Error ts(2339)](Error_ts(2339).png)  

### Explicación
Se produce un error porque `c.apple` es un número y `.charAt()` solamente existe en strings.  
Typescript detecta esto en tiempo de compilación y lo asvisa en el IDE con una línea roja, un código de error y una breve explicación, evitando que se genere un TypeError en tiempo de ejecución.

### Ventajas
- Detecta errores antes de ejecutar el código.  
- Mejora la seguirdad de los tipos.  
- Reduce fallos inesperados en producción.
  