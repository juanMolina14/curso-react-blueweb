import { useRef } from "react"

const FormNoControlado = () => {

  const formulario = useRef(null)
  const handleSubmit = e=> {
    e.preventDefault();

    const datos = new FormData(formulario.current)
    //console.log(...datos.entries())

    const objetoDatos = Object.fromEntries(
      [...datos.entries()]
    )
    console.log(objetoDatos)

  }
  

  return (
    <div>
      <h1>no Controlado</h1>
      <form ref={formulario} onSubmit={handleSubmit}>
          <input 
            type="text"
            placeholder="Ingrese Todo"
            name="todoName"
            className="form-control mb-2"
            defaultValue="Tarea #01"
            />
            <textarea 
                name="todoDescripcion"
                className="form-control mb-2"
                placeholder="Ingrese descripcion de todo"
                defaultValue="Descripcion Tarea #01"
            />
       <select
         name="todoEstado"
         className="form-control mb-2"
         defaultValue="Pendiente">
                <option value="pendiente">Pendiente</option>
                <option value="completada">Completada</option>

        </select>
        <button className="btn btn-primary" type="submit">Agregar</button>
      </form>
    </div> 
  )
}

export default FormNoControlado
