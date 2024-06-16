import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

const Accordions = () => {
  const [open, setOpen] = useState(solutions[0].id);
  const imgSrc = solutions.find((s) => s.id === open)?.imgSrc;
  return (
    <section className="px-8 py-12 bg-white">
      <div className="w-full max-w-5xl mx-auto grid gap-8 grid-cols-1 lg:grid-cols-[1fr_350px]">
        <div>
          <h3 className="text-4xl font-bold text-neutral-900 mb-8">
            Tatil Planları
          </h3>
          <div className="flex flex-col gap-4">
            {solutions.map((q) => {
              return (
                <Solution
                  {...q}
                  key={q.id}
                  open={open}
                  setOpen={setOpen}
                  index={q.id}
                />
              );
            })}
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={imgSrc}
            className="bg-slate-300 rounded-2xl aspect-[4/3] lg:aspect-auto"
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
        </AnimatePresence>
      </div>
    </section>
  );
};

const Solution = ({ title, description, index, open, setOpen }) => {
  const isOpen = index === open;

  return (
    <div
      onClick={() => setOpen(index)}
      className="p-0.5 rounded-lg relative overflow-hidden cursor-pointer"
    >
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "240px" : "72px",
        }}
        className="p-6 rounded-[7px] bg-white flex flex-col justify-between relative z-20"
      >
        <div>
          <motion.p
            initial={false}
            animate={{
              color: isOpen ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 1)",
            }}
            className="text-xl font-medium w-fit bg-gradient-to-r from-gray-500 to-gray-800 bg-clip-text"
          >
            {title}
          </motion.p>
          <motion.p
            initial={false}
            animate={{
              opacity: isOpen ? 1 : 0,
            }}
            className="mt-4 bg-gradient-to-r from-gray-500 to-gray-800 bg-clip-text text-transparent"
          >
            {description}
          </motion.p>
        </div>
        <motion.button
          initial={false}
          animate={{
            opacity: isOpen ? 1 : 0,
          }}
          className="-ml-6 -mr-6 -mb-6 mt-4 py-2 rounded-b-md flex items-center justify-center gap-1 group transition-[gap] bg-gradient-to-r from-gray-500 to-gray-800 text-white"
        >
          <span>Learn more</span>
          <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          opacity: isOpen ? 1 : 0,
        }}
        className="absolute inset-0 z-10 bg-gradient-to-r from-gray-500 to-gray-800"
      />
      <div className="absolute inset-0 z-0 bg-slate-200" />
    </div>
  );
};

export default Accordions;

const solutions = [
  {
    id: 1,
    title: "Yurtdışı Turları",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos laudantium in iusto iure aliquam commodi possimus eaque sit recusandae incidunt?",
    imgSrc:
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmsxcnByemFhZnJxdTVidWszY2F2OTdrcmxzcW9yYzA0d3hreTVlZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vQBkSwVkEZfTq/giphy.gif",
  },
  {
    id: 2,
    title: "Yurtiçi Turları",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos laudantium in iusto iure aliquam commodi possimus eaque sit recusandae incidunt?",
    imgSrc:
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWszeHIycnRpMG05aTM2N3ZyaWFnaWNiMHp0eDhmZmRkbHk2cHlrZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZMYv5LPwsUC7D3YYuu/giphy.gif",
  },
  {
    id: 3,
    title: "Gemi Turları",
    description:
      "Tatil ve seyahatin birleşimini deniz üzerinde yaşayın. İster Ege, Akdeniz, Baltık isterseniz Karayip ve okyanuslarda yeni güne farklı bir limanda merhaba demek için size göre bir program seçelim. Benzersiz bir konforu yaşarken SPA ve güzellik merkezlerinin tadını çıkarın, dünya mutfaklarının tadına bakın, huzur ve eğlenceyi bir arada sayısız seçenek ile yakalayın.",
    imgSrc:
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHY3MjRub3V5dDlucWJta3NiNmJ6MmJhZW1xd2RvNXU4Nzh2ZGpmYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/T972aKvAU7EgB0nisO/giphy.gif",
  },
];
