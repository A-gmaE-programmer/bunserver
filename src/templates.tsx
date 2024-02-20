import * as todos from "./todoList.tsx";

/* We want this nav to be vertical
const navBar = (
  <nav class="bg-black">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    </div>
  </nav>
); */

const animate = "opacity-100 transform translate-x-4 transition-opacity duration-500 ease-in-out";

/* Constant Website Components */
const Header = (
  <header class="z-20 w-full fixed top-0 border-b-2 border-double border-white bg-black flex justify-center">
    <nav class="container flex flex-row justify-center self-strech">
      <a href="/#" class="text-sky-300 hover:text-sky-500 center p-2 px-4">
        Home
      </a>
      <button
        type="button"
        onclick="window.location.href='#todoList';"
        class="text-sky-300 hover:text-sky-500 center p-2 px-4"
        hx-get="/todos"
        hx-swap="innerHTML"
        hx-target="#todoList"
      >Todo List
      </button>
    </nav>
  </header>
);

export const Index = (
  <body class="bg-black text-2xl">
    {Header}
    <main class="w-full center flex flex-col justify-center text-sky-300">
      <h1
        id="fade-in-element"
        class={`${animate} h-96 flex justify-center w-auto text-6xl pt-64`}
      >Welcome.
      </h1>
      <div
        id="todoList"
        class="flex w-auto justify-center pt-64"
      />
      <div class="h-screen"/>
    </main>
  </body>
);

/* Dynamic website components */
export const TodoList = () => (
  <div>
    <h1 class="flex justify-center w-auto">Todo List</h1>
    <todos.TodoList todos={todos.todos}/>
  </div>
)
