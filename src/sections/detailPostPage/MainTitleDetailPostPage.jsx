// eslint-disable-next-line react/prop-types
export const MainTitleDetailPostPage = ({ title, description }) => {
  return (
    <div className=' rounded-lg px-3 py-6 md:py-10 md:px-10 lg:py-16 text-center md:mr-auto md:ml-auto '>
      <h1 className='font-extrabold text-lg mb-3 lg:text-4xl xl:text-5xl font-Oswald'>
        {title}
      </h1>
      <h2 className='text-sm text-slate-700 lg:text-xl '>
        {description}
      </h2>
    </div>
  )
}
