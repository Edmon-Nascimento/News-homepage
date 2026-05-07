import Header from "./components/Header";
import retroPcImg from "./assets/image-retro-pcs.jpg";
import laptopImg from "./assets/image-top-laptops.jpg";
import gameImg from "./assets/image-gaming-growth.jpg";
import desktopImg from "./assets/image-web-3-desktop.jpg";
import mobileImg from "./assets/image-web-3-mobile.jpg";

function App() {
  const newsArticles = [
    {
      title: "Hydrogen VS Electric Cars",
      description: "Will hydrogen-fueled cars ever catch up to EVs?",
    },
    {
      title: "The Downsides of AI Artistry",
      description:
        "What are the possible adverse effects of on-demand AI image generation?",
    },
    {
      title: "Is VC Funding Drying Up?",
      description:
        "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
  ];

  const trendingArticles = [
    {
      id: "01",
      title: "Reviving Retro PCs",
      description: "What happens when old PCs are given modern upgrades?",
      image: retroPcImg,
    },
    {
      id: "02",
      title: "Top 10 Laptops of 2022",
      description: "Our best picks for various needs and budgets.",
      image: laptopImg,
    },
    {
      id: "03",
      title: "The Growth of Gaming",
      description: "How the pandemic has sparked fresh opportunities.",
      image: gameImg,
    },
  ];
  return (
    <>
      <Header />
      <main className="p-4 lg:grid lg:grid-cols-[minmax(600px,1000px)_auto]  lg:gap-5 lg:w-full lg:max-w-10/12 lg:m-auto">
        <section className="flex flex-col">
          <picture>
            <source media="(min-width: 996px)" srcSet={desktopImg} />
            <img src={mobileImg} alt="" className="w-full" />
          </picture>

          <div className="lg:flex lg:justify-between lg:pt-5 lg:pb-10 lg:gap-8">
            <h1 className="mt-8 text-5xl font-bold text-[#00001A] lg:text-6xl">
              The Bright Future of Web 3.0?
            </h1>

            <div className="lg:px-5 lg:m-auto">
              <p className="py-4 text-[#868195] lg:text-xl lg:w-full lg:max-w-9/12 lg:leading-relaxed">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button className="bg-[#F05E50] px-4 py-2 font-bold cursor-pointer mb-12 lg:px-10 lg:py-3 tracking-[5px] lg:mt-8">
                READ MORE
              </button>
            </div>
          </div>
        </section>
        <section className="py-4 px-6 bg-[#00001A] mb-20 lg:flex lg:flex-col lg:justify-around">
          <h2 className="text-[#E8AF53] text-4xl font-bold mb-5">New</h2>

          {newsArticles.map((article, index) => (
            <div key={article.title}>
              <div>
                <h3 className="text-white font-bold text-xl pt-6 pb-3">
                  {article.title}
                </h3>

                <p className="text-white/70 pb-6">{article.description}</p>
              </div>

              {index !== newsArticles.length - 1 && (
                <div className="border border-amber-50/30 w-full"></div>
              )}
            </div>
          ))}
        </section>

        <section className="mb-12 grid gap-10 md:grid-cols-2 xl:grid-cols-3 lg:col-span-2">
          {trendingArticles.map((article) => (
            <div
              key={article.id}
              className="grid grid-cols-[120px_1fr] gap-5 items-center"
            >
              <div className="w-30 h-full">
                <img
                  className="w-full h-full object-cover"
                  src={article.image}
                  alt={article.title}
                />
              </div>

              <div className="flex flex-col gap-3">
                <h1 className="text-3xl font-bold text-[#F15D51]">
                  {article.id}
                </h1>

                <h2 className="font-bold text-[#00001A]">{article.title}</h2>

                <p className="text-[#868195]">{article.description}</p>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
