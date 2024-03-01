const Header = (props) => {
  console.log(props);
  return <h1 className="container text-center p-4">{props.titulo} </h1>;
};

export default Header;
