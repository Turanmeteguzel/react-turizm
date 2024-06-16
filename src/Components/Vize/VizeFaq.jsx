import React from "react";

const VizeFaq = () => {
  return (
    <div className="mb-14">
      <div className="relative w-full bg-green-50 px-6 pt-10 pb-8 mt-0 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
        <div className="mx-auto px-5">
          <div className="flex flex-col items-center">
            <h2 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-4xl">
              Vize Başvurularında Dikkat Edilecek Hususlar:
            </h2>
          </div>
          <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span> Boş vize sayfası?</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height={24}
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width={24}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  Vize başvurusu yapılırken geçerli pasaportunuzda boş vize
                  sayfası bulunması gerekiyor.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span>Ne zaman vize başvurusu yapmalıyım?</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height={24}
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width={24}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  Vize başvurularınızı, seyahatlerinizden mümkün olduğu kadar
                  önce yapmaya gayret etmelisiniz. Pasaportların geri veriliş
                  sürelerinin özellikle bayram, sömestr, paskalya, fuar ve
                  yılbaşı gibi yoğun dönemlerde daha da uzayabileceğini
                  hatırlatalım.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span> En az altı ay geçerli?</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height={24}
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width={24}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  Tüm seyahatlerde vize gereksin veya gerekmesin en az altı ay
                  geçerli pasaport olmalıdır.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span>Her ülkenin başvuru kuralları aynı mı?</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height={24}
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width={24}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  Türkiye’deki büyükelçilik, konsolosluk ve başkonsolosluklara
                  yapılan vize başvurularında yükümlü olduğunuz her türlü kural,
                  ilgili ülke tarafından belirleniyor. Her ülkenin vize
                  başvurusu için uygulanması gereken prosedürler ve arzu edilen
                  dokümanlar değişiklik gösterebiliyor.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span> Vize formunu kim doldurmalı?</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height={24}
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width={24}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  Vize formunun mutlaka başvuru sahibi tarafından doldurulmuş
                  olması ve başvuru sahibi tarafından imzalanması gerekiyor.
                  Vize formu üzerindeki imzanın, pasaporttaki imza ile
                  karşılaştırılacağını unutmayalım.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span>18 yaş altı yalnız seyahat edebilir mi?</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height={24}
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width={24}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  18 yaş altı yanlız seyahat edecek çocuklar yanlarında yasal
                  velilerinden noter onaylı muafakatname bulundurmalıdır.
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VizeFaq;
