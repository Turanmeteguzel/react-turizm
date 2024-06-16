import React from "react";
import { Link } from "react-router-dom";

const OrgContent = () => {
  return (
    <>
      <div className="mb-16 m-10 m:m-20 flex flex-wrap">
        <div className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6">
          <div
            className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
            data-te-ripple-init=""
            data-te-ripple-color="light"
          >
            <img
              src="https://images.pexels.com/photos/19872/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="w-full"
              alt="Louvre"
            />
            <a href="#!">
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
            </a>
          </div>
        </div>
        <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6">
          <h3 className="mb-4 text-3xl font-bold">Yurt Dışı Organizasyonlar</h3>
          <p className="mb-6 text-neutral-900">
            Turizm Şirketimizle Yurt Dışında Benzersiz Deneyimlere Hazır
            mısınız? Keşfedilmemiş Yerleri ve Kültürleri Keşfedin! Profesyonel
            Rehberlerimizle Unutulmaz Anılar Biriktirin. Hayalinizdeki Tatili
            Bizimle Gerçeğe Dönüştürün. Sizi Dünya Turuna Çıkarmak İçin
            Buradayız, Sadece Bize Katılın!
          </p>
          <Link to="/yurtdisiorganizasyonlar">
            <button class="bg-neutral-900 hover:bg-blue-300 mt-5 text-white font-light py-2 px-4 rounded-full transition">
              Yurt Dışı Organizasyonları İncele
            </button>
          </Link>
        </div>
      </div>
      <div className="mb-16 m-10 m:m-20 flex flex-wrap lg:flex-row-reverse">
        <div className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pl-6">
          <div
            className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
            data-te-ripple-init=""
            data-te-ripple-color="light"
          >
            <img
              src="https://images.pexels.com/photos/1549326/pexels-photo-1549326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="w-full"
              alt="Louvre"
            />
            <a href="#!">
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
            </a>
          </div>
        </div>
        <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6">
          <h3 className="mb-4 text-3xl font-bold">Yurt İçi Organizasyonlar</h3>
          <p className="text-neutral-900">
            Yurt İçinde Keşfetmeye Hazır mısınız? Türkiye'nin Görülmesi Gereken
            Güzelliklerini Bir Araya Getirdik! Doğanın Büyüleyici Dokusunu,
            Tarihin Derin İzlerini ve Lezzetli Mutfağını Keşfedin! Profesyonel
            Rehberlerimizle Anılarınızı Ölümsüzleştirin. Hayalinizdeki Tatil
            Rüyası, Bizimle Gerçeğe Dönüşüyor!
          </p>
          <Link to="/yurticiorganizasyonlar">
            <button class="bg-neutral-900 hover:bg-blue-300 mt-5 text-white font-light py-2 px-4 rounded-full transition">
              Yurt İçi Organizasyonları İncele
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default OrgContent;
