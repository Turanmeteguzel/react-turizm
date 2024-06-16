import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiStar } from "react-icons/fi";
import emailjs from "@emailjs/browser";

const Mail = () => {
  return (
    <section className="grid  md:m-20 min-h-screen grid-cols-1 bg-white md:grid-cols-[1fr,_400px] lg:grid-cols-[1fr,_600px]">
      <Form />
      <SupplementalContent />
    </section>
  );
};

const Form = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_1urqxz4", "template_nsvguww", ref.current, {
        publicKey: "XqqcKcNBAKYZalYb1",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setSuccess(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setSuccess(false);
        }
      );
  };
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      transition={{
        staggerChildren: 0.05,
      }}
      viewport={{ once: true }}
      className="flex items-center justify-center pb-4 pt-20 md:py-20"
    >
      <div className="mx-auto my-auto max-w-lg px-4 md:pr-0">
        <motion.h1
          variants={primaryVariants}
          className="mb-2 text-center text-4xl font-bold"
        >
          İletişim
        </motion.h1>
        <motion.p variants={primaryVariants} className="mb-8 text-center">
          Bizimle iletişime geçin.
        </motion.p>

        <form ref={ref} onSubmit={handleSubmit} className="w-full">
          <motion.div variants={primaryVariants} className="mb-2 w-full">
            <label
              htmlFor="password-input"
              className="mb-1 inline-block text-sm font-medium"
            >
              Ad Soyad<span className="text-red-600">*</span>
            </label>
            <input
              name="name"
              id="password-input"
              type="text"
              placeholder="Adınızı ve soyadınızı giriniz."
              className="w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-indigo-600"
              required
            />
          </motion.div>
          <motion.div variants={primaryVariants} className="mb-2 w-full">
            <label
              htmlFor="email-input"
              className="mb-1 inline-block text-sm font-medium"
            >
              Email<span className="text-red-600">*</span>
            </label>
            <input
              name="email"
              id="email-input"
              type="email"
              placeholder="Email adresinizi giriniz."
              className="w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-indigo-600"
              required
            />
          </motion.div>

          <motion.div variants={primaryVariants} className="mb-4 w-full">
            <label
              htmlFor="rt-password-input"
              className="mb-1 inline-block text-sm font-medium"
            >
              Mesajınız...<span className="text-red-600">*</span>
            </label>
            <textarea
              name="message"
              id="rt-password-input"
              type="text"
              placeholder="Mesajınız"
              className="w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-indigo-600"
              required
            />
          </motion.div>

          <motion.div
            variants={primaryVariants}
            className="mb-4 flex w-full items-start gap-1.5"
          >
            <input
              type="checkbox"
              id="terms-checkbox"
              className="h-4 w-4 accent-indigo-600"
              required
            />
            <label htmlFor="terms-checkbox" className="text-xs">
              Kaydolarak şartlar ve koşulları, gizlilik politikasını ve çerez
              politikasını kabul ediyorum
            </label>
          </motion.div>

          <motion.button
            type="submit"
            variants={primaryVariants}
            whileTap={{
              scale: 0.985,
            }}
            className="mb-1.5 w-full rounded bg-neutral-800 px-4 py-2 text-center font-medium text-white transition-colors hover:bg-neutral-500"
          >
            Mesajı Gönder
          </motion.button>
          {success && "Mesaj Gönderildi. En kısa sürede geri dönüş yapacağız."}
        </form>
      </div>
    </motion.div>
  );
};

const SupplementalContent = () => {
  return (
    <div className="group sticky top-4 m-4 h-80 overflow-hidden rounded-3xl rounded-tl-[4rem] bg-neutral-400 md:h-[calc(100vh_-_2rem)]">
      <img
        alt="An example image"
        src="https://images.pexels.com/photos/3185480/pexels-photo-3185480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        className="h-full w-full bg-white object-cover transition-all duration-500 group-hover:scale-105 group-hover:opacity-50"
      />

      <div className="absolute right-2 top-4 z-10">
        <FiArrowUpRight className="rotate-45 text-6xl text-indigo-200 opacity-0 transition-all duration-500 group-hover:rotate-0 group-hover:opacity-100" />
      </div>

      <motion.div
        initial="initial"
        whileInView="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        viewport={{ once: true }}
        className="absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-t from-neutral-950 to-slate-950/0 p-8"
      >
        <motion.h2
          className="mb-2 text-3xl font-semibold leading-[1.25] text-white lg:text-4xl"
          variants={primaryVariants}
        >
          Türkiye'nin Lider
          <br />
          Turizm Firması
        </motion.h2>
        <motion.p
          variants={primaryVariants}
          className="mb-6 max-w-md text-sm text-slate-300"
        >
          Unutulmaz Anılar İçin Yol Arkadaşınız: Keyifli Yolculuklar Jojo
          Turizmle !
        </motion.p>
        <div className="flex items-center gap-4"></div>
      </motion.div>
    </div>
  );
};

const primaryVariants = {
  initial: {
    y: 25,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

const avatarVariants = {
  initial: {
    x: 10,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
};

export default Mail;
