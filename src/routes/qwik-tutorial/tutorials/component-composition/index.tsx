import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div>
      <Greeter />
    </div>
  );
});

// to always load the Greeter component with the above call, you remove the component$() to make it not lazy-loading (called a lite component) which is basically just making it a react component that is loaded with the parent
export const Greeter = () => {
  return <div>Hello World!</div>;
};
