import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

function Carousel() {
  const [idx, setIdx] = useState(0);
  const [prevIdx, setPrevIdx] = useState(idx);

  const trend = idx > prevIdx ? 1 : -1;

  const imageIndex = Math.abs(idx % images.length);

  return (
    <div className="h-[50vw] mb-10 md:m-16 min-h-[400px] max-h-[600px] bg-black relative overflow-hidden">
      <button
        onClick={() => {
          setPrevIdx(idx);
          setIdx((pv) => pv - 1);
        }}
        className="bg-black/50 hover:bg-black/60 transition-colors text-white p-2 absolute z-10 left-0 top-0 bottom-0"
      >
        <FiChevronLeft />
      </button>

      <div className="absolute inset-0 z-[5] backdrop-blur-xl">
        <AnimatePresence initial={false} custom={trend}>
          <motion.img
            variants={imgVariants}
            custom={trend}
            initial="initial"
            animate="animate"
            exit="exit"
            key={images[imageIndex].id}
            src={images[imageIndex].src}
            alt={images[imageIndex].title}
            style={{ y: "-50%", x: "-50%" }}
            className="aspect-square max-h-[90%] max-w-[calc(100%_-_80px)] mx-auto bg-black object-cover shadow-2xl absolute left-1/2 top-1/2"
          />
        </AnimatePresence>
      </div>
      <button
        onClick={() => {
          setPrevIdx(idx);
          setIdx((pv) => pv + 1);
        }}
        className="bg-black/50 hover:bg-black/60 transition-colors text-white p-2 absolute z-10 right-0 top-0 bottom-0"
      >
        <FiChevronRight />
      </button>

      <AnimatePresence initial={false} custom={trend}>
        <motion.span
          custom={trend}
          variants={titleVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          key={images[imageIndex].id}
          className="text-white text-xl md:text-2xl p-2 rounded-lg bg-white/10 backdrop-blur-lg font-semibold shadow-lg absolute z-20 left-10 bottom-4"
        >
          {images[imageIndex].title}
        </motion.span>
      </AnimatePresence>

      <AnimatePresence initial={false}>
        <motion.div
          key={images[imageIndex].id + images.length}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 object-fill z-0"
          style={{
            backgroundImage: `url(${images[imageIndex].src})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
      </AnimatePresence>
    </div>
  );
}

const imgVariants = {
  initial: (trend) => ({
    x: trend === 1 ? "200%" : "-200%",
    opacity: 0,
  }),
  animate: { x: "-50%", opacity: 1 },
  exit: (trend) => ({
    x: trend === 1 ? "-200%" : "200%",
    opacity: 0,
  }),
};

const titleVariants = {
  initial: (trend) => ({
    y: trend === 1 ? 20 : -20,
    opacity: 0,
  }),
  animate: { y: 0, opacity: 1 },
  exit: (trend) => ({
    y: trend === 1 ? -20 : 20,
    opacity: 0,
  }),
};

const images = [
  {
    src: "https://static.wixstatic.com/media/23814c_9fa584a76c7546d3b5c7dd42c05610dc~mv2.jpg/v1/fill/w_1500,h_563,al_t,q_85,enc_auto/23814c_9fa584a76c7546d3b5c7dd42c05610dc~mv2.jpg",
    title: "Jojo Eğitim Öğrenci Programları",
    id: 1,
  },
  {
    src: "https://images.pexels.com/photos/6238120/pexels-photo-6238120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Jojo Eğitim Yurtdışı Dil Eğitimi Ve Yaz Okulları",
    id: 2,
  },
  {
    src: "https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Dünya'yı Ve Kendini Keşfet.",
    id: 3,
  },
  {
    src: "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Üniversite Tanıtım Programları",
    id: 4,
  },
  {
    src: "https://images.pexels.com/photos/1860618/pexels-photo-1860618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Motivasyon ve Eğlence Programları",
    id: 5,
  },
];

export default Carousel;
