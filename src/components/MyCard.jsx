import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Tags from "./Tags";

const MyCard = (props) => {
  return (
    <Row className="g-4 p-4">
      <Col>
        <Card style={{ width: "18rem", height: "39rem" }}>
          <Card.Img
            variant="top"
            src={props.imagen}
            style={{ width: "18rem", height: "25rem" }}
          />
          <Card.Body>
            <Card.Title className="text-center">{props.nombre}</Card.Title>
            <Card.Text className="text-center">{props.descripcion}</Card.Text>
          </Card.Body>
          <Tags color={props.color} btnNombre={props.btnNombre} />
        </Card>
      </Col>
    </Row>
  );
};

export default MyCard;
