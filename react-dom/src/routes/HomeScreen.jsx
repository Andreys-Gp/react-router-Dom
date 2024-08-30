

import {useContext} from 'react'
import {UserContext} from '../context/UserContext';

export const HomeScreen = () => {

 const {usuario} = useContext(UserContext)

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">nombre</th>
          <th scope="col">tecnologia</th>
          <th scope="col">email</th>
          <th scope="col">redes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">{usuario.nombre}</th>
          <td>{usuario.tecnologia}</td>
          <td>{usuario.email}</td>
          <td>{usuario.redes}</td>
        </tr>
      </tbody>
    </table>
  );
};
