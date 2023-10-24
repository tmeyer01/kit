const  GridContainer = ({ children }) => {
  return (
    <div className='adventures grid gap-4 grid-cols-2 w-3/4 justify-center' >
      {children}
    </div>
  )
}

export default GridContainer
