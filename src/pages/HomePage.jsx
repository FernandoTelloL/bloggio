/* eslint-disable react/prop-types */
import { AllPosts, HeroHome, RecentPosts } from "../sections";
import { Footer, Headers } from "./../components";

export const HomePage = () => {
  return (
    <>
      <Headers />

      <HeroHome />

      <RecentPosts />

      <hr className="bg-gray-600 m-auto mt-6 mb-6 lg:mt-10 lg:mb-10" />

      <AllPosts />

      <hr className="bg-gray-600 m-auto mt-6 mb-6 lg:mt-10 lg:mb-10" />

      <section className="mt-10 mb-12 lg:mb-14 md:flex md:justify-between">
        <div className="text-center mb-6 md:text-start md:w-1/2">
          <h2 className="text-xl font-bold lg:mb-2">
            Suscríbete a nuestro boletin
          </h2>
          <p className="text-sm">
            Mantente al día con las últimas noticias, anuncios y artículos.
          </p>
        </div>
        <div className="text-sm flex gap-2 lg:gap-3 justify-between md:h-fit lg:w-[40%]">
          <input
            className="w-full border-[1px] border-slate-3 rounded-lg p-2 lg:px-4 lg:py-1"
            type="email"
            placeholder="Ingresa tu email"
          />
          <button className="bg-slate-900 text-slate-200 px-4 py-2 rounded-xl">
            Suscribirse
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
};
