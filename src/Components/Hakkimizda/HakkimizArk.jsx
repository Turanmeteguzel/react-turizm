import { motion } from "framer-motion";
import { IoMdMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";

const HakkimizArk = () => {
  return (
    <div className="bg-neutral-900 py-12">
      <div className="mb-8 px-4">
        <h3 className="text-slate-50 text-4xl font-semibold text-center">
          Müthiş Ekibimiz
        </h3>
        <p className="text-center text-slate-300 text-sm mt-2 max-w-lg mx-auto">
          Her Adımda Hizmet, Her Anında Memnuniyet: Sizin İçin Varız!
        </p>
      </div>
      <div className="p-4 overflow-x-hidden relative">
        <div className="absolute top-0 bottom-0 left-0 w-24 z-10 bg-gradient-to-r from-neutral-900 to-transparent" />

        <div className="flex items-center mb-4">
          <TestimonialList list={testimonials.top} duration={40} />
          <TestimonialList list={testimonials.top} duration={40} />
          <TestimonialList list={testimonials.top} duration={40} />
        </div>
        <div className="flex items-center mb-4">
          <TestimonialList list={testimonials.middle} duration={50} reverse />
          <TestimonialList list={testimonials.middle} duration={50} reverse />
          <TestimonialList list={testimonials.middle} duration={50} reverse />
        </div>
        <div className="absolute top-0 bottom-0 right-0 w-24 z-10 bg-gradient-to-l from-neutral-900 to-transparent" />
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
            <div className="bg-neutral-800 text-slate-50 p-4">
              <span className="block font-semibold text-lg mb-1">{t.name}</span>
              <span className="block mb-3 text-sm font-medium">{t.title}</span>
              <span className="block text-sm text-slate-300">{t.info}</span>
              <div className="mt-2 flex gap-3">
                <a href={t.wp} target="_blank" className="text-3xl ">
                  <FaWhatsapp />
                </a>
                <a href={t.mail} target="_blank" className="text-3xl ">
                  <IoMdMail />
                </a>
              </div>
            </div>
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
      img: "kisiler/bedir.jpg",
      name: "Bedir Eyriparmak",
      title: "Satış Danışmanı",
      info: "Hizmetimiz, Sizin Huzurunuz İçin.",
      wp: "https://wa.me/+9005058543517",
      mail: "mailto:bedireyriparmak@jojotatil.com",
    },
    {
      id: 2,
      img: "../kisiler/muhasebe.jpg",
      name: "Mert Tunç",
      title: "Muhasebe Danışmanı",
      info: "Her Adımda Hizmet, Her Anında Memnuniyet: Sizin İçin Varız!",
      wp: "https://wa.me/+9005011380390",
      mail: "mailto:muhasebe@jojotatil.com",
    },
    {
      id: 3,
      img: "../kisiler/mehdiye.jpg",
      name: "Mehdiye Avşar",
      title: "Satış Danışmanı",
      info: "Kaliteli Hizmetimizle Hayatınızı Kolaylaştırıyoruz, Sizin İçin Buradayız!",
      wp: "https://wa.me/+9005011437690",
      mail: "mailto:mehdiyeavsar@jojotatil.com",
    },
    ,
    {
      id: 4,
      img: "../kisiler/akin.jpg",
      name: "Akın Adamak",
      title: "Satış Danışmanı",
      info: "Her Adımda Hizmet, Her Anında Memnuniyet: Sizin İçin Varız!",
      wp: "https://wa.me/+9005064697694",
      mail: "mailto:akinadamak@jojotatil.com",
    },
    {
      id: 5,
      img: "../kisiler/melisa.jpg",
      name: "Melisa Arda",
      title: "Satış Danışmanı",
      info: "Her Adımda Hizmet, Her Anında Memnuniyet: Sizin İçin Varız!",
      wp: "https://wa.me/+9005544697614",
      mail: "mailto:operation@jojotatil.com",
    },
    ,
    {
      id: 6,
      img: "../kisiler/seda.jpg",
      name: "Seda Kaplan",
      title: "Satış Danışmanı",
      info: "Her Adımda Hizmet, Her Anında Memnuniyet: Sizin İçin Varız!",
      wp: "https://wa.me/+9005011379490",
      mail: "mailto:sedakaplan@jojotatil.com",
    },
    ,
    {
      id: 7,
      img: "../kisiler/izel.jpg",
      name: "İzel Yaman",
      title: "Satış Danışmanı",
      info: "Her Adımda Hizmet, Her Anında Memnuniyet: Sizin İçin Varız!",
      wp: "https://wa.me/+9005011417690",
      mail: "mailto:Pazarlama@jojotatil.com",
    },
  ],
  middle: [
    {
      id: 1,
      img: "kisiler/rayyu.jpg",
      name: "Rayyu Cebenli",
      title: "Satış Danışmanı",
      info: "Deneyimimizle Hizmetinizdeyiz, Sizin İçin En İyisini Sunuyoruz!",
      wp: "https://wa.me/+9005064697540",
      mail: "mailto:R.ayyucebenli@jojotatil.com",
    },
    {
      id: 2,
      img: "kisiler/sena.jpg",
      name: "Sena Uzun",
      title: "Satış Danışmanı",
      info: "Hizmetin En İyisini Sunmak İçin Varız, Sizin Memnuniyetiniz Önceliğimizdir!",
      wp: "https://wa.me/+9005064697541",
      mail: "mailto:senauzun@jojotatil.com",
    },
    {
      id: 3,
      img: "kisiler/yelda.jpg",
      name: "Yelda Manaz",
      title: "Satış Danışmanı",
      info: "Yüksek Standartta Hizmet, Sizin Beklentilerinizi Aşmayı Hedefliyoruz!",
      wp: "https://wa.me/+9005011397690",
      mail: "mailto:yelda.manaz@jojotatil.com",
    },
    {
      id: 4,
      img: "kisiler/melih.jpg",
      name: "Melih Batum",
      title: "Satış Danışmanı",
      info: "Yüksek Standartta Hizmet, Sizin Beklentilerinizi Aşmayı Hedefliyoruz!",
      wp: "https://wa.me/+9005064697542",
      mail: "mailto:mbatum@jojotatil.com",
    },
    ,
    {
      id: 5,
      img: "kisiler/envercan.jpg",
      name: "Envercan Tokgül",
      title: "Satış Danışmanı",
      info: "Yüksek Standartta Hizmet, Sizin Beklentilerinizi Aşmayı Hedefliyoruz!",
      wp: "https://wa.me/+9005300319691",
      mail: "mailto:Pazarlama@jojotatil.com",
    },
    ,
    {
      id: 6,
      img: "kisiler/ugur.jpg",
      name: "Uğur Avşar",
      title: "Operasyon",
      info: "Yüksek Standartta Hizmet, Sizin Beklentilerinizi Aşmayı Hedefliyoruz!",
      wp: "https://wa.me/+9005064697693",
      mail: "mailto:operation@jojotatil.com",
    },
    ,
    {
      id: 7,
      img: "kisiler/emirhan.jpg",
      name: "Emirhan Saran",
      title: "Satış Danışmanı",
      info: "Yüksek Standartta Hizmet, Sizin Beklentilerinizi Aşmayı Hedefliyoruz!",
      wp: "https://wa.me/+9005064697692",
      mail: "mailto:emirhansaran@jojotatil.com",
    },
  ],
};

export default HakkimizArk;
