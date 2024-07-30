export const Tooltip = ({ text, children }) => {
  return (
    <div className='relative group'>
      {children}
      <div className='absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-max bg-gray-800 text-white text-xs rounded-lg py-1 opacity-0 px-4 group-hover:opacity-100 transition-opacity duration-300'>
        {text}
      </div>
    </div>
  )
}
