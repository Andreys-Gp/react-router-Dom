import {useForm} from '../hooks/useForm'
import {useContext} from 'react'
import {UserContext} from '../context/UserContext'

export const LoginScreen = () => {
  const initialForm = {
    nombre: "",
    tecnologia: "",
    email: "",
    redes: "",
  };

  const { formState, onInputChange , nombre , tecnologia , email , redes } = useForm(initialForm);
  const {setusuario} = useContext(UserContext)
  const onsubmit=(e)=>{
    e.preventDefault()
    setusuario(formState)
  }

  return (
    <>
      <form className="container" onSubmit={onsubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            nombre
          </label>
          <input 
          type="text"
           className="form-control"
            name="nombre" 
            value={nombre}
            onChange={onInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tecnologia" className="form-label">
            tecnologia
          </label>
          <input
           type="text"
            className="form-control" 
            name="tecnologia" 
            value={tecnologia}
            onChange={onInputChange}
            />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input
           type="email" 
           className="form-control"
           name="email" 
            value={email}
            onChange={onInputChange}
            />
        </div>

        <div className="mb-3">
          <label htmlFor=" redes" className="form-label">
            redes
          </label>
          <input 
          type="text" 
          className="form-control"
          name=" redes"
           value={redes}
            onChange={onInputChange}
            />
        </div>

        <button type="submit" className="btn btn-primary">
          Registrar Usuario
        </button>
      </form>
    </>
  );
};
