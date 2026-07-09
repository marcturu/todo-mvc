# 1️⃣ 1-theoretical-questions (Answers)

## 0. (0.5 points) Property 'charAt' does not exist on type 'number' - ts(2339)

![Error ts(2339)](img/Error_ts(2339).png)  

### Explanation
An error occurs because `c.apple` is a number and `.charAt()` only exists on strings.  
TypeScript detects this at compile time and flags it in the IDE with a red underline, an error code, and a brief explanation, preventing a TypeError from occurring at runtime.  

### Advantages
- Detects errors before running the code.  
- Improves type safety.  
- Reduces unexpected failures in production.  

> Check `code1.ts` to see the error.

## 1. (1 point) For each of the values in the code2.ts file, what data type will TypeScript infer? Explain why this data type was inferred.

```ts
const a = 1042;
```
**1042 literal**, since 1042 is a number declared with const and TypeScript detects that the value will never change, so instead of declaring it as `number`, it fixes the exact value of the number.

```ts
const b = 'apples and oranges';
```
**"apples and oranges"**, since, just as in the previous example, being declared with const, the `string` becomes an immutable literal.

```ts
const c = 'pinneaples';
```
**"pineaples"**, same as the previous case but with a different value.

```ts
const d = [true, true, false];
```
**boolean[]**, since TypeScript detects that all three elements of the `array` are `boolean`, so it infers it as an `array of booleans` rather than as the literals `true` or `false`.

```ts
const e = { type: 'ficus' };
```
**{type: string}**, since, although the variable `e` cannot be reassigned because it is `const`, the object itself is **not** immutable, so its properties can indeed be changed. Therefore, instead of inferring it as "ficus" (as in cases **b** and **c**), it is widened to `string` this time.

```ts
const f = [1, false];
```
**(number | boolean)[]**, since, as the `array` contains elements of different types, TypeScript infers them simply by combining the two types (union type).

```ts
const g = [3];
```
**number[]**, since, similar to what happened with **d**, the contents of the `array` can change, and instead of inferring it as the literal 3, it is widened to `number`.

```ts
const h = null;
```
**null**, since it has no more specific type.

## 2. (1 point) Why is each of the errors in the code3.ts file triggered?

```ts
const i: 3 = 3;
i = 4; // Error TS2588 : Cannot assign to 'i' because it is a constant.ts(2588)
```
Just as the description itself states, since `i` was declared as a constant, its value cannot be modified.  
That is why error code **ts(2588)** appears.

```ts
const j = [1, 2, 3];
j.push(4);
j.push('5'); // Error TS2345: Argument of type '"5"' is not assignable to parameter of type 'number'.
```
Since the variable `j` was inferred by TypeScript as an `array` of `numbers` (`number[]`), it shows an error when trying to add a `string` (rather than a `number`, as happens in the previous line).  
That is why error code **ts(2345)** appears.  

```ts
let k: never = 4; // Error TSTS2322: Type '4' is not assignable to type 'never'.
```
What happens in this section is that `never`, being a data type reserved for utilities such as functions that are not expected to return anything, shows the error when a number is assigned to it, since `never` represents a *bottom type* and no value can be assigned to it.  
That is why error code **ts(2322)** appears.

```ts
let l: unknown = 4;
let m = l * 2; // Error TS2571: Object is of type 'unknown'.
```
The `unknown` type accepts any value when assigned (like `any`), but if an operation is attempted before checking its type, this error appears. Since the operation `l * 2` is attempted without first checking that `l` is actually a `number`, this situation occurs.  
That is why error code **ts(2571)** appears.

## 3. (0.5 points) What is the difference between a class and an interface in TypeScript?

The main difference is that interfaces simply define the structure of an object and its typing, whereas classes not only define this structure, but also its behavior and implementation, existing at runtime to make use of these defined objects.  
In other words, classes not only represent the rules that define an object, but also serve to create objects with implementation (properties and methods).