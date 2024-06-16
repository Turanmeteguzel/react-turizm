import React from "react";

const Map = () => {
  return (
    <div>
      <div>
        <section className="bg-white">
          <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-20 lg:px-8">
            <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
              <h2
                className="text-4xl font-extrabold text-gray-900"
                id="contactUs"
              >
                Konumumuzu Ziyaret Edin
              </h2>
              <p className="mt-3 text-lg text-gray-500">
                Size en iyi şekilde hizmet edelim
              </p>
            </div>
            <div className="mt-8 lg:mt-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                    <div className="border-t border-gray-200 px-6 py-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        Muhasebe İletişim
                      </h3>
                      <p className="mt-1  text-gray-600">
                        <a>Telefon: +90 501 138 03 90</a>
                        <br />
                      </p>
                    </div>
                    <div className="px-6 py-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        Adresimiz
                      </h3>
                      <p className="mt-1 text-gray-600">
                        Kurtuluş Mah. Ziyapaşa Bulvarı no: 26 Eğmez Apt. kat: 1
                        daire:2, 01130 Seyhan / Adana
                      </p>
                    </div>
                    <div className="border-t border-gray-200 px-6 py-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        Çalışma Saatlerimiz
                      </h3>
                      <p className="mt-1 text-gray-600">
                        Pazartesi - Cumartesi : 08:00 - 17:00
                      </p>
                    </div>
                    <div className="grid grid-cols-3 m-10 gap-3 h-20 sm:columns-3">
                      <a
                        href="https://www.tursab.org.tr/tr/ddsv"
                        className="bg-slate-100 p-5 font-extrabold text-center items-center rounded-lg text-black "
                      >
                        Dijital Doğrulama Sistemini Aç
                      </a>
                      <img
                        src="https://www.vikingturizm.com.tr/Content/images/logos/iata.png"
                        alt=""
                      />
                      <img src="./images/digital.jpeg" alt="digitalbelge" />
                    </div>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden order-none sm:order-first">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d50982.854935377036!2d35.2921641!3d36.9995742!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15288fbc1bfcc157%3A0x806e805d3d335958!2sJojo%20Tatil!5e0!3m2!1str!2str!4v1717659702824!5m2!1str!2str"
                    className="w-full"
                    width={600}
                    height={450}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Map;
