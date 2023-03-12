import { component$, useSignal, useStore } from "@builder.io/qwik";

export default component$(() => {
  const counter = useStore({ count: 0 });
  const counter2 = useSignal(0);

  return (
    <>
      <div>Count: {counter.count}</div>
      <button onClick$={() => counter.count++}>+1</button>

      <div>Count2: {counter2.value}</div>
      <button onClick$={() => counter2.value++}>+1</button>
    </>
  );
});
