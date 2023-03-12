import { component$ } from "@builder.io/qwik";
//is this the props.children issue that was discussed in the solid / marko dev post?

export default component$(() => {
  return (
    <div class="absolute top-0 right-0 w-screen h-screen bg-white z-50 flex flex-col gap-4 p-4 text-slate-900">
      <div class="flex items-center justify-between pb-4 border-b">
        <h1 class="font-bold text-4xl">CART</h1>
        <i class="fa-solid fa-xmark justify-center cursor-pointer"></i>
      </div>
    </div>
  );
});
