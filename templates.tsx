import * as elements from "typed-html";
import * as todos from "./todoList.tsx";

/* We want this nav to be vertical
const navBar = (
  <nav class="bg-black">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    </div>
  </nav>
); */

const htmxButton = (
  <div class="flex justify-center w-auto">
    <button type="button" hx-post="/clicked" hx-swap="innerHTML" class="w-80 bg-white rounded center flex justify-center">
      Click Me
    </button>
  </div>
);

export const TodoList = () => (
  <div>
    <h1 class="flex justify-center w-auto">Todo List</h1>
    <todos.TodoList todos={todos.todos}/>
  </div>
)

const Header = (
  <header class="z-20 fixed sticky top-0 border-b-2 border-double border-white bg-black">
    <nav class="container flex flex-row">
      <a href="/#" class="text-sky-300 center p-1">
        Home
      </a>
      <a href="#todos" class="text-sky-300 center p-1">
        Todo List
      </a>
    </nav>
  </header>
)

export const Index = await (
  <body class="bg-black">
    {Header}
    <main class="w-full h-auto center flex flex-col justify-center text-sky-300">
      <div class="h-32"/>
      <h1 class="h-32 flex justify-center w-auto">Welcome.</h1>
      <div class="h-36"/>
      <div
        class="flex w-auto justify-center"
        hx-get="/todos"
        hx-trigger="load"
        hx-swap="innerHTML"
      />
      <div class="h-64"/>
    </main>
  </body>
);
