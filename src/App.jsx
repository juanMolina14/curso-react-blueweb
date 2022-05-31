// import Contador from './components/Contador';
// import Frutas from './components/Frutas';

import Formulario from "./components/Formulario"

// import FormNoControlado from "./components/FormNoControlado"

const App = () => {
    // const saludo = "saludo desde variable;"
    // const clasesObjeto = {
    //     primary : "text-primary",
    //     danger : "text-danger"
    // }
    // const user = true;

    // const SaludoBienvenida=()=>{
    //     return <h2 className='text-success'>Bienvenido</h2>
    // }
        
    
    // const SaludoDespedida =()=>{
    //     return <h2 className='text-danger'>Adioooooos!</h2>
    // }


   

    // const functionClick = (nombre) =>{
    //     console.log(`click ${nombre}`)
    // }
       
    // const frutas = ["manzana","fresa","banana"]; 

  return (
    // <div className='container'>

    // <Contador />
    //  <p className={clasesObjeto.primary }> mi primer componente {saludo}</p>

    //  {user ? <SaludoBienvenida /> : <SaludoDespedida />}

    //  <Frutas frutasApp= {frutas}/>


   

    // <button className='btn btn-primary' 
    // onClick={()=> functionClick("Juan")}
    // >Dame click</button>
    // </div>
    <>
        <h1>Formularios</h1>
        {/* <FormNoControlado /> */}
        <Formulario />
    </>
  )
}

export default App
