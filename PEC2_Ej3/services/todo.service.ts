import { ITodo, ITodoConstructor, Todo } from "../models/todo.model";
/**
 * @class Service
 *
 * Manages the data of the application.
 */

export class TodoService {
  private todos: ITodo[];
  private onTodoListChanged: (todos: ITodo[]) => void = () => {};
  constructor() {
    const stored = localStorage.getItem('todos');
    this.todos = (JSON.parse(stored || '[]') as ITodoConstructor[]).map(
      todo => new Todo(todo)
    );
  }

  bindTodoListChanged(callback: (todos: ITodo[]) => void): void {
    this.onTodoListChanged = callback;
  }

  private _commit(todos: ITodo[]): void {
    this.onTodoListChanged(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  addTodo(text: string): void {
    this.todos.push(new Todo({ text }));

    this._commit(this.todos);
  }

  editTodo(id: string, updatedText: string): void {
    this.todos = this.todos.map(todo =>
      todo.id === id
        ? new Todo({
            ...todo,
            text: updatedText
          })
        : todo
    );

    this._commit(this.todos);
  }

  deleteTodo(_id: string): void {
    this.todos = this.todos.filter(({ id }) => id !== _id);

    this._commit(this.todos);
  }

  toggleTodo(_id: string): void {
    this.todos = this.todos.map(todo =>
      todo.id === _id ? new Todo({ ...todo, complete: !todo.complete }) : todo
    );

    this._commit(this.todos);
  }
}
