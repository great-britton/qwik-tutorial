import { component$ } from "@builder.io/qwik";

// you add an on<Eventname>$= tag into an element to create an event listener.
export default component$(() => {
  return <button onClick$={() => alert("Hello World!")}>Click Me</button>;
});
