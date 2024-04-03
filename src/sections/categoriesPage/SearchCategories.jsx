export const SearchCategories = () => {
  return (
    <div className="flex flex-col w-full mb-6">
      <section className="w-full mb-4">
        <form action="" className="w-full flex justify-between">
          <input
            type="text"
            name="searchCategories"
            id="searchCategories"
            placeholder="Ingresa categoría o título"
            className="p-2 w-full rounded-lg  text-sm ring-1 ring-slate-400"
          />
          <button className="bg-amber-400 rounded-lg ml-2 py-2 px-4 font-bold">
            Buscar
          </button>
        </form>
      </section>

      <section>elegir categoria</section>
    </div>
  );
};
