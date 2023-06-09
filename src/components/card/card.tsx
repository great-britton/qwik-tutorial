import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(
  (props: { url: string; name: string; price: number }) => {
    return (
      <Link href="/corgi">
        <div
          class="flex flex-col gap-2 cursor-pointer border border-solid border-transparent hover:border-slate-900 shadow hover:shadow-xl
        "
          onClick$={() => {
            localStorage.setItem("corgitto", JSON.stringify({ ...props }));
          }}
        >
          <img
            src={props.url}
            alt={props.name}
            class="sm:h-[300px] object-cover"
          />
          <div class="flex flex-col gap-2 p-4">
            <h2 class="text-2xl">{props.name}</h2>
            <p>${props.price}</p>
          </div>
        </div>
      </Link>
    );
  }
);
