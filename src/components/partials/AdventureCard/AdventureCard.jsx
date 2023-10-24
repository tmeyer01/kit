const  AdventureCard = ({ index, title, discription }) => {


  return (
    <div className='flex flex-row items-center border border-indigo-600 '>
      <div className='px-6 md:px-0 w-full md:w-1/4'>
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
