import React from "react";
import Deneme from "../Deneme/Deneme";

const EgitimCard = () => {
  return (
    <div>
      <h2 className="font-bold mb-4 bg-gray-100 px-4 py-2 rounded-lg md:w-96 text-center md:mx-auto text-2xl text-black">
        Yaz Okulları
      </h2>
      <div className="grid-cols-1 sm:grid md:grid-cols-4 ml-10 mr-10 md:ml-20 md:mr-20 mb-10">
        <div className="mx-3 mt-6 flex flex-col rounded-lg bg-gray-300 text-surface shadow-secondary-1 dark:bg-surface-dark sm:shrink-0 sm:grow sm:basis-0">
          <a href="#!">
            <img
              className="rounded-t-lg"
              src="https://d2sj6gv6213dvd.cloudfront.net/files/School/64009/x1080/Carnot_campus_outside_3.jpg"
              alt="Hollywood Sign on The Hill"
            />
          </a>
          <div className="p-6">
            <h5 className="text-xl font-bold mb-2">Antibes/FRANSA</h5>
            <h5 className="mb-2 text-xl font-light leading-tight">
              ATOLL JUNIORS
            </h5>
            <p className="mb-4 text-base">
              Atoll Juniors, Antibes kentinin doğu yakasında bulunur. Okul,
              şehir merkezi ve plajlara 2,5 kilometre mesafededir. Nice Côte
              d'Azur havaalanına ise 25 km uzaklıktadır.
            </p>
            <Deneme
              imgUrl="https://static.wixstatic.com/media/23814c_4b2de409ae004b449441bc22a7931911~mv2.jpg/v1/fill/w_568,h_425,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/23814c_4b2de409ae004b449441bc22a7931911~mv2.jpg"
              title="ATOLL JUNIORS"
              desc="Atoll Juniors, Antibes kentinin doğu yakasında bulunur. Okul, şehir merkezi ve plajlara 2,5 kilometre mesafededir. Nice Côte d'Azur havaalanına ise 25 km uzaklıktadır.
                Haftada 20 ders Fransızca dersi verilir. Dersler 45 dk. ve sınıflar en fazla 15 kişiliktir. Kurs bitiminde sertifika verilir.
                Öğleden sonra sportif ve sosyal aktiviteler; spor turnuvaları, disko, tiyatro, film gösterileri, yelken, futbol, tenis, barbekü, voleybol, dart, badminton, masa tenisi, dans yer almaktadır."
            />
          </div>
        </div>
        <div className="mx-3 mt-6 flex flex-col rounded-lg bg-gray-300 text-surface shadow-secondary-1 dark:bg-surface-dark sm:shrink-0 sm:grow sm:basis-0">
          <a href="#!">
            <img
              className="rounded-t-lg"
              src="https://images.pexels.com/photos/18713008/pexels-photo-18713008/free-photo-of-koln-geceleri.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Hollywood Sign on The Hill"
            />
          </a>
          <div className="p-6">
            <h5 className="text-xl font-bold mb-2">Köln/ALMANYA</h5>
            <h5 className="mb-2 text-xl font-light leading-tight">
              HUMBOLDT INSTITUT
            </h5>
            <p className="mb-4 text-base">
              Okul binası, Deutz bölgesinde, Ren nehrine ve ana tren istasyonuna
              komşu, şehrin kalbinde yer almaktadır. Modern okul binası, birçok
              alışveriş merkezine, müzelere, Old Town’a yürüme mesafesindedir.
            </p>
            <Deneme
              imgUrl="https://static.wixstatic.com/media/23814c_f65d9bd08cd04e7a83ebe583678177dc~mv2.jpg/v1/fill/w_586,h_391,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/23814c_f65d9bd08cd04e7a83ebe583678177dc~mv2.jpg"
              title="HUMBOLDT INSTITUT"
              desc=" Okul binası, Deutz bölgesinde, Ren nehrine ve ana tren istasyonuna komşu, şehrin kalbinde yer almaktadır. Modern okul binası, birçok alışveriş merkezine, müzelere, Old Town’a yürüme mesafesinde olup sakin bir caddede bulunmaktadır. Aynı binada ders alma ve konaklama imkanı sunulmaktadır. 
              Haftada 30 ders Almanca dersi verilir. Sınıflar max. 10 kişiliktir. Kurs bitiminde  sertifika verilir.
              Sportif ve sosyal aktiviteler; barbekü partileri, langırt, basketbol, bilardo, tahta oyunları, Internet, müze ziyaretleri, parti odası,  ping-pong, futbol, yüzme, voleybol ve birçok yerel Köln ziyareti gerçekleştirilmektedir."
            />
          </div>
        </div>
        <div className="mx-3 mt-6 flex flex-col rounded-lg bg-gray-300 text-surface shadow-secondary-1 dark:bg-surface-dark  sm:shrink-0 sm:grow sm:basis-0">
          <a href="#!">
            <img
              className="rounded-t-lg"
              src="https://images.pexels.com/photos/1750754/pexels-photo-1750754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Skyscrapers"
            />
          </a>
          <div className="p-6">
            <h5 className="text-xl font-bold mb-2">Toronto/KANADA</h5>
            <h5 className="mb-2 text-xl font-light leading-tight">
              St. ANDREW'S COLLEGE
            </h5>
            <p className="mb-4 text-base">
              Toronto Yaz Okulu programları dünyanın en uzun caddesi olan Yonge
              Street üzerinde bulunan St Andrew's College bünyesinde
              sunulmaktadır.
            </p>
            <Deneme
              imgUrl="https://static.wixstatic.com/media/23814c_a2de6e36515641ba8b8ce3e0caddda0b~mv2.jpg/v1/fill/w_631,h_309,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/23814c_a2de6e36515641ba8b8ce3e0caddda0b~mv2.jpg"
              title="St. ANDREW'S COLLEGE"
              desc="Toronto Yaz Okulu programları dünyanın en uzun caddesi olan Yonge Street üzerinde bulunan St Andrew's College bünyesinde sunulmaktadır. 1899 yılında kurulan ve bağımsız özel bir yatılı lise olan St Andrew's College 110 hektarlık alanıyla öğrencilerin tüm ihtiyaçlarını karşılayacak donanımlar sunmaktadır. Şehir merkezine 40 dakika uzaklıkta yer alan okulda modern sınıflar, bilgisayar laboratuvarları, spor sahaları, yüzme havuzu vb. bir çok olanak bulunmaktadır. Kampüs aynı zamanda öğrencilerin konaklama ihtiyaçlarını karşılamak için yurtlara sahiptir. Öğrenciler St Giles Toronto'da İngilizce eğitim alırken bir yandan da okul tarafından sunulan çeşitli aktivitelerle ders sonrasındaki zamanlarını en iyi şekilde geçirmektedirler.
              Haftada 15 saat genel İngilizce kursu vardır. Bir ders 50 dakikadır. Sınıflar en fazla 12 kişiliktir. Öğrenciler ilk gün seviye tespit sınavına katılır ve seviyelerine uygun sınıflara verilir. Kurs bitiminde katılım sertifikası verilir."
            />
          </div>
        </div>
        <div className="mx-3 mt-6 flex flex-col rounded-lg bg-gray-300 text-surface shadow-secondary-1 dark:bg-surface-dark sm:shrink-0 sm:grow sm:basis-0">
          <a href="#!">
            <img
              className="rounded-t-lg"
              src="https://www.stmartin.edu/sites/default/files/styles/500x366/public/2022-06/Hero_OldMain.jpg?h=fd0a1f7a&itok=0mnChZlQ"
              alt="Los Angeles Skyscrapers"
            />
          </a>
          <div className="p-6">
            <h5 className="text-xl font-bold mb-2">St Julian's/MALTA</h5>
            <h5 className="mb-2 text-xl font-light leading-tight">
              St. MARTIN'S COLLEGE
            </h5>
            <p className="mb-4 text-base">
              Sicilya'nın güneyinde, Akdeniz' in mavi sularının ortasında bir
              ada olan Malta, İngilizce öğrenmek ve yaz tatilini geçirmek için
              ideal bir yerdir.
            </p>
            <Deneme
              imgUrl="https://static.wixstatic.com/media/23814c_638e9caf100c42cdad27bcf60f4049cb~mv2.jpg/v1/fill/w_531,h_350,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/23814c_638e9caf100c42cdad27bcf60f4049cb~mv2.jpg"
              title="St. MARTIN'S COLLEGE"
              desc="Sicilya'nın güneyinde, Akdeniz' in mavi sularının ortasında bir ada olan Malta, İngilizce öğrenmek ve yaz tatilini geçirmek için ideal bir yerdir. Mükemmel sahilleri, kristal görünümünde denizi ve yaz-kış sıcak olan iklimiyle Malta değişik ülkelerden birçok insanı buraya çekmektedir. St.Martin's College  Malta Kampı, adanın bütün güzelliklerini öğrencilerine sunmaktadır. Öğrenciler klimalı merkezlerde eğitim almaktadır. Ders dışında ve yoğun aktivite programları ile güneş ışığının keyfini çıkaran öğrencilere aynı zamanda Malta tarihi ve kültürü de en iyi şekilde sunulmaktadır.
              Haftada 20 ders genel İngilizce kursu vardır. Kurs bitiminde katılım sertifikası verilir.
            Kumsal partileri, EC Parti, Splash & Fun Waterpark,uluslararası geceler, kıyafet balosu, barbekü gecesi, Mdina, Mellieha Bay Beach Trip, Comino Visit, Golden Bay Beach Trip, Harbour Cruise, Go-Karting Grand Prix, Paradise Day Beach Trip, Falconry Show, Valletta, Mediterraneo Marine Park gerçekleştirel sosyal aktivitelerin başlıcalarıdır."
            />
          </div>
        </div>
      </div>
      <div className="grid-cols-1 sm:grid md:grid-cols-4 ml-10 mr-10 md:ml-20 md:mr-20 mb-10">
        <div className="mx-3 mt-6 flex flex-col rounded-lg bg-gray-300 text-surface shadow-secondary-1 dark:bg-surface-dark sm:shrink-0 sm:grow sm:basis-0">
          <a href="#!">
            <img
              className="rounded-t-lg"
              src="https://talloiresnetwork.tufts.edu/wp-content/uploads/UBC-Vancouver.jpg"
              alt="Hollywood Sign on The Hill"
            />
          </a>
          <div className="p-6">
            <h5 className="text-xl font-bold mb-2">Vancouver/KANADA</h5>
            <h5 className="mb-2 text-xl font-light leading-tight">
              UNIVERSITY OF BRITISH COLUMBIA
            </h5>
            <p className="mb-4 text-base">
              Vancouver Yaz Okulu programları Kanada'nın en iyi 2. üniversitesi
              olan University of British Columbia (UBC) kampüsünde
              sunulmaktadır. 1908 yılında kurulan UBC aynı zamanda dünyanın en
              iyi 40. üniversitesidir
            </p>
            <Deneme
              imgUrl="https://static.wixstatic.com/media/23814c_fbe5a32d3fc247a7bc5105ee5dd0428e~mv2_d_1800_1200_s_2.jpg/v1/fill/w_599,h_398,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/23814c_fbe5a32d3fc247a7bc5105ee5dd0428e~mv2_d_1800_1200_s_2.jpg"
              title="UNIVERSITY OF BRITISH COLUMBIA"
              desc="Vancouver Yaz Okulu programları Kanada'nın en iyi 2. üniversitesi olan University of British Columbia (UBC) kampüsünde sunulmaktadır. 1908 yılında kurulan UBC aynı zamanda dünyanın en iyi 40. üniversitesidir. Müthiş bahçelere sahip bölge parkına bitişik olarak Pasifik Okyanusu'na birkaç dakikalık mesafedeki büyük bir alana kurulmuş olan UBC, Vancouver'in merkezinden 45 dakika uzaklıktadır. St Giles Vancouver Yaz Okulu'nda eğitim alan öğrenciler British Columbia Üniversitesi'nin kampüs yurtlarında konaklarken çeşitli aktivitelerle ders sonrasındaki zamanlarını en iyi şekilde geçirmektedirler.

              Haftada 15 saat genel İngilizce kursu vardır. Bir ders 50 dakikadır. Sınıflar en fazla 12 kişiliktir. Öğrenciler ilk gün seviye tespit sınavına katılır ve seviyelerine uygun sınıflara verilir. Kurs bitiminde katılım sertifikası verilir. "
            />
          </div>
        </div>
        <div className="mx-3 mt-6 flex flex-col rounded-lg bg-gray-300 text-surface shadow-secondary-1 dark:bg-surface-dark sm:shrink-0 sm:grow sm:basis-0">
          <a href="#!">
            <img
              className="rounded-t-lg"
              src="https://i.ytimg.com/vi/A1gB1890bBo/maxresdefault.jpg"
              alt="Hollywood Sign on The Hill"
            />
          </a>
          <div className="p-6">
            <h5 className="text-xl font-bold mb-2">Cheltenham/İNGİLTERE</h5>
            <h5 className="mb-2 text-xl font-light leading-tight">
              CHELTENHAM COLLEGE
            </h5>
            <p className="mb-4 text-base">
              Okul, Gloucestershire'da , İngiltere'nin günaybatısında, Londra
              merkezine yaklaşık 2,5 saat uzaklıktadır. Haftada 20 ders genel
              İngilizce kursu vardır. Her ders 45 dakikadır.
            </p>
            <Deneme
              imgUrl="https://static.wixstatic.com/media/23814c_352e08d2d35047618a976c1aa38dae82~mv2.jpg/v1/fill/w_654,h_366,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/23814c_352e08d2d35047618a976c1aa38dae82~mv2.jpg"
              title="CHELTENHAM COLLEGE"
              desc="Okul, Gloucestershire'da , İngiltere'nin günaybatısında, Londra merkezine yaklaşık 2,5 saat uzaklıktadır.

              Haftada 20 ders genel İngilizce kursu vardır. Her ders 45 dakikadır. Öğrenciler ilk gün seviye tespit sınavına katılır ve seviyelerine uygun sınıflara verilir. Kurs bitiminde katılım sertifikası verilir. Sınıflar max. 15 kişiliktir.
            
              Okulda voleybol, basketbol sahaları, tenis kortları, yüzme havuzu, profesyonel tiyatro, dans stüdyosu, gösterişli tarihi yemek salonu, bilgisayar odaları ve internet, sanat odaları mevcuttur. Okulda öğrencilerin iyi vakit geçirmesi, eğelenmesi ve sosyalleşebilmeleri için çeşitlik aktiviteler organize edilir. Aktiviteler genelde öğleden sonra , gezi olmayan günlerde gerçekleştirilir. Dans, futbol, tenis,  masa tenisi, badminton, rugby , kriket, basketbol, voleybol, beyzbol, yüzme, squash... Sosyal aktiviteler;  el işleri, , aşçılık, film geceleri, havuz partileri, salsa, squash, yetenek gösterileri gibi aktiviteler gerçekleştirilmektedir."
            />
          </div>
        </div>
        <div className="mx-3 mt-6 flex flex-col rounded-lg bg-gray-300 text-surface shadow-secondary-1 dark:bg-surface-dark  sm:shrink-0 sm:grow sm:basis-0">
          <a href="#!">
            <img
              className="rounded-t-lg"
              src="https://c.files.bbci.co.uk/17A8D/production/_102890969_gettyimages-624526054.jpg"
              alt="Skyscrapers"
            />
          </a>
          <div className="p-6">
            <h5 className="text-xl font-bold mb-2">Radstock/İNGİLTERE</h5>
            <h5 className="mb-2 text-xl font-light leading-tight">
              DOWNSIDE SCHOOL
            </h5>
            <p className="mb-4 text-base">
              Okul, Bath 'de, İngiltere'nin güney batısında, Londra'ya yaklaşık
              2,5 saat uzaklıktadır. Avon Vadisi'nde yer alan UNESCO Dünya
              Mirası sit alanı olarak bilinen, etkileyici mimarisi, zengin
              tarihi, kültürel mekanları, spasıyla ünlü olan Bath şehrinde
              düzenlenmektedir
            </p>
            <Deneme
              imgUrl="https://static.wixstatic.com/media/23814c_23a0c52e77824ae2a7e9f66bd010bcb7~mv2.jpg/v1/fill/w_581,h_386,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/23814c_23a0c52e77824ae2a7e9f66bd010bcb7~mv2.jpg"
              title="DOWNSIDE SCHOOL"
              desc="Okul, Bath 'de, İngiltere'nin güney batısında, Londra'ya yaklaşık 2,5 saat uzaklıktadır. Avon Vadisi'nde yer alan UNESCO Dünya Mirası sit alanı olarak bilinen, etkileyici mimarisi, zengin tarihi, kültürel mekanları, spasıyla ünlü olan Bath şehrinde düzenlenmektedir. “Harry Potter” tarzı ülkenin en eski ve prestijli yatılı özel okullarından birinde gerçekleşen programda hem İngilizce öğrenip hem de İngiliz kültürünü daha yakından tanıma fırsatı bulacaksınız.

              Haftada 20 ders genel İngilizce kursu vardır. Her ders 45 dakikadır. Öğrenciler ilk gün seviye tespit sınavına katılır ve seviyelerine uygun sınıflara verilir. Kurs bitiminde katılım sertifikası verilir. Sınıflar max. 15 kişiliktir.
           
               Öğleden sonra ve akşam çeşitli spor aktiviteleri ve sosyal etkinlikler düzenlenmektedir. Spor aktiviteleri; dans, futbol, tenis,  masa tenisi, badminton, rugby , kriket, basketbol, voleybol, dodgeball , yüzme, squash. Sosyal aktiviteler;  el işleri, barbekü, film geceleri, havuz partileri, quizler,  salsa, yetenek gösterileri, dijital fotoğrafçılık, yemek dersleri şeklinde gerçekleşmektedir."
            />
          </div>
        </div>
        <div className="mx-3 mt-6 flex flex-col rounded-lg bg-gray-300 text-surface shadow-secondary-1 dark:bg-surface-dark sm:shrink-0 sm:grow sm:basis-0">
          <a href="#!">
            <img
              className="rounded-t-lg"
              src="https://smapse.com/storage/2016/09/converted/825_585_farringtons-school3.jpg"
              alt="Los Angeles Skyscrapers"
            />
          </a>
          <div className="p-6">
            <h5 className="text-xl font-bold mb-2">Chislehurts/İNGİLTERE</h5>
            <h5 className="mb-2 text-xl font-light leading-tight">
              FARRINGTONS SCHOOL
            </h5>
            <p className="mb-4 text-base">
              Farringtons School, Londra şehir merkezine sadece 15 km uzaklıkta
              bulunan Chislehurst kasabasında bulunmaktadır. Oldukça geniş
              yeşillik bir alana konumlanmış olan okulda spor ve aktivite
              tesisleri oldukça gelişmiştir.
            </p>
            <Deneme
              imgUrl="https://static.wixstatic.com/media/23814c_b19ac3c4aa3b42009684420b18cd3ead~mv2.jpg/v1/fill/w_613,h_408,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/23814c_b19ac3c4aa3b42009684420b18cd3ead~mv2.jpg"
              title="FARRINGTONS SCHOOL"
              desc="Farringtons School, Londra şehir merkezine sadece 15 km uzaklıkta bulunan Chislehurst kasabasında bulunmaktadır. Oldukça geniş yeşillik bir alana konumlanmış olan okulda spor ve aktivite tesisleri oldukça gelişmiştir. Okulda açık ve kapalı yüzme havuzu, geniş bir spor salonu ve açık alan sporları için sahalar bulunmaktadır.

              Haftada 20 ders genel İngilizce kursu vardır. Her ders 45 dakikadır. Öğrenciler ilk gün seviye tespit sınavına katılır ve seviyelerine uygun sınıflara verilir. Kurs bitiminde katılım sertifikası verilir. Sınıflar max. 15 kişiliktir.
            
              Öğleden sonra ve akşam çeşitli spor aktiviteleri ve sosyal etkinlikler düzenlenmektedir. Spor aktiviteleri; dans, futbol, tenis,  masa tenisi, badminton, rugby , kriket, basketbol, voleybol, dodgeball , yüzme, squash, bokwa,  Wii-fit ve zumba, mini-Olimpiyatlar ve takım oyunları. Sosyal aktiviteler;  el işleri, barbekü, disko, oyun geceleri, karaoke, uluslararası partiler, salsa, quizler, yetenek gösterileri. "
            />
          </div>
        </div>
      </div>{" "}
      <div className="grid-cols-1 sm:grid md:grid-cols-4 ml-10 mr-10 md:ml-20 md:mr-20 mb-10">
        <div className="mx-3 mt-6 flex flex-col rounded-lg bg-gray-300 text-surface shadow-secondary-1 dark:bg-surface-dark sm:shrink-0 sm:grow sm:basis-0">
          <a href="#!">
            <img
              className="rounded-t-lg"
              src="https://www.veritasedu.net/Content/images/quenn_mary_uni.png"
              alt="Hollywood Sign on The Hill"
            />
          </a>
          <div className="p-6">
            <h5 className="text-xl font-bold mb-2">Londra/İNGİLTERE</h5>
            <h5 className="mb-2 text-xl font-light leading-tight">
              QUEEN MARY UNIVERSITY OF LONDON
            </h5>
            <p className="mb-4 text-base">
              Ana kampüsü Mile Area da bulunmaktadır ve Londra'nın en eski
              üniversitelerinden biridir. Yakınlarında bulunan victoria park ve
              hemen yanında uzanıp giderek Themes'e bağlanan kanalıyla, keyifli
              bir yürüyüş yolunu öğrencilere tanıtan okuldur.
            </p>
            <Deneme
              imgUrl="https://static.wixstatic.com/media/23814c_e51edc4a0ae94382947dc8e14e34f475~mv2.png/v1/fill/w_656,h_368,al_c,lg_1,q_85,enc_auto/23814c_e51edc4a0ae94382947dc8e14e34f475~mv2.png"
              title="QUEEN MARY UNIVERSITY OF LONDON"
              desc="Ana kampüsü Mile Area da bulunmaktadır ve Londra'nın en eski üniversitelerinden biridir. Yakınlarında bulunan victoria park ve hemen yanında uzanıp giderek Themes'e bağlanan kanalıyla, keyifli bir yürüyüş yolunu öğrencilere tanıtan okuldur.

              Haftada 20 Ders genel İngilizce kursu vardır. Her ders 45 dakikadır. Öğrenciler ilk gün seviye tespit sınavına katılır ve seviyelerine uygun sınıflara verilir. Kurs bitiminde katılım sertifikası verilir.
            
              Okulda öğrencilerin iyi vakit geçirmesi, eğelenmesi ve sosyalleşebilmeleri için çeşitlik aktiviteler organize edilir. Aktiviteler genelde öğleden sonra , gezi olmayan günlerde gerçekleştirilir. Öğleden sonra saat 18.00'e kadar çeşitli spor aktiviteleri ve sosyal etkinlikler: Uluslararası geceler, kıyafet balosu, grup oyunları, karaoke,elişi çalışmaları, tiyatro, futbol, beyzbol, voleybol, aerobik, dans gibi faaliyetler gerçekleştirilir."
            />
          </div>
        </div>
        <div className="mx-3 mt-6 flex flex-col rounded-lg bg-gray-300 text-surface shadow-secondary-1 dark:bg-surface-dark sm:shrink-0 sm:grow sm:basis-0">
          <a href="#!">
            <img
              className="rounded-t-lg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ1D3gDRdXpCJZg1edcblq6h2hu3xd9SPbyDqfU-BkxiodL4rKx48h5NgHEHuc4vsmMXw&usqp=CAU"
              alt="Hollywood Sign on The Hill"
            />
          </a>
          <div className="p-6">
            <h5 className="text-xl font-bold mb-2">Reigate/İNGİLTERE</h5>
            <h5 className="mb-2 text-xl font-light leading-tight">
              ROYAL ALEXANDRA & ALBERT
            </h5>
            <p className="mb-4 text-base">
              The Royal Alexandra and Albert School Reigate, Surrey bölgesinde
              bulunmaktadır. Londra merkezine sadece yarım saat uzaklıktadır.
              Haftada 20 ders genel İngilizce kursu vardır. Her ders 45
              dakikadır. Öğrenciler ilk gün seviye tespit sınavına katılır ve
              seviyelerine uygun sınıflara verilir. Kurs bitiminde katılım
              sertifikası verilir.
            </p>
            <Deneme
              imgUrl="https://static.wixstatic.com/media/23814c_0aa85bb80ae14b30ab86fc97310dea35~mv2.jpg/v1/fill/w_571,h_341,al_c,lg_1,q_80,enc_auto/23814c_0aa85bb80ae14b30ab86fc97310dea35~mv2.jpg"
              title="ROYAL ALEXANDRA & ALBERT SCHOOL"
              desc=" The Royal Alexandra and Albert School  Reigate, Surrey bölgesinde bulunmaktadır. Londra merkezine sadece yarım saat uzaklıktadır.

              Haftada 20 ders genel İngilizce kursu vardır. Her ders 45 dakikadır. Öğrenciler ilk gün seviye tespit sınavına katılır ve seviyelerine uygun sınıflara verilir. Kurs bitiminde katılım sertifikası verilir."
            />
          </div>
        </div>
        <div className="mx-3 mt-6 flex flex-col rounded-lg bg-gray-300 text-surface shadow-secondary-1 dark:bg-surface-dark  sm:shrink-0 sm:grow sm:basis-0">
          <a href="#!">
            <img
              className="rounded-t-lg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxwlMREEhmd_4Lmx1Nnf6h8BjUZ7EvDTuWb6FeXgtbfw&s"
              alt="Skyscrapers"
            />
          </a>
          <div className="p-6">
            <h5 className="text-xl font-bold mb-2">Gillingham/İNGİLTERE</h5>
            <h5 className="mb-2 text-xl font-light leading-tight">
              UNIVERSITY OF GREENWICH
            </h5>
            <p className="mb-4 text-base">
              Medway Kampüsü, Greenwich Üniversitesi'nin bir parçasıdır. Kampüs,
              Greenwich'in bir miktar doğusunda, Kent'in bir kasabası olan,
              Maritime Chatham olarak bilinen bir bölgede bulunmaktadır. Bu
              bölge bir zamanlar aktif bir limana ev sahipliği yapıyordu.
            </p>
            <Deneme
              imgUrl="https://static.wixstatic.com/media/23814c_282a884c908b490d9047bdc70bc6781c~mv2_d_4702_3190_s_4_2.jpg/v1/fill/w_639,h_433,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/23814c_282a884c908b490d9047bdc70bc6781c~mv2_d_4702_3190_s_4_2.jpg"
              title="UNIVERSITY OF GREENWICH "
              desc="Medway Kampüsü, Greenwich Üniversitesi'nin bir parçasıdır. Kampüs, Greenwich'in bir miktar doğusunda, Kent'in bir kasabası olan, Maritime Chatham olarak bilinen bir bölgede bulunmaktadır. Bu bölge bir zamanlar aktif bir limana ev sahipliği yapıyordu. Kampüs yakınındaki dok alanları son birkaç yıl içinde mağazalar, müzeler, restoranlar ve bir sinemayı içine alan bir cazibe merkezi olarak geliştirilmektedir. Medway, Londra dışında yaşamak ve okumak isteyen, ancak aynı zamanda çeşitli geziler ve aktiveler için şehirle erişimini koparmak istemeyen öğrenciler için ideal bir konumdadır.

              Haftada 20 ders genel İngilizce kursu vardır. Her ders 45 dakikadır. Öğrenciler ilk gün seviye tespit sınavına katılır ve seviyelerine uygun sınıflara verilir. Kurs bitiminde katılım sertifikası verilir.
            
             Okulda öğrencilerin iyi vakit geçirmesi, eğlenmesi ve sosyalleşebilmeleri için çeşitli aktiviteler organize edilir. Aktiviteler genelde öğleden sonra , gezi olmayan günlerde gerçekleştirilir. Öğleden sonra saat 18.00'e kadar çeşitli spor aktiviteleri ve sosyal etkinlikler: Tenis, basketbol, badminton, kriket, dans, uluslararası geceler, disko, kıyafet balosu, karaoke, grup oyunları..."
            />
          </div>
        </div>
        <div className="mx-3 mt-6 flex flex-col rounded-lg bg-gray-300 text-surface shadow-secondary-1 dark:bg-surface-dark sm:shrink-0 sm:grow sm:basis-0">
          <a href="#!">
            <img
              className="rounded-t-lg"
              src="https://foxstudy.com/wp-content/uploads/2023/12/uel_2.jpg"
              alt="Los Angeles Skyscrapers"
            />
          </a>
          <div className="p-6">
            <h5 className="text-xl font-bold mb-2">Londra/İNGİLTERE</h5>
            <h5 className="mb-2 text-xl font-light leading-tight">
              UNIVERSITY OF EAST LONDON
            </h5>
            <p className="mb-4 text-base">
              1992'de üniversite olarak kurulan University of East London,
              1898'lerden kalan mirasının yanı sıra modern bir üniversitedir.
              Ultra modern Docklands Campus 2000 yılında açılmıştır ve
              Londra'nın son 50 yıl içindeki ilk yeni üniversite kampüsüdür.
            </p>
            <Deneme
              imgUrl="https://static.wixstatic.com/media/23814c_1e926184900944c78f6a6cd74fd4fbd1~mv2.jpg/v1/fill/w_598,h_448,al_c,lg_1,q_80,enc_auto/23814c_1e926184900944c78f6a6cd74fd4fbd1~mv2.jpg"
              title="UNIVERSITY OF EAST LONDON"
              desc="1992'de üniversite olarak kurulan University of East London, 1898'lerden kalan mirasının yanı sıra modern bir üniversitedir. Ultra modern Docklands Campus 2000 yılında açılmıştır ve Londra'nın son 50 yıl içindeki ilk yeni üniversite kampüsüdür. Kampüsler Londra'da Stratford ve Docklands'da konumlanmıştır. Stratford Campus, 2012 Olimpiyatları'nın mevkiine, Stratford istasyonuna ve bölgenin sunduğu tüm olanaklara yakındır. Docklands Campus ise Canary Wharf'a yakın, su kıyısında çarpıcı bir lokasyona sahiptir.

              Haftada 20 ders genel İngilizce kursu vardır. Her ders 45 dakikadır. Öğrenciler ilk gün seviye tespit sınavına katılır ve seviyelerine uygun sınıflara verilir. Kurs bitiminde katılım sertifikası verilir. 
            
              Okulda öğrencilerin iyi vakit geçirmesi, eğlenmesi ve sosyalleşebilmeleri için çeşitli aktiviteler organize edilir. Aktiviteler genelde öğleden sonra, gezi olmayan günlerde gerçekleştirilir. Öğleden sonra saat 18.00'e kadar çeşitli spor aktiviteleri ve sosyal etkinlikler: Tenis, basketbol, badminton, kriket, dans, uluslararası geceler, disko, kıyafet balosu, karaoke, grup oyunları şeklinde gerçekleşmektedir."
            />
          </div>
        </div>
      </div>
      <div className="grid-cols-1 sm:grid md:grid-cols-4 ml-10 mr-10 md:ml-20 md:mr-20 mb-10">
        <div className="mx-3 mt-6 flex flex-col rounded-lg bg-gray-300 text-surface shadow-secondary-1 dark:bg-surface-dark sm:shrink-0 sm:grow sm:basis-0">
          <a href="#!">
            <img
              className="rounded-t-lg"
              src="https://tufts-admissions.s3.us-west-2.amazonaws.com/files/dogwood/posts/150430-16702-jumbogarden032-2.jpg"
              alt="Hollywood Sign on The Hill"
            />
          </a>
          <div className="p-6">
            <h5 className="text-xl font-bold mb-2">Boston/ABD</h5>
            <h5 className="mb-2 text-xl font-light leading-tight">
              BOSTON TUFTS UNIVERSITY
            </h5>
            <p className="mb-4 text-base">
              Program prestijli Tufts Üniversitesi'nin kampüsünde Boston
              şehrinin merkezine sadece 20 dakika uzaklıkta verilmektedir.
              Kampüs birçok sinema , alışveriş merkezi ve restorana yürüme
              mesafesindedir.
            </p>
            <Deneme
              imgUrl="https://static.wixstatic.com/media/23814c_3212c4d60f984bb4b1fed71032bd43f6~mv2.jpg/v1/fill/w_645,h_429,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/23814c_3212c4d60f984bb4b1fed71032bd43f6~mv2.jpg"
              title="BOSTON TUFTS UNIVERSITY"
              desc="Program prestijli Tufts Üniversitesi'nin kampüsünde Boston şehrinin merkezine sadece 20 dakika uzaklıkta verilmektedir. Kampüs birçok sinema , alışveriş merkezi ve restorana yürüme  mesafesindedir

              Haftada 20 Ders genel İngilizce kursu vardır. Bir ders 45 dakikadır. Öğrenciler ilk gün seviye tespit sınavına katılır ve seviyelerine uygun sınıflara verilir. Kurs bitiminde katılım sertifikası verilir.
           
            Öğleden sonra sportif ve sosyal aktiviteler düzenlenmektedir; çeşitli spor aktiviteleri ve sosyal etkinlikler: Futbol, mini olimpiyatlar, dans, beyzbol ve voleybol, hazine avcıları, maske yapımı, golf, körebe,uluslararası geceler, disko, moda showu, Quiz ve karaoke."
            />
          </div>
        </div>
        <div className="mx-3 mt-6 flex flex-col rounded-lg bg-gray-300 text-surface shadow-secondary-1 dark:bg-surface-dark sm:shrink-0 sm:grow sm:basis-0">
          <a href="#!">
            <img
              className="rounded-t-lg"
              src="https://images.shiksha.com/mediadata/images/1691725931phpZGi10E.jpeg"
              alt="Hollywood Sign on The Hill"
            />
          </a>
          <div className="p-6">
            <h5 className="text-xl font-bold mb-2">New York/ABD</h5>
            <h5 className="mb-2 text-xl font-light leading-tight">
              LONG ISLAND UNIVERSITY
            </h5>
            <p className="mb-4 text-base">
              Long Island Universitesi, Manhattan'a 50 dakika uzaklıkta, yüksek
              rankingli özel bir üniversitedir. Küçük bir kampüsü olmasına
              karşın sağladığı imkanlar bakımından ABD'nın en güzel
              kampüslerinden biri olarak kabul edilmektedir.
            </p>
            <Deneme
              imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Mx7QvZ3Q9Pz0yJ1OlDf0FE0dCg7IlPvjBzrrHp6qAg&s"
              title="LONG ISLAND UNIVERSITY"
              desc="Long Island Universitesi, Manhattan'a 50 dakika uzaklıkta, yüksek rankingli özel bir üniversitedir. Küçük bir kampüsü olmasına karşın sağladığı imkanlar bakımından ABD'nın en güzel kampüslerinden biri olarak kabul edilmektedir.

              Haftada 20 Ders genel İngilizce kursu vardır. Bir ders 45 dakikadır. Öğrenciler ilk gün seviye tespit sınavına katılır ve seviyelerine uygun sınıflara verilir. Kurs bitiminde katılım sertifikası verilir.
            
              Çeşitli spor aktiviteleri ve sosyal etkinlikler: Yüzme, plaj voleybolu, beyzbol, futbol, dans, uluslararası geceler, disko, kıyafet balosu, karaoke, grup oyunları faaliyetleri gerçekleştirilmektedir.
             "
            />
          </div>
        </div>
        <div className="mx-3 mt-6 flex flex-col rounded-lg bg-gray-300 text-surface shadow-secondary-1 dark:bg-surface-dark  sm:shrink-0 sm:grow sm:basis-0">
          <a href="#!">
            <img
              className="rounded-t-lg"
              src="https://www.calstate.edu/attend/campuses/SiteAssets/campus-facts/campus-fact-data/campus-images/NORTHRIDGE/northridge-1.jpg"
              alt="Skyscrapers"
            />
          </a>
          <div className="p-6">
            <h5 className="text-xl font-bold mb-2">Los Angeles/ABD</h5>
            <h5 className="mb-2 text-xl font-light leading-tight">
              CALIFORNIA STATE UNIVERSITY NORTHRIDGE
            </h5>
            <p className="mb-4 text-base">
              Northridge, California'daki California State University'nin (CSU)
              kampüsünde yer almaktadır. Los Angeles'ın ana havaalanlarına ve
              gezilecek yerlerine kolay erişim imkanına sahiptir. Yerel
              eğlenceler arasında Disneyland, Universal Studios ve Grammy Müzesi
              yer alır.
            </p>
            <Deneme
              imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtiiSHO1YpwlVSIAR_FxYk4STqy8P1nPyRMpzuK47zLA&s"
              title="CALIFORNIA STATE UNIVERSITY NORTHRIDGE"
              desc="Northridge, California'daki California State University'nin (CSU) kampüsünde yer almaktadır. Los Angeles'ın ana havaalanlarına ve gezilecek yerlerine kolay erişim imkanına sahiptir. Yerel eğlenceler arasında Disneyland, Universal Studios ve Grammy Müzesi yer alır. Bu küçük, özel üniversite harika tesislere ve sıcak bir atmosfere sahiptir. Kampüs içinde öğrenciler kendilerini güvende ve konforlu hissederler. Ders sonralarında harika havanın, plajların ve yerel aktivitelerin keyfini çıkarabilirler.

              Haftada 20 Ders genel İngilizce kursu vardır. Bir ders 45 dakikadır. Öğrenciler ilk gün seviye tespit sınavına katılır ve seviyelerine uygun sınıflara verilir. Kurs bitiminde katılım sertifikası verilir.
             
             Öğleden sonra sportif ve sosyal aktiviteler düzenlenmektedir; çeşitli spor aktiviteleri ve sosyal etkinlikler: Futbol, amerikan futbolu, mini olimpiyatlar, voleybol, frizbi, softball, kick-ball, basketbol, hazine avcıları, maske yapımı, hip-hop dansı, uluslararası geceler, disko,quizler, yetenek showları, karaoke, yerel ziyaretler, parklar ve müze ziyaretleri."
            />
          </div>
        </div>
        <div className="mx-3 mt-6 flex flex-col rounded-lg bg-gray-300 text-surface shadow-secondary-1 dark:bg-surface-dark sm:shrink-0 sm:grow sm:basis-0">
          <a href="#!">
            <img
              className="rounded-t-lg"
              src="https://www.oxy.edu/sites/default/files/landing-page/banner-images/2019-0308_ThorneHallClouds-346_769x600.png"
              alt="Los Angeles Skyscrapers"
            />
          </a>
          <div className="p-6">
            <h5 className="text-xl font-bold mb-2">Los Angeles/ABD</h5>
            <h5 className="mb-2 text-xl font-light leading-tight">
              OCCIDENTAL COLLEGE
            </h5>
            <p className="mb-4 text-base">
              Los Angeles'taki modern Eagle Rock'ta bulunan Occidental College,
              Los Angeles merkezine 10 dakikalık mesafede bulunan Eagle Hill
              District bölgesinde yer almaktadır. Haftada 20 Ders genel
              İngilizce kursu vardır. Bir ders 45 dakikadır.
            </p>
            <Deneme
              imgUrl="https://static.wixstatic.com/media/23814c_f697b03669604365a80d9fb2d10fd8d6~mv2.jpg/v1/fill/w_611,h_318,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/23814c_f697b03669604365a80d9fb2d10fd8d6~mv2.jpg"
              title="OCCIDENTAL COLLEGE"
              desc="Los Angeles'taki modern Eagle Rock'ta bulunan Occidental College, Los Angeles merkezine 10 dakikalık mesafede bulunan Eagle Hill District bölgesinde yer almaktadır.

              Haftada 20 Ders genel İngilizce kursu vardır. Bir ders 45 dakikadır. Öğrenciler ilk gün seviye tespit sınavına katılır ve seviyelerine uygun sınıflara verilir. Kurs bitiminde katılım sertifikası verilir.
             
              Çeşitli spor aktiviteleri ve sosyal etkinlikler: Futbol, beyzbol, basketbol, yüzme, masa tenisi, disko, uluslararası geceler, karaoke, moda şovları."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EgitimCard;
