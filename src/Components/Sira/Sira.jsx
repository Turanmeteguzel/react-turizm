import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

const Sira = () => {
  return (
    <section className="bg-neutral-900 p-4 md:p-8 ">
      <div className="mx-auto max-w-5xl">
        <Link
          heading="Kurumsal Seyahat"
          subheading="Seyahat yönetimi konusundaki uzmanlığımız, sektördeki 30 yıllık tecrübe ve liderliğimiz bireysel ve kurumsal müşterilerimize her türlü seyahat hizmetini sunuyoruz."
          imgSrc="https://images.pexels.com/photos/13772488/pexels-photo-13772488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          href="#"
        />
        <Link
          heading="Organizasyonlar"
          subheading="Günümüzde pandemi etkisinin izin verdiği ölçüde dünyanın istediğiniz noktasında satış, motivasyon ya da bayi gezileri düzenleyebilir, çalışanlarınızın performanslarını ve iş akışınızı eğlenceli bir yolla geliştirebiliriz."
          imgSrc="https://images.pexels.com/photos/16408/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          href="#"
        />
        <Link
          heading="Jojo Tatil"
          subheading="Pandemi dönemiyle kapalı ülkerinde aralarında olduğu yurtdışı tatil alternatiflerimizi gözden geçirebilirsiniz. Ayrıca açık ülkeler alternatif isterseniz tarafımızla iletşime geçebilirsiniz."
          imgSrc="https://images.pexels.com/photos/413960/pexels-photo-413960.jpeg"
          href="#"
        />
        <Link
          heading="Vize"
          subheading="Kurumsal ve bireysel tüm müşterilerimiz için vize başvurularına ışık tutabilmek için kapsamlı bir vize başvuru bilgileri içeriği hazırladık."
          imgSrc="https://images.pexels.com/photos/4922080/pexels-photo-4922080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          href="#"
        />
      </div>
    </section>
  );
};

const Link = ({ heading, imgSrc, subheading, href }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-4xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-white md:text-5xl"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-white">
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-2xl text-neutral-50" />
      </motion.div>
    </motion.a>
  );
};

export default Sira;
