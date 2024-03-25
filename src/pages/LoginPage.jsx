import { useForm } from "react-hook-form";
import { Headers } from "./../components";

export const LoginPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Headers />
      <div className="flex flex-col justify-center items-center mt-32">
        <h1 className="text-2xl font-extrabold mb-4">Login</h1>
        <form action="" className="w-[90%]" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <label
              htmlFor=""
              className="block text-sm shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
            >
              Nombre usuario
            </label>
            <input
              type="text"
              name="username"
              {...register("username", {
                required: true,
                maxLength: 15,
              })}
              className="w-full border rounded-lg px-3 py-2 ring-1 ring-slate-400 text-sm ring:border-secondary focus:outline-secondary transition-all"
            />
            {errors.username?.type === "required" && (
              <p className="text-sm text-red-700 font-bold transition-all">
                El campo Nombre de usuario es requerido.
              </p>
            )}
            {errors.username?.type === "maxLength" && (
              <p className="text-sm text-red-700 font-bold transition-all">
                El campo Nombre de usuario debe tener máximo 15 caracteres.
              </p>
            )}
          </div>

          <div className="mb-6">
            <label htmlFor="" className="block text-sm">
              Correo
            </label>
            <input
              type="email"
              {...register("email", {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
              })}
              className="w-full border rounded-lg px-3 py-2 ring-1 ring-slate-400 text-sm ring:border-secondary focus:outline-secondary transition-all"
            />
            {errors.email?.type === "pattern" && (
              <p className="text-sm text-red-700 font-bold transition-all">
                El formato del Correo es incorrecto
              </p>
            )}
          </div>

          <div className="mb-6">
            <label htmlFor="" className="block text-sm">
              Contraseña
            </label>
            <input
              type="password"
              {...register("password", {
                required: true,
                minLength: 6,
              })}
              className="w-full border rounded-lg px-3 py-2 ring-1 ring-slate-400 text-sm ring:border-secondary focus:outline-secondary transition-all"
            />
            {errors.password?.type === "minLength" && (
              <p className="text-sm text-red-700 font-bold transition-all">
                La contraseña debe tener mínimo 6 caracteres.
              </p>
            )}
          </div>
          <input
            type="submit"
            value="Enviar"
            className="bg-slate-950 text-slate-300 px-5 py-2 rounded-lg block w-[100%] shadow-2xl"
          />
        </form>
      </div>
    </>
  );
};
