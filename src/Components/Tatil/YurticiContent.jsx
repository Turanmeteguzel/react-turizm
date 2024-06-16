import React from "react";
import { Link } from "react-router-dom";
import Deneme from "../Deneme/Deneme";

const YurtdisiContent = () => {
  return (
    <div>
      <>
        {/* inspired by tailwindcss.com */}
        <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-10 gap-x-6 m-10 m:m-20 items-start p-8">
          <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
            <div className="order-1 sm:ml-6 xl:ml-0">
              <h3 className="mb-1 text-slate-900 font-bold text-2xl">
                Basketbol Kampları
              </h3>
              <div className="prose prose-slate prose-sm text-slate-600">
                <p>
                  ULUSLARARASI BASKETBOL KAMPLARI. SIRBISTAN'DA BASKETBOLUN EN
                  IYILERINDEN ÖĞREN! SIRBİSTAN'DAKİ BASKETBOL KAMPLARIMIZDA
                  SEVİYENİZİ GELİŞTİRİN.
                </p>
              </div>
              <Link to="/istanbulsehirgezileri">
                <a className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6">
                  Basketbol Kamplarını İncele
                  <svg
                    className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400"
                    width={3}
                    height={6}
                    viewBox="0 0 3 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M0 0L3 3L0 6" />
                  </svg>
                </a>
              </Link>
            </div>
            <img
              src="https://images.pexels.com/photos/2116469/pexels-photo-2116469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
              width={1216}
              height={640}
            />
          </li>
          <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
            <div className="order-1 sm:ml-6 xl:ml-0">
              <h3 className="mb-1 text-slate-900 font-bold text-2xl">
                Friends Kampları
              </h3>
              <div className="prose prose-slate prose-sm text-slate-600">
                <p className="mb-4">
                  Friends; 9 - 17 yaş arası çocukların ve gençlerin, kendi
                  ayakları üzerinde durabilen, bağımsız ve sağlıklı bireyler
                  olmaları için özel planlanmış 'eğlenceleri' spor, kültür,
                  sanat ve yabancı dil içerikli yurtiçi ve yurtdışı kamp
                  programları ile sunan bir gençlik organizasyonudur. Klasik
                  kamplardan farklı olarak programlarını gençlerin istekleri ve
                  beklentileri doğrultusunda oluşturur. Gençlerle beraber yaşar,
                  onlarla birlikte gelişir.
                </p>
              </div>
              <Deneme
                imgUrl="https://www.gelecekozel.com/yukleme/blog/3-gelecek-ozel-egitim-kampi-ogrencilerin-basari-yolculugunda-ozel-duraginiz-.jpg"
                title="Friends Kamp Detayları"
                desc="Friends; 9 - 17 yaş arası çocukların ve gençlerin, kendi ayakları üzerinde durabilen, bağımsız ve sağlıklı bireyler olmaları için özel planlanmış 'eğlenceleri' spor, kültür, sanat ve yabancı dil içerikli yurtiçi ve yurtdışı kamp programları ile sunan bir gençlik organizasyonudur. Klasik kamplardan farklı olarak programlarını gençlerin istekleri ve beklentileri doğrultusunda oluşturur. Gençlerle beraber yaşar, onlarla birlikte gelişir.     ​
                Ekibimiz, ilhamını genç beyinlerden alır ve onların geleceği için çalışır. Kültürümüz, gençlerin gelecekte kişilik ve insan olarak nasıl şekilleneceğini belirleyen çok önemli bir yapıya sahiptir. Programlarımız, bu  şekillendirmeyi öğrenilmesi gereken bilgiler ve ağır kurallar üzerinden yapmaz, gençlerin kendini keşfetmesine imkan tanır. Onları cesaretlendirir ve yaşayarak öğrenmeye teşvik eder.
                Her biri eski kampçılarımızdan olan, Türkiye'nin ve dünyanın en iyi okullarında okuyan koçlarımız; gençlerin sosyal hayattaki duruşları, davranışları üzerinden kişiliklerini geliştirecek faaliyetler planlar ve onların sosyal yaşamda kendilerini konumlamalarında yardımcı olur.

                Farklı hayat deneyimleri yaşamak, yeni dostluklar kurmak ve kendilerini geliştirmek için kamplarımıza katılan gençlerin, ilerleyen yıllarda tecrübelerini kendilerinden küçük kampçılara aktarması üzerine kurulan “Friends Kültürü” her geçen gün güçlenmektedir. Friends Kampları, oluşturduğu kamp kültürü ile gençlerin gelecekte bağımsız bireyler olarak davranabilmelerine ve özgüvenlerini geliştirmelerine destek olmaktadır. "
              />
            </div>
            <img
              src="https://images.pexels.com/photos/8813582/pexels-photo-8813582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
              width={1216}
              height={640}
            />
          </li>
        </ul>
      </>
    </div>
  );
};

export default YurtdisiContent;
