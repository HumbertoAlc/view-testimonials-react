import './App.css';
import Testimonio from "./components/testimonio.jsx";
import Persona from "./models/model";

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Esto es lo que dicen nuetros usuarios</h1>
      <Testimonio
      nombre= {Persona.nombre}
      pais ={Persona.pais}
      cargo={Persona.cargo}
      empresa ={Persona.empresa}
      img ={Persona.img}
      testimonio={Persona.testimonio}
      />
      <Testimonio
      nombre='Ema silva'
      pais ='Brasil'
      cargo='analista de datos'
      empresa ='Google'
      img ='ema'
      testimonio='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos illo facilis quo
      veritatis fugiat assumenda a distinctio deleniti, temporibus inventore.'
      />
      <Testimonio
      nombre='Sofi silva'
      pais ='Brasil'
      cargo='analista de datos'
      empresa ='Google'
      img ='sofi'
      testimonio='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos illo facilis quo
      veritatis fugiat assumenda a distinctio deleniti, temporibus inventore.'
      />
      </div>
    </div>
  );
}

export default App;
