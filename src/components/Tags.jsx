import Button from "react-bootstrap/Button";

const Tags = (props) => {
  return (
    <Button variant={props.color} type="submit" style={{ height: "40px" }}>
      {props.btnNombre}
    </Button>
  );
};

export default Tags;
