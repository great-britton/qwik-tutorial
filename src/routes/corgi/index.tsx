import {
  component$,
  useBrowserVisibleTask$,
  useContext,
  useStore,
} from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import Header from "~/components/header/header";
import { MyContext } from "~/root";

export default component$(() => {
  interface State {
    name: string;
    price: number;
    url: string;
  }
  const state: State = useStore({
    name: "",
    price: 0,
    url: "",
  });

  const contextState: { items: [string, number][] } = useContext(MyContext);

  useBrowserVisibleTask$(() => {
    const data = JSON.parse(localStorage.getItem("corgitto")!);
    state.name = data.name;
    state.price = data.price;
    state.url = data.url;
  });

  // useBrowserVisibleTask$(()=>{
  //   if( )
  // })

  return (
    <>
      <Header />
      <div class="flex flex-col gap-2">
        <img
          src={state.url}
          alt={state.name}
          class="object-cover relative z-10"
        />
        <div class="flex justify-between p-4">
          <h2 class="text-xl">{state.name}</h2>
          <p>${state.price}</p>
        </div>
        <button
          class="border border-solid border-slate-900 py-2 px-8 mx-auto hover:opacity-50"
          onClick$={() => {
            //get current localstorage for cart
            // const inCart: string | null = localStorage.getItem("in-cart");

            // if (!inCart) {
            //   const newCart: { items: [string, number][] } = {
            //     items: [[state.name, state.price]],
            //   };
            //   localStorage.setItem("in-cart", JSON.stringify(newCart));
            // } else {
            //   const inCartParsed: {
            //     items: [string, number][];
            //   } = {
            //     items: JSON.parse(inCart).items,
            //   };
            // const newItems: [string, number] = [
            //   ...inCartParsed.items,
            //   [state.name, state.price],
            // ];
            // const newCart: { items: [string, number][] } = {
            //   ...inCartParsed,
            //   items: newItems,
            // };

            //localStorage.setItem("in-cart", JSON.stringify(newCart));
            // }

            const newItem: [string, number] = [state.name, state.price];
            contextState.items = [...contextState.items, newItem];
          }}
        >
          ADOPT
        </button>
        {contextState.items.map((el) => {
          return <div>{el[0]}</div>;
        })}
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Corgi",
};
