import React from "react";

const KurumHero = () => {
  return (
    <div>
      <>
        {/* Section: Design Block */}
        <section className="mb-6 bg-white">
          {/* Background image */}
          <div className="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] bg-[url('https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] h-[500px]"></div>
          <div className="w-100 mx-auto px-6 sm:max-w-2xl md:max-w-3xl md:px-12 lg:max-w-5xl xl:max-w-7xl xl:px-32">
            <div className="text-center">
              <div className="block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:py-16 md:px-12 mt-[-170px] backdrop-blur-[30px]">
                <h1 className="mt-2 mb-16 text-white text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                  Kurumsal Seyahat
                </h1>
              </div>
            </div>
          </div>
          {/* Background image */}
        </section>
        {/* Section: Design Block */}
      </>
    </div>
  );
};

export default KurumHero;
