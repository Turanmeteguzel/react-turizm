import React from "react";
import { Link } from "react-router-dom";

const EgitimContent = () => {
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
                    src="https://images.pexels.com/photos/1192048/pexels-photo-1192048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
                  Yurtdışı Eğitim Programları
                </h3>
                <p className="mb-6 text-neutral-900">
                  Jojo Eğitim, yurtdışı öğrenci organizasyonları ve eğitim
                  programları üzerinde uzmanlaşmış bir kuruluştur.
                  Organizasyonun her aşamasında uzman kadrosu ve uluslararası
                  alanda uzun yıllar hizmet veren konusunda branşlaşmış
                  partnerleriyle birlikte güvenilir, kaliteli ve deneyimli bir
                  hizmet sunar.
                </p>
                <Link to="/yurtdisi">
                  <button class="bg-gray-500 hover:bg-blue-300 mt-5 text-white font-light py-2 px-4 rounded-full transition">
                    Yurtdışı Programlarını İncele
                  </button>
                </Link>
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
                    src="https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
                  Yaz Okulları Programları
                </h3>
                <p className="text-neutral-900">
                  Dinamik kadrosu ile 10 yıllık bir tecrübeye sahip olan Jojo
                  Eğitim, 180 aşkın okulda hizmet sunarken, programlarına
                  25000'den fazla öğrenci katılımı sağlamıştır. Hizmet vermekte
                  olduğu okulların portföyü ile her yıl 50000'den fazla
                  öğrenciye temas etmektedir. Edindiği bu tecrübe ve çalışma ağı
                  sayesinde, kaliteden ödün vermeden, programlarını en uygun
                  fiyata sunmaktadır.
                </p>
                <Link to="/yazokulu">
                  <button class="bg-gray-500 hover:bg-blue-300 mt-5 text-white font-light py-2 px-4 rounded-full transition">
                    Yaz Okulları Programlarını İncele
                  </button>
                </Link>
              </div>
            </div>
          </section>
          {/* Section: Design Block */}
        </div>
        {/* Container for demo purpose */}
      </>
    </div>
  );
};

export default EgitimContent;
