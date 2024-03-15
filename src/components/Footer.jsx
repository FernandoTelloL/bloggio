export const Footer = () => {
  return (
    <div>
      <section className="mt-10 md:flex md:justify-between">
        <div className="text-center mb-6 md:text-start md:w-1/2">
          <h2 className="text-xl font-bold">Suscríbete a nuestro boletin</h2>
          <p className="text-sm">
            Mantente al día con las últimas noticias, anuncios y artículos.
          </p>
        </div>
        <div className="text-sm flex gap-2 justify-between md:h-fit">
          <input
            className="w-full border-[1px] border-slate-3 rounded-lg p-2"
            type="email"
            placeholder="Ingresa tu email"
          />
          <button className="bg-slate-900 text-slate-200 px-4 py-2 rounded-xl">
            Suscribirse
          </button>
        </div>
      </section>
    </div>
  );
};
