const icon = ({children,outline=false,className=null})=>{
  const design = (
    <>
      <span
        className={
          outline ?
          `${className} material-icons-outlined` :
          `${className} material-icons`
        }>{children}</span>
    </>
  );
  return design;
}

export default icon;
