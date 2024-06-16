import { motion } from "framer-motion";

const Testi = () => {
  return (
    <div className="bg-neutral-900 py-12">
      <div className="mb-8 px-4">
        <h3 className="text-slate-50 text-4xl font-semibold text-center">
          Müşteri Görüşleri
        </h3>
        <p className="text-center text-slate-300 text-sm mt-2 max-w-lg mx-auto">
          Bizimle vakit geçirdiğiniz için teşekkür ederiz, tekrar görmeyi dört
          gözle bekliyoruz.
        </p>
      </div>
      <div className="p-4 overflow-x-hidden relative">
        <div className="absolute top-0 bottom-0 left-0 w-24 z-10 bg-gradient-to-r from-zinc-950 to-transparent" />

        <div className="flex items-center mb-4">
          <TestimonialList list={testimonials.top} duration={125} />
          <TestimonialList list={testimonials.top} duration={125} />
          <TestimonialList list={testimonials.top} duration={125} />
        </div>
        <div className="flex items-center mb-4">
          <TestimonialList list={testimonials.middle} duration={75} reverse />
          <TestimonialList list={testimonials.middle} duration={75} reverse />
          <TestimonialList list={testimonials.middle} duration={75} reverse />
        </div>
        <div className="flex items-center">
          <TestimonialList list={testimonials.bottom} duration={275} />
          <TestimonialList list={testimonials.bottom} duration={275} />
          <TestimonialList list={testimonials.bottom} duration={275} />
        </div>

        <div className="absolute top-0 bottom-0 right-0 w-24 z-10 bg-gradient-to-l from-zinc-950 to-transparent" />
      </div>
    </div>
  );
};

const TestimonialList = ({ list, reverse = false, duration = 50 }) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      className="flex gap-4 px-2"
    >
      {list.map((t) => {
        return (
          <div
            key={t.id}
            className="shrink-0 w-[500px] grid grid-cols-[7rem,_1fr] rounded-lg overflow-hidden relative"
          >
            <img src={t.img} className="w-full h-44 object-cover" />
            <div className="bg-zinc-800 text-slate-50 p-4">
              <span className="block font-semibold text-lg mb-1">{t.name}</span>
              <span className="block mb-3 text-sm font-medium">{t.title}</span>
              <span className="block text-sm text-slate-300">{t.info}</span>
            </div>
            <span className="text-7xl absolute top-2 right-2 text-slate-700">
              "
            </span>
          </div>
        );
      })}
    </motion.div>
  );
};

const testimonials = {
  top: [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1627161683077-e34782c24d81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=703&q=80",
      name: "Elif Tekin",
      title: "Değerli Müşterimizin Yorumu:",
      info: "Turizm şirketinizin organizasyonuyla gerçekten unutulmaz bir tatil geçirdik!",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
      name: "Furkan Akın",
      title: "Founder of XYZ",
      info: "Yolculuğumuz boyunca turizm şirketinizin profesyonelliği bizi etkiledi.",
    },
    {
      id: 3,
      img: "https://plus.unsplash.com/premium_photo-1670588776139-da93b47afc6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "İpek Gürsoy",
      title: "Founder of XYZ",
      info: "Her detayı düşünülmüş, mükemmel bir tatil deneyimi yaşattınız.",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
      name: "Nihan Yılmazer",
      title: "Founder of XYZ",
      info: "Turizm şirketinizin rehberleri harika bilgi ve deneyimle doluydu!",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Alper Çetin",
      title: "Değerli Müşterimizin Yorumu:",
      info: "Yeniden tercih edeceğim bir turizm şirketi, teşekkürler!",
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      name: "Berkay Kartal",
      title: "Değerli Müşterimizin Yorumu:",
      info: "Tatilimizi unutulmaz kılan turizm şirketinize sonsuz teşekkürler.",
    },
  ],
  middle: [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Zeynep Demir",
      title: "Değerli Müşterimizin Yorumu:",
      info: "Yolculuğumuzu sorunsuz ve keyifli kılan tek adres: Turizm şirketiniz!",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1580518324671-c2f0833a3af3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Claude O.",
      title: "Değerli Müşterimizin Yorumu:",
      info: "Turizm şirketinizin sağladığı hizmet gerçekten beklentilerimizi aştı.",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
      name: "Can Tekin",
      title: "Değerli Müşterimizin Yorumu:",
      info: "Tatilimizi planlama sürecinden geri dönüşümüze kadar her aşamada turizm şirketinizin profesyonelliğini hissettik.",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80",
      name: "Emre Arslan",
      title: "Değerli Müşterimizin Yorumu:",
      info: "Turizm şirketinizle gerçekleştirdiğimiz tatil, hayallerimizin ötesindeydi!",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1625504615927-c14f4f309b63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80",
      name: "Mustafa Öztürk",
      title: "Değerli Müşterimizin Yorumu:",
      info: "Sonsuz macera ve keşif için turizm şirketinizin kapılarını araladık, hiç pişman olmadık.",
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1589729132389-8f0e0b55b91e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      name: "Esra Öztürk",
      title: "Değerli Müşterimizin Yorumu:",
      info: "Tatilimiz boyunca turizm şirketinizin özenli ilgisi her an hissedildi.",
    },
  ],
  bottom: [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1558222218-b7b54eede3f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Ali Demir",
      title: "Değerli Müşterimizin Yorumu:",
      info: "Turizm şirketinizle yapılan tatil, sadece dinlenmek değil, aynı zamanda keşfetmekti!",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1620932934088-fbdb2920e484?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80",
      name: "Tolga Aslan",
      title: "Değerli Müşterimizin Yorumu:",
      info: "Tatilimizin sorunsuz geçmesini sağlayan turizm şirketinize minnettarız.",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1514222709107-a180c68d72b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=898&q=80",
      name: "İsmail Ateş",
      title: "Değerli Müşterimizin Yorumu:",
      info: "Turizm şirketinizin organizasyonuyla gerçekten dünya turu yapmış gibi hissettik!",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Mehmet Kaya",
      title: "Değerli Müşterimizin Yorumu:",
      info: "Turizm şirketinizin samimi yaklaşımı, tatilimizi daha da özel kıldı.",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1597346908500-28cda8acfe4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Efe Yılmazer",
      title: "Değerli Müşterimizin Yorumu:",
      info: "Her anı dolu dolu yaşadığımız tatilimizde turizm şirketinizin rolü büyük oldu.",
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1642790595397-7047dc98fa72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80",
      name: "Ahmet Yılmaz",
      title: "Değerli Müşterimizin Yorumu:",
      info: "Turizm şirketinizle yaşadığımız tatilde sadece dinlenmedik, aynı zamanda kültürler arası bir deneyim yaşadık.",
    },
  ],
};

export default Testi;
