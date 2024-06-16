import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const ColorChangeCards = () => {
  return (
    <div className="p-4 md:p-8 bg-neutral-950">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 w-full max-w-6xl mx-auto">
        <Card
          heading="YURTDIŞI TURLAR"
          description="Pandemi dönemiyle kapalı ülkerinde aralarında olduğu yurtdışı tatil alternatiflerimizi gözden geçirebilirsiniz. Ayrıca açık ülkeler alternatif isterseniz tarafımızla iletşime geçebilirsiniz."
          imgSrc="https://images.pexels.com/photos/69121/passenger-traffic-airline-aviation-air-transportation-69121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Card
          heading="YURTİÇİ TATİL"
          description="Yurtiçi Turlar, İstanbul Şehir Gezileri, Anadolu Kültür Gezileri, Mavi Yolculuk, İstanbul Boğaz Gezileri"
          imgSrc="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Card
          heading="KONSER, SPOR ORGANİZASYONLARI & BASIN GEZİLERİ"
          description="Kültür ve spor aktivitelerinde, çeşitli konserlerde ister davetli ister davetçi olun zamanınızı en iyi şekilde yönetmenizi ve keyif almanızı sağlıyoruz. Tüm eğlenceli aktiviteleri düzenlemek için Viking Turizm ekibinden destek alabilirsiniz."
          imgSrc="https://images.unsplash.com/photo-1576328077645-2dd68934d2b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80"
        />
        <Card
          heading="KURUMSAL TURLAR"
          description="Kurumlara özel düzenlediğimiz kurumsal turlar, farklı birçok bölge, alanında uzman kişilerle düzenlenen kurumsal turlar için Viking Turizm’den destek alabilirsiniz."
          imgSrc="https://images.pexels.com/photos/325193/pexels-photo-325193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />{" "}
        <Card
          heading="TOPLANTI & ORGANİZASYON YÖNETİMİ (MICE)"
          description="Günümüzde pandemi etkisinin izin verdiği ölçüde dünyanın her noktasında, hedeflediğiniz amaca yönelik düzenlenmiş kongre, seminer ve ticari toplantılarınızı organize ediyor; son ana kadar operasyon detaylarını yönetiyoruz."
          imgSrc="https://images.unsplash.com/photo-1576328077645-2dd68934d2b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80"
        />{" "}
        <Card
          heading="TEŞVİK & BAYİ GEZİLERİ"
          description="Dünyanın istediğiniz her noktasına satış, motivasyon toplantıları düzenleyebilir Viking Turim’in deneyimli ekibinden destek alabilirsiniz."
          imgSrc="https://images.unsplash.com/photo-1576328077645-2dd68934d2b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80"
        />{" "}
        <Card
          heading="TOPLANTI, KONGRE VE SEMİNER HİZMETLERİ"
          description="Kurumunuzun en önemli konuklarını ağırlayacağınız toplantı, seminer ya da kongreler için Viking Turizm’in alanında uzman ekibine ve tecrübelerine güvenebilirsiniz."
          imgSrc="https://images.pexels.com/photos/247839/pexels-photo-247839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />{" "}
        <Card
          heading="ÜRÜN LANSMANLARI, AÇILIŞ, DAVET & FUAR HİZMETLERİ"
          description="Ürünlerinizin unutulamayacağı lansmanlara, açılış ve davetlere imza atmanızı sağlayabiliriz. Kurum kültürünüze uygun fuar ve organizasyonları yönetmek için Viking Turizm ekibinden destek alabilirsiniz."
          imgSrc="https://images.unsplash.com/photo-1576328077645-2dd68934d2b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80"
        />{" "}
        <Card
          heading="SANAL ETKİNLİKLER"
          description="Etkinlik dünyasında hayatımızda daha çok yer almaya başlayan dijital organizasyonlarda; tasarımdan amaca yönelik uygun platform seçimine kadar gerçek bir etkinlikte olduğu gibi tüm süreçlerde yer almaktayız."
          imgSrc="https://images.unsplash.com/photo-1576328077645-2dd68934d2b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80"
        />
      </div>
    </div>
  );
};

const Card = ({ heading, description, imgSrc }) => {
  return (
    <motion.div
      transition={{
        staggerChildren: 0.035,
      }}
      whileHover="hover"
      className="w-full h-64 bg-slate-300 overflow-hidden cursor-pointer group relative"
    >
      <div
        className="absolute inset-0 saturate-100 md:saturate-0 md:group-hover:saturate-100 group-hover:scale-110 transition-all duration-500"
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="p-4 relative z-20 h-full text-slate-300 group-hover:text-white transition-colors duration-500 flex flex-col justify-between">
        <FiArrowRight className="text-3xl group-hover:-rotate-45 transition-transform duration-500 ml-auto" />
        <div>
          <h4>
            {heading.split("").map((l, i) => (
              <ShiftLetter letter={l} key={i} />
            ))}
          </h4>
          <p>{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const ShiftLetter = ({ letter }) => {
  return (
    <div className="inline-block overflow-hidden h-[36px] font-semibold text-3xl">
      <motion.span
        className="flex flex-col min-w-[4px]"
        style={{
          y: "0%",
        }}
        variants={{
          hover: {
            y: "-50%",
          },
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <span>{letter}</span>
        <span>{letter}</span>
      </motion.span>
    </div>
  );
};

export default ColorChangeCards;
