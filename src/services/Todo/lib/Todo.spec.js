import TodoLib from './Todo.js';

beforeAll(() => {
  jest
    .useFakeTimers()
    .setSystemTime(new Date('2022-10-11 12:00'));
});

describe('Todo lib service', () => {
  describe('createTodo function', () => {
    let newTodo = {};

    describe('passing a new text Todo', () => {
      beforeEach(() => {
        newTodo = TodoLib.createTodo('new todo');
      });

      it('return a new Todo object with text', () => {
        const expected = expect.objectContaining({ text: 'new todo' });

        expect(newTodo).toMatchObject(expected);
      });

      it('return a new Todo object with id', () => {
        const expected = expect.objectContaining({ id: 1665500400000 });
        
        expect(newTodo).toMatchObject(expected);
      });

      it('return a new Todo object with completed false', () => {
        const expected = expect.objectContaining({ completed: false });
        
        expect(newTodo).toMatchObject(expected);
      });
    });
  });

  describe('updateTodoText function', () => {
    let todo = {};

    describe('passing a new text Todo', () => {
      beforeEach(() => {
        todo = TodoLib.createTodo('todo update');
        todo = TodoLib.updateTodoText({ todo, newText: 'new todo updated' });
      });

      it('return Todo object with the new text', () => {
        const expected = expect.objectContaining({ text: 'new todo updated' });

        expect(todo).toMatchObject(expected);
      });

      it('return Todo object with the same id', () => {
        const expected = expect.objectContaining({ id: 1665500400000 });
        
        expect(todo).toMatchObject(expected);
      });

      it('return Todo object with the same completed status', () => {
        const expected = expect.objectContaining({ completed: false });
        
        expect(todo).toMatchObject(expected);
      });
    });
  });

  describe('updateTodoCompleted function', () => {
    let todo = {};

    describe('passing a new completed status', () => {
      beforeEach(() => {
        todo = TodoLib.createTodo('todo update status');
        todo = TodoLib.updateTodoCompleted({ todo, isCompleted: true });
      });

      it('return Todo object with the same text', () => {
        const expected = expect.objectContaining({ text: 'todo update status' });

        expect(todo).toMatchObject(expected);
      });

      it('return Todo object with the same id', () => {
        const expected = expect.objectContaining({ id: 1665500400000 });
        
        expect(todo).toMatchObject(expected);
      });

      it('return Todo object with the new completed status', () => {
        const expected = expect.objectContaining({ completed: true });
        
        expect(todo).toMatchObject(expected);
      });
    });
  });

  describe('deleteTodoItem function', () => {
    let todo1 = {};
    let todo2 = {};
    let todos = [];

    describe('passing a todo to deleted', () => {
      beforeEach(() => {
        todo1 = TodoLib.createTodo('todo 1');

        jest.advanceTimersByTime(1000);

        todo2 = TodoLib.createTodo('todo 2');
        todos = TodoLib.deleteTodoItem({ id: 1665500400000, todos: [todo1, todo2] });
      });

      it('deletes the todo that id is equal to the id passed', () => {
        expect(todos).not.toContain(todo1);
      });
      
      it('mantains the other todo', () => {
        expect(todos).toContain(todo2);
      });
    });
  });
});
