import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Header from "~/components/header/header";
import ProductsGrid from "~/components/products-grid/products-grid";

export default component$(() => {
  return (
    <>
      {" "}
      <Header />
      <div class="flex flex-1 flex-col">
        <section class="min-h-screen flex relative max-h-screen">
          <img
            src="https://www.thefarmersdog.com/digest/wp-content/uploads/2021/12/corgi-top-1400x871.jpg"
            alt="corgi-home-page"
            class="object-cover"
          />
          <a
            href="#products"
            class="absolute left-1/2 top-2/3 -translate-y-1/2 -translate-x-1/2 
                py-4 px-8
                border-2 boder-solid border-white
                text-white
                hover:text-slate-900 
                hover:after:translate-x-full after:absolute after:bg-white after:right-full after:top-0 after:w-full after:h-full  after:duration-300 overflow-hidden"
          >
            <h3 class="relative z-20">Shop Corgis</h3>
          </a>
        </section>
        <ProductsGrid />
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Corgitto",
  meta: [
    {
      name: "description",
      content: "Purchase Corgis",
    },
  ],
};
