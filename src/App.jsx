import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import MyCard from "./components/MyCard.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Header titulo={"Adopta un Perrito"} />
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <MyCard
              imagen="http://images.pexels.com/photos/3361723/pexels-photo-3361723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              nombre="Bartolo"
              descripcion="Lleno de energia y listo para jugar. ¡Dale a Bartolo el hogar amoroso que se merece!"
              color="success"
              btnNombre="Husky"
            />
          </div>
          <div className="col-md-3">
            <MyCard
              imagen="https://images.pexels.com/photos/1458908/pexels-photo-1458908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              nombre="Messi"
              descripcion="Es Juguetón , amigable y se lleva bien con niños y otros animales.¡haz de Messi parte de tu familia hoy mismo!"
              color="primary"
              btnNombre="Bobtail"
            />
          </div>
          <div className="col-md-3">
            <MyCard
              imagen="https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              nombre="Gohan"
              descripcion="Un perro de tamaño mediano con un corazón gigante. ¡Hazte amigo de Gohan y experimenta un amor incondicional!"
              color="danger"
              btnNombre="Shar Pei"
            />
          </div>
          <div className="col-md-3">
            <MyCard
              imagen="https://images.pexels.com/photos/3687770/pexels-photo-3687770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              nombre="Princesa"
              descripcion="Es una compañera leal y cariñosa que adora los mimos y los abarzos.¡Ayuda a Princesa a encontrar su final feliz!."
              color="warning"
              btnNombre="Beagle"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
