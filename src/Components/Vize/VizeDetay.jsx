import React from "react";

const VizeDetay = () => {
  return (
    <div>
      <>
        {/* Container for demo purpose */}
        <div className="container my-12 mx-auto md:px-6">
          {/* Section: Design Block */}
          <section className="mb-10 m-10">
            <h2 className=" text-center font-heading mt-2 text-3xl leading-8 m-2 font-bold tracking-tight text-gray-900 sm:text-4xl">
              Vize Başvuru Bilgileri
            </h2>
            <p className="mt-4 text-center mb-9 max-w-2xl text-lg text-neutral-700 lg:mx-auto">
              Ülkemizde vize uygulamalarının ani ve sürekli olarak
              değişebilmesi, ilgili ülkenin konsolosluğu ve/veya büyükelçiliği
              ile irtibata geçmemizi de gerektiriyor. Bu nedenle vize
              başvurularından önce güncel bilgileri Elçilik, Konsolosluk, Aracı
              Kurum veya tarafımızdan teyid edilmesini öneririz.
            </p>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="mb-6 md:mb-8 lg:mb-12 m-2">
                <p className="mb-4 font-bold text-xl text-gray-600">
                  Pasaport Almak İçin
                </p>
                <p className="text-neutral-800  text-left">
                  Hususi (Yeşil ) ve Hizmet (Gri) pasaport başvuruları "
                  <strong>02.04.2018</strong>" tarihinden itibaren İl ve ilçe
                  Nüfus Müdürlüklerinden yapılmaktadır. <br /> <br /> Nufüs ve
                  Vatandaşlık işleri Genel Müdürlüğü internet sitesinde detaylı
                  bilgiler ile başvuru için randevu sistemi bulunmaktadır.{" "}
                  <br />
                  <br /> Yeni nesil pasaportlar da yenileme işlemi
                  yapılmamaktadır. Pasaport süresi dolduğu takdirde yeni bir
                  pasaport başvurusunda bulunmanız gerekmektedir. <br />
                  <br /> Pasaport randevuları aşağıdaki link üzerinden online
                  olarak veya Alo 199 numaralı çağrı merkezinden randevu
                  oluşturulmaktadır.
                </p>
              </div>

              <div className="mb-6 md:mb-8 lg:mb-12 m-2">
                <p className="mb-4 font-bold text-xl text-gray-600">
                  Yurt Dışı Çıkış Harçları
                </p>
                <p className="text-neutral-800">
                  Türkiye Cumhuriyeti pasaportu ile yurt dışına çıkış
                  yapanlardan çıkış başına 150 TL harç alınmaktadır. Buna
                  harçtan muaf kişiler şunlardır:
                </p>
                <ul className="w-full text-surface dark:text-black ">
                  <li className="w-full border-b-2 border-gray-500 py-4">
                    Çıkış tarihi itibarıyla yurt dışında oturma izni bulunanlar
                  </li>
                  <li className="w-full border-b-2 border-gray-500 py-4 ">
                    7 yaşını doldurmamış olanlar
                  </li>
                  <p className="mt-2">
                    Yurt dışına ticari amaçla sefer yapan kara, deniz, hava ve
                    demiryolu toplu taşıma ve yük taşıma araçlarının
                    mürettebatı.
                  </p>
                </ul>
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

export default VizeDetay;
