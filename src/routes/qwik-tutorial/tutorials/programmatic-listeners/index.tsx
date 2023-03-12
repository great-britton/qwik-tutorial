import { component$, useOn, $ } from "@builder.io/qwik";

export default component$(() => {
  // hint: useOn('click', $(() => ...));

  useOn(
    "click",
    $(() => alert("Hello World!"))
  );

  return <div>App Component. Click me.</div>;
});
