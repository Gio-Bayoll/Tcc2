import React from "react";
import { SignInForm } from "@/components/SignIn";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import dengue from "@/assets/dengue.webp";
import zikavirus from "@/assets/zika.webp";
import chikungunya from "@/assets/chikungunya.webp";
import febreamarela from "@/assets/febreamarela.webp";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col">
        {/* Seção de Parallax */}
        <div
          className="relative h-screen bg-fixed bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://static.vecteezy.com/ti/vetor-gratis/p1/8517837-hospitalizacao-do-paciente-uma-pessoa-doente-esta-em-um-leito-medico-em-gota-gota-vetor.jpg')",
          }}
        >
          <div className="flex items-center justify-center h-full bg-primary-darker bg-opacity-70">
            <h1 className="text-cyan-200 text-5xl md:text-6xl font-bold">
              Doenças Transmitidas pelo Aedes Aegypti
            </h1>
          </div>
        </div>

        {/* Seção de Informação */}
        <section className="py-16 bg-white text-center">
          <h2 className="text-3xl font-bold mb-8 text-cyan-500">
            Principais Doenças
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-cyan-200 p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-primary-darker">
                Dengue
              </h3>
              <p>
                A dengue é uma infecção viral transmitida pela picada do
                mosquito Aedes aegypti.
              </p>
            </div>
            <div className="bg-cyan-200 p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-primary-darker">
                Zika
              </h3>
              <p>
                O vírus Zika também é transmitido pelo Aedes e pode causar
                microcefalia em recém-nascidos.
              </p>
            </div>
            <div className="bg-cyan-200 p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-primary-darker">
                Chikungunya
              </h3>
              <p>
                Essa doença causa febre alta e dores intensas nas articulações.
              </p>
            </div>
            <div className="bg-cyan-200 p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-primary-darker">
                Febre Amarela
              </h3>
              <p>
                A Febre Amarela é uma doença viral grave, transmitida pelo
                mosquito Aedes aegypti em áreas urbanas, causando febre alta e
                icterícia.
              </p>
            </div>
          </div>
        </section>
        {/* Infos */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-primary-darker text-center">
              Imagens Sobre as Doenças
            </h2>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 2,
                },
              }}
              className="mySwiper"
            >
              {/* Slide 1: Dengue */}
              <SwiperSlide>
                <div className="relative">
                  <Link to="/Doencas/Dengue">
                    <img
                      src={dengue}
                      alt="Dengue"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <div className="absolute top-0 left-0 bg-black bg-opacity-50 w-full text-white p-4 text-lg font-bold">
                      Dengue
                    </div>
                  </Link>
                </div>
              </SwiperSlide>

              {/* Slide 2: Zika */}
              <SwiperSlide>
                <div className="relative">
                  <Link to="/Doencas/ZikaVirus">
                    <img
                      src={zikavirus}
                      alt="Zika"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <div className="absolute top-0 left-0 bg-black bg-opacity-50 w-full text-white p-4 text-lg font-bold">
                      Zika
                    </div>
                  </Link>
                </div>
              </SwiperSlide>

              {/* Slide 3: Chikungunya */}
              <SwiperSlide>
                <div className="relative">
                  <Link to="/Doencas/Chikungunya">
                    <img
                      src={chikungunya}
                      alt="Chikungunya"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <div className="absolute top-0 left-0 bg-black bg-opacity-50 w-full text-white p-4 text-lg font-bold">
                      Chikungunya
                    </div>
                  </Link>
                </div>
              </SwiperSlide>

              {/* Slide 4: Febre Amarela */}
              <SwiperSlide>
                <div className="relative">
                  <Link to="/Doencas/FebreAmarela">
                    <img
                      src={febreamarela}
                      alt="Febre Amarela"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <div className="absolute top-0 left-0 bg-black bg-opacity-50 w-full text-white p-4 text-lg font-bold">
                      Febre Amarela
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        {/* Formulário de Contato */}
        <section className="py-16 bg-cyan-200">
          <div className="max-w-3xl mx-auto">
            <SignInForm />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
