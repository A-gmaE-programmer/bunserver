import * as elements from "typed-html";

export interface todo {
  id: number,
  content: string,
  completed: boolean,
};

export const todos: todo[] = [
  { id: 1, content: "Learn c++", completed: false },
  { id: 2, content: "Study for NOI", completed: false},
]

export const TodoItem: elements.CustomElementHandler = ({ id, content, completed }: todo, _contents) => (
  <div class="flex flex-row space-x-3 w-auto justify-end">
    <p>{content}</p>
    <input type="checkbox" checked={completed} />
    <button type="button" class="text-red-500">X</button>
  </div>
)

export const TodoList = ({ todos }: { todos: todo[] }, _contents: string[]) => (
  <div class="flex flex-col w-auto h-auto">
    {todos.map((todo: todo) => <TodoItem {...todo}/>)}
  </div>
)
