import Badge from "react-bootstrap/Badge";

const Tags = (props) => {
  return (
    <Badge bg={props.color} style={{ height: "25px" }}>
      {props.btnNombre}
    </Badge>
  );
};

export default Tags;
