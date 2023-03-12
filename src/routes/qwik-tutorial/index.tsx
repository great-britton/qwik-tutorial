import { component$ } from "@builder.io/qwik";
import { type DocumentHead, Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>Examples:</h1>
      <ul>
        <li>
          <Link href="/qwik-tutorial/examples/flower/">Flower</Link>
        </li>
        <li>
          <Link href="/qwik-tutorial/examples/todolist/">Todo List</Link>
        </li>
      </ul>
      <h1>Tutorials:</h1>
      <ul>
        <li>
          <Link href="/qwik-tutorial/tutorials/basic-component/">
            Basic Component
          </Link>
        </li>
        <li>
          <Link href="/qwik-tutorial/tutorials/binding-expressions/">
            Binding Expressions
          </Link>
        </li>
        <li>
          <Link href="/qwik-tutorial/tutorials/component-composition/">
            Component Composition
          </Link>
        </li>
        <li>
          <Link href="/qwik-tutorial/tutorials/event-listening/">
            Event Listening
          </Link>
        </li>
        <li>
          <Link href="/qwik-tutorial/tutorials/fetching/">Fetching</Link>
        </li>
        <li>
          <Link href="/qwik-tutorial/tutorials/global-event-listening/">
            Global Event Listening
          </Link>
        </li>
        <li>
          <Link href="/qwik-tutorial/tutorials/recursive-storage/">
            Recursive Storage
          </Link>
        </li>
        <li>
          <Link href="/qwik-tutorial/tutorials/storing-state/">
            Storing State
          </Link>
        </li>
        <li>
          <Link href="/qwik-tutorial/tutorials/synchronous-events/">
            Synchronous Events
          </Link>
        </li>
      </ul>
    </>
  );
});

export const head: DocumentHead = {
  title: "Qwik Tutorial",
};
