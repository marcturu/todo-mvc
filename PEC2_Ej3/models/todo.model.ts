/**
 * @class Model
 *
 * Manages the data of the application.
 */

export interface ITodo {
  id: string;
  text: string;
  complete: boolean;
}

export interface ITodoConstructor {
  text: string;
  complete?: boolean;
}

export class Todo implements ITodo {
  id: string;
  text: string;
  complete: boolean;
  constructor({ text, complete = false }: ITodoConstructor) {
    this.id = this.uuidv4();
    this.text = text;
    this.complete = complete;
  }

  private uuidv4(): string {
    return (String(1e7) + -1e3 + -4e3 + -8e3 + -1e11)
    .replace(/[018]/g, (c: string) => {
      const n = Number(c);
      return (
        n ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (n / 4)))
      ).toString(16)
    });
  }
}
