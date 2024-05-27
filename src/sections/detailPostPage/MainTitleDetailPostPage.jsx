// eslint-disable-next-line react/prop-types
export const MainTitleDetailPostPage = ({ title, description }) => {
  return (
    <div className='bg-slate-950 rounded-lg px-3 py-6 md:py-10 md:px-10 lg:py-16 text-slate-300 text-center md:w-[70%] md:mr-auto md:ml-auto'>
      <h1 className='font-extrabold text-lg mb-3 lg:text-3xl xl:text-4xl'>
        {title}
      </h1>
      <h2 className='text-sm text-slate-400 lg:text-xl xl:text-2xl'>
        {description}
      </h2>
    </div>
  )
}
