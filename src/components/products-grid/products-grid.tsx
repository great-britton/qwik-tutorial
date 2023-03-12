import { component$ } from "@builder.io/qwik";
import Card from "../card/card";

export default component$(() => {
  // const store = useStore({
  //   scrolled: false,
  // });

  const corgis = [
    {
      name: "Levi",
      url: "https://www.rover.com/blog/wp-content/uploads/2019/01/6342530545_45ec8696c8_b.jpg",
      price: 20000,
    },
    {
      name: "Zeri",
      url: "https://nationaltoday.com/wp-content/uploads/2022/08/18-National-Welsh-Corgi-Day.jpg.webp",
      price: 1200,
    },
    {
      name: "Fauna",
      url: "https://www.thesprucepets.com/thmb/2nKcyh_cW2CImUUadLjS96u0088=/1500x0/filters:no_upscale():strip_icc()/breed-profile-pembroke-welsh-corgi-1117986-hero-a9d0f486d2c64c5fa09ed8e4044eb0a9.jpeg",
      price: 3900,
    },
    {
      name: "Harold",
      url: "https://media-be.chewy.com/wp-content/uploads/2021/06/29102244/PembrokeWelshCorgi-FeaturedImage.jpg",
      price: 2222,
    },
    {
      name: "Cloverfield the movie",
      url: "https://ppg-web-external.s3.amazonaws.com/uploads/zinnia/2020/11/24/corgi-4267251_1920.jpg",
      price: 1241,
    },
    {
      name: "Wes",
      url: "https://www.rd.com/wp-content/uploads/2021/01/GettyImages-532620145.jpg",
      price: 123415,
    },
  ];

  return (
    <div id="products" class="min-h-screen grid place-items-center py-8">
      <div class="flex gap-4 flex-wrap items-stretch justify-center max-w-[1400px] mx-auto">
        {corgis.map((obj) => {
          return <Card {...obj} />;
        })}
      </div>
    </div>
  );
});
