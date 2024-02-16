console.log("Starting server");
import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import * as elements from "typed-html";
import { Index, TodoList } from "./templates.tsx";

const app = new Elysia()
  .use(html())
  .get("/", ({ html }) => html(<PackIndex>{Index}</PackIndex>))
  .get("/todos", () => <TodoList/>)
  .get("/test", () => <Test/>)
  .get("/api/:data1/:data2", ({ params: { data1, data2 }}) => {console.log(data1, data2); return `${data1}, ${data2}`})
  .listen(3000);

console.log(`Elysia started at http://${app.server?.hostname}:${app.server?.port}`);
doCommandLine();

const Test = () => { console.log("Hi"); return <div/>}

async function doCommandLine() {
  const commands = new Map([
    ["quit", (_args: string[]) => { app.stop(); process.exit(); }]
  ]);
  // process.stdout.write("> ");
  for await (const line of console) {
    if (line)
    {
      const args = line.split(' ');
      const toRun = commands.get(args[0]) ?? ((_args: string[]) => console.log("Unknown command"));
      toRun(args);
    }
    // process.stdout.write("> ");
  }
}

const PackIndex: elements.CustomElementHandler = (_attributes, contents) => `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content"width=device-width, initial-scale=1.0">
  <title> Crazy web stacks </title>
  <script src="https://unpkg.com/htmx.org@1.9.10"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>

${contents}
`;
