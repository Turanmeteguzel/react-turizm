import React from "react";
import { Link } from "react-router-dom";

const BasketContent = () => {
  return (
    <div>
      <>
        {/* Container for demo purpose */}
        <div className="container my-24 mx-auto md:px-6">
          {/* Section: Design Block */}
          <section className="mb-32 m-10">
            <div className="mb-16 flex flex-wrap">
              <div className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6">
                <div
                  className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
                  data-te-ripple-init=""
                  data-te-ripple-color="light"
                >
                  <img
                    src="https://www.teo4.rs/wp-content/uploads/2023/12/10448424_10204488251747995_2861825685164673839_o.jpg"
                    className="w-full"
                    alt="Louvre"
                  />
                  <a href="#!">
                    <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                  </a>
                </div>
              </div>
              <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6">
                <h3 className="mb-4 text-3xl font-bold">
                  MILOS TEODOSIC BASKETCAMP - TEO4
                </h3>
                <p className="mb-6 text-xl text-neutral-900">
                  TEO4 - Milos Teodosic Basketbol Kampı, CSKA Moskva, LA
                  Clippers, Sırp Milli Takımı ünlü oyun kurucusu Milos
                  Teodosic'in genç basketbolcu gelişimi için Sırbistan'da
                  kurduğu kamp organizasyonudur. Kampımız, Sırbistan'ın turizm
                  bölgesi Silver Lake'da yapılmaktadır. . Konaklama,
                  transferler, özel kapalı saha ile birlikte tam bir basketbol
                  kampı olacaktır.
                </p>
                <a>
                  <button class="bg-gray-500 hover:bg-blue-300 mt-5 text-white font-light py-2 px-4 rounded-full transition">
                    Bu Kamp İçin Bilgi Al
                  </button>
                </a>
              </div>
            </div>
            <div className="mb-16 flex flex-wrap lg:flex-row-reverse">
              <div className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pl-6">
                <div
                  className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
                  data-te-ripple-init=""
                  data-te-ripple-color="light"
                >
                  <img
                    src="https://stomart.basketball/wp-content/uploads/2022/08/stomart.basketball-20220807-experienta-kasta-camp-mvp-ul-grupei-a-treia-vine-de-la-stomart-11-1024x576.webp"
                    className="w-full"
                    alt="Louvre"
                  />
                  <a href="#!">
                    <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                  </a>
                </div>
              </div>
              <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6">
                <h3 className="mb-4 text-3xl font-bold">KASTA BASKET CAMP</h3>
                <p className="text-neutral-900 text-xl">
                  Kasta Basketcamp, Sırbistan'da ve Avrupa'da yer alan en uzun
                  soluklu kamp organizasyonlarından biridir. bu sene 27. kez
                  düzenlenecek olan Kasta Basketcamp dönemleri, bugüne kadar
                  birçok ünlü Sırp oyuncunun gelişimine katkıda bulunmuştur.
                  Kampımız, Ivanjica şehrinde yapılmaktadır. Özel kamp oteli ve
                  kapalı basketbol sahalarında yapılacak kampımızda, Dr. Saša
                  Jakovljević, Janko Lukovski, Božidar Mitrović, Nenad Trajković
                  gibi çok deneyimli koçlar antreman vermektedir.
                </p>
                <a>
                  <button class="bg-gray-500 hover:bg-blue-300 mt-5 text-white font-light py-2 px-4 rounded-full transition">
                    Bu Kamp İçin Bilgi Al
                  </button>
                </a>
              </div>
            </div>{" "}
            <div className="mb-16 flex flex-wrap">
              <div className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6">
                <div
                  className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
                  data-te-ripple-init=""
                  data-te-ripple-color="light"
                >
                  <img
                    src="https://www.basketbolgundem.com/wp-content/uploads/2023/09/takim_kizilyildiz_basketbolgundem.jpg"
                    className="w-full"
                    alt="Louvre"
                  />
                  <a href="#!">
                    <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                  </a>
                </div>
              </div>
              <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6">
                <h3 className="mb-4 text-3xl font-bold">
                  KIZILYILDIZ SKILLS DEVELOPMENT CAMP
                </h3>
                <p className="mb-6 text-xl text-neutral-900">
                  Kızılyıldız Basketbol Lisesi ile birlikte oluşturulan
                  basketbol kişisel gelişim kampımızda oyuncular min. 7 gün
                  boyunca Kızılyıldız'ın altyapı koçları ile özel antremanlar
                  yapma şansını yakalayacaklar.Kampımız, Sırbistan'ın başkenti
                  Belgrad'da gerçekleştirilecektir. Konaklama, transferler, özel
                  kapalı saha ile birlikte tam bir basketbol kampı olacaktır.
                  Kamp süresince günlük turistik geziler yapılacaktır.
                </p>
                <a>
                  <button class="bg-gray-500 hover:bg-blue-300 mt-5 text-white font-light py-2 px-4 rounded-full transition">
                    Bu Kamp İçin Bilgi Al
                  </button>
                </a>
              </div>
            </div>
            <div className="mb-16 flex flex-wrap lg:flex-row-reverse">
              <div className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pl-6">
                <div
                  className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
                  data-te-ripple-init=""
                  data-te-ripple-color="light"
                >
                  <img
                    src="https://www.basketballacademyvizura.com/images/slider/basketball-academy-slider-03.jpg"
                    className="w-full"
                    alt="Louvre"
                  />
                  <a href="#!">
                    <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                  </a>
                </div>
              </div>
              <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6">
                <h3 className="mb-4 text-3xl font-bold">
                  VIZURA BASKETBALL ACADEMY INDIVIDUAL CAMP
                </h3>
                <p className="text-neutral-900 text-xl">
                  Basketbolun Ünlü Altyapı Gelişim Noktalarından Vizura
                  Basketball Academy'de Kişisel Gelişim Kampları Tecrubeli Ve
                  Dünyaca Ünlü Koçlar Vizura Academy Tesisleri Gelişmiş Teknik
                  Eğitim
                </p>
                <a>
                  <button class="bg-gray-500 hover:bg-blue-300 mt-5 text-white font-light py-2 px-4 rounded-full transition">
                    Bu Kamp İçin Bilgi Al
                  </button>
                </a>
              </div>
            </div>{" "}
          </section>
          {/* Section: Design Block */}
        </div>
        {/* Container for demo purpose */}
      </>
    </div>
  );
};

export default BasketContent;
