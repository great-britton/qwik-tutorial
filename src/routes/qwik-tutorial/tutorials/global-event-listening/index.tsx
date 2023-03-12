import { component$, useStore } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

//make an event a global by adding document:{event}

export default component$(() => {
  const store = useStore({ x: 0, y: 0 });
  return (
    <div
      document:onMouseMove$={(event) => {
        store.x = event.clientX;
        store.y = event.clientY;
        console.log(store);
      }}
    >
      Your mouse location is ({store.x}, {store.y}).
    </div>
  );
});

export const head: DocumentHead = {
  title: "Global Event",
  meta: [
    {
      name: "Global Event",
      content: "Global Event",
    },
  ],
};
