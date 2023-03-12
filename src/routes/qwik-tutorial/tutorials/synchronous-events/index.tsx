import {
  component$,
  useBrowserVisibleTask$,
  useSignal,
} from "@builder.io/qwik";

// using synchronous events is not as easy in qwik.

export default component$(() => {
  const aHref = useSignal<Element>();
  useBrowserVisibleTask$(() => {
    const handler = (event: Event) => {
      event.preventDefault();
      window.open("http://qwik.builder.io");
    };
    aHref.value!.addEventListener("click", handler);
    return () => aHref.value!.removeEventListener("click", handler);
  });

  return (
    <a href="/" onClick$={() => window.open("http://qwik.builder.io")}>
      click me!
    </a>
  );
});
