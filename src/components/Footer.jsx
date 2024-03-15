export const Footer = () => {
  return (
    <div className="text-sm">
      <section className="mt-10 mb-12 md:flex md:justify-between">
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

      <section className="">
        <div className="flex gap-4 mb-12">
          <h3 className="text-3xl font-bold">Bloggio</h3>
          <p className="text-end">
            Un espacio donde puedes expresar tus ideas con libertad
          </p>
        </div>
        <div className="md:flex md:justify-between">
          <div className="flex justify-around mb-10 md:w-1/2">
            <ul className="">
              <li className="text-slate-400">Empresa</li>
              <li>Nosotros</li>
              <li>Noticias</li>
              <li>Contacto</li>
            </ul>

            <ul>
              <li className="text-slate-400">Recursos</li>
              <li>Blog</li>
              <li>Boletin</li>
              <li>Publicidad</li>
              <li>Soporte</li>
            </ul>
          </div>
          <div className="flex justify-around mb-10 md:w-1/2">
            <ul className="">
              <li className="text-slate-400">Redes Sociales</li>
              <li>Twitter</li>
              <li>Linkeding</li>
              <li>Facebook</li>
              <li>Facebook</li>
              <li>Facebook</li>
            </ul>

            <ul>
              <li className="text-slate-400">Legal</li>
              <li>Términos</li>
              <li>Privacidad</li>
              <li>Licencias</li>
            </ul>
          </div>
        </div>
      </section>

      <hr />
    </div>
  );
};
