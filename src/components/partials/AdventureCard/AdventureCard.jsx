const  AdventureCard = ({ index, title, discription }) => {


  return (
    <div className='flex flex-col items-center border border-indigo-600 rounded-md '>
      <div className='px-6 md:px-0 w-full  border-8 border-yellow-500 bg-black h-48 text-white'>
        IMAGE
      </div>
    <div className={`md:w-3/4 md:rounded-md bg-blue-50 dark:bg-violet-50 dark:bg-opacity-10 `}>
      <h1 className='header-30 md:header-48 md:pr-20 pt-12 text-blue-950 dark:text-violet-200'>
      {title}
      </h1>
      <p className='paragraph-20 pt-8 pb-12 text-blue-950 dark:text-violet-200'>
      {discription}
      </p>
    </div>
  </div>
  )
}

export default AdventureCard
