import imgUser2 from "../../assets/images/user-female-photo.jpg";

export const Comments = () => {
  return (
    <div className="md:w-[30%] rounded-lg mt-10 mb-10">
      <h3 className="text-xl font-bold">Comentarios</h3>
      <div className=" bg-slate-950 text-slate-300 p-4 flex gap-4 rounded-lg">
        <img
          className="w-10 h-10 object-cover object-top rounded-full border border-slate-300"
          src={imgUser2}
          alt=""
        />
        <div className="text-sm">
          <div className="flex items-center">
            <p className="cursor-pointer">Tech is Beautiful</p>
            <span className="text-secondary ml-2 cursor-pointer">
              {" "}
              - Seguir
            </span>
          </div>
          <p>
            Publicado en <span>Developers</span> - Mar 30
          </p>
        </div>
      </div>

      <div className="mt-2 bg-slate-950 text-slate-300 p-4 rounded-lg">
        <h3>Respuestas (0)</h3>
      </div>
    </div>
  );
};
