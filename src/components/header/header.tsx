import { component$, useBrowserVisibleTask$, useStore } from "@builder.io/qwik";
//import Modal from "../modal/modal";

export default component$(() => {
  const store: {
    scrolled: boolean;
    inCart: [string, number][];
    modal: boolean;
  } = useStore({
    scrolled: false,
    inCart: [],
    modal: false,
  });

  /*log.js:9 QWIK ERROR Error: The value of the JSX attribute "onClose" can not be serialized because it's a function named "onClose". You might need to convert it to a QRL using $(fn):

const onClose = $(()=>{
        store.modal = false;
    }); */

  // const onClose = () => {
  //   store.modal = false;
  // };

  useBrowserVisibleTask$(() => {
    if (localStorage.getItem("in-cart")) {
      const itemsInCart: { items: [string, number][] } = JSON.parse(
        localStorage.getItem("in-cart") as string
      );
      store.inCart = itemsInCart.items;
    }
  });
  return (
    <header
      class={
        "fixed top-0 left-0 w-full flex justify-between items-center p-4 text-white text-xl sm:text-4xl sm:p-8 z-40 " +
        (store.scrolled ? "bg-slate-900 shadow-lg" : "bg-transparent")
      }
      document:onScroll$={() => {
        if (window.scrollY > 0) {
          store.scrolled = true;
        } else {
          store.scrolled = false;
        }
      }}
    >
      {store.modal && (
        <>
          <div class="absolute top-0 right-0 w-screen h-screen bg-white z-50 flex flex-col gap-4 p-4 text-slate-900 sm:w-[500]">
            <div class="flex items-center justify-between pb-4 border-b">
              <h1 class="font-extrabold text-4xl">CART</h1>
              <i
                class="fa-solid fa-xmark justify-center cursor-pointer hover:rotate-45"
                onClick$={() => (store.modal = false)}
              ></i>
            </div>
            {store.inCart.length > 0 ? (
              <div class="bg-slate-400 flex flex-col gap-[1px]">
                {store.inCart.map((item) => {
                  return (
                    <div class="bg-white p-4 flex items-center justify-between">
                      <div class="flex flex-col gap-1">
                        <h2>{item[0]}</h2>
                        <p>{item[1]}</p>
                        {/* <i
                          class="fa-solid fa-xmark justify-center cursor-pointer hover:rotate-45"
                          onClick$={() => (store.inCart.)}
                        ></i> */}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <h3 class="text-sm">Your cart is empty.</h3>
            )}
          </div>
        </>
      )}
      <a href="/">Corgitto</a>

      <a href="/qwik-tutorial/">Qwik Tutorial</a>
      <img src="/logo.png" alt="truesight" />

      <div
        class="text-xl sm:text-3xl relative cursor-pointer"
        onClick$={() => {
          store.modal = true;
        }}
      >
        <i class="fa-solid fa-cart-shopping"></i>
        {store.inCart.length > 0 && (
          <div class="absolute -top-2 -right-2 bg-slate-900 text-xs rounded-full h-5 w-5 grid place-items-center">
            {store.inCart.length}
          </div>
        )}
      </div>
    </header>
  );
});
