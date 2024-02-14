import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Modal.css';

function Modal(props) {
  const { carerData, closeModal } = props;
  const [city, setcity] = useState([]);
  const [cityFound, setCityFound] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/city')
      .then(response => {
        setcity(response.data);
        const foundCity = response.data.find(
          city => city.id === carerData.city_id
        );
        setCityFound(foundCity);
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });
  }, []);
  const Modalclose = () => {
    closeModal();
  };
  return (
    <div className="modal">
      <h2>Detalles del cuidador</h2>
      <div className="modal-content">
        <img
          src={carerData.PhotoURL}
          alt="Foto del cuidador"
          className="picture"
        />
        <div className="info">
          <p>Nombre: {carerData.Name}</p>
          <p>Apellido: {carerData.LastName}</p>
          <p>Correo: {carerData.Email}</p>
          <p>Telefono: {carerData.Phone}</p>
          <p>Ciudad: {cityFound.Name}</p>
        </div>
      </div>
      <div className='btnCloseBtn'>
        <button onClick={Modalclose} className="btnClose">
          cerrar
        </button>
      </div>
    </div>
  );
}

export default Modal;
