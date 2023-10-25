const GridContainer = ({ children }) => {
  return (
    <div className="grid gap-4 grid-cols-1 lg:grid-cols-4 w-3/4 justify-center">
      {children}
    </div>
  );
};

export default GridContainer;
