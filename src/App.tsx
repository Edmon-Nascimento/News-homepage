import Header from "./components/Header";
import retroPcImg from "./assets/image-retro-pcs.jpg";
import laptopImg from "./assets/image-top-laptops.jpg";
import gameImg from "./assets/image-gaming-growth.jpg";
import desktopImg from "./assets/image-web-3-desktop.jpg";
import mobileImg from "./assets/image-web-3-mobile.jpg";

function App() {
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
            <h1 className="mt-8 text-5xl font-bold text-[#00001A] lg:text-6xl">The Bright Future of Web 3.0?</h1>
            
            <div className="lg:px-5 lg:m-auto">
              <p className="py-4 text-[#868195] lg:text-xl lg:w-full lg:max-w-9/12 lg:leading-relaxed">
                We dive into the next evolution of the web that claims to put the
                power of the platforms back into the hands of the people. But is it
                really fulfilling its promise? 
              </p>
              <button className="bg-[#F05E50] px-4 py-2 font-bold cursor-pointer mb-12 lg:px-10 lg:py-3 tracking-[5px] lg:mt-8">
                READ MORE
              </button>
            </div>
          </div>
        </section>

        <section className="py-4 px-6 bg-[#00001A] mb-20 lg:flex lg:flex-col justify-around">
          <h2 className="text-[#E8AF53] text-4xl font-bold mb-5">New</h2>

          <div>
            <h3 className="text-white font-bold text-xl pt-6 pb-3">Hydrogen VS Electric Cars</h3>
            <p className="text-white/70 pb-6">Will hydrogen-fueled cars ever catch up to EVs?</p>
          </div>

          <div className="border border-amber-50/30 w-full"></div>

          <div>
            <h3 className="text-white font-bold text-xl pt-6 pb-3">The Downsides of AI Artistry</h3>
            <p className="text-white/70 pb-6">
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </div>

          <div className="border border-amber-50/30 w-full"></div>

          <div>
            <h3 className="text-white font-bold text-xl pt-6 pb-3">Is VC Funding Drying Up?</h3>
            <p className="text-white/70 pb-6">
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </section>

        <section className="mb-12 flex flex-col gap-10 lg:flex-row lg:w-screen lg:gap-30 ">
          <div className="grid grid-rows-1 grid-cols-[auto_1fr] gap-5">
            <div className="w-32">
              <img className="" src={retroPcImg} alt="" />
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-3xl font-bold text-[#F15D51]">01</h1>
              <h2 className="font-bold text-[#00001A]">Reviving Retro PCs</h2>
              <p className="text-[#868195] w-60">What happens when old PCs are given modern upgrades?</p>
            </div>
          </div>

          <div className="grid grid-rows-1 grid-cols-[auto_1fr] gap-5">
            <div className="w-32">
              <img className="" src={laptopImg} alt="" />
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-3xl font-bold text-[#F15D51]">02</h1>
              <h2 className="font-bold text-[#00001A]">Top 10 Laptops of 2022</h2>
              <p className="text-[#868195] w-60">Our best picks for various needs and budgets. </p>
            </div>
          </div>

          <div className="grid grid-rows-1 grid-cols-[auto_1fr] gap-5">
            <div className="w-32">
              <img className="" src={gameImg} alt="" />
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-3xl font-bold text-[#F15D51]">03</h1>
              <h2 className="font-bold text-[#00001A]">The Growth of Gaming</h2>
              <p className="text-[#868195] w-60">How the pandemic has sparked fresh opportunities.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
