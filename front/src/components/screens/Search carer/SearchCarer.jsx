import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import axios from 'axios';
import './SearchCarer.css';


function SearchCarer() {
  const [carers, setCarers] = useState([]);
  const [modal, setmodal] = useState(false);
  const [selectedCarer, setSelectedCarer] = useState(null);

  const handlerModal = carer => {
    if(modal){setmodal(false)}
    else{setmodal(true);}
    setSelectedCarer(carer)
};
  useEffect(() => {
    axios
      .get('http://localhost:5000/carers')
      .then(response => {
        setCarers(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });
  }, []);
  return (
    <div className={`search-carer-container ${modal ? 'modal-open' : ''}`}>
      <h2>Buscar cuidador</h2>

      {carers.map((carer, index) => (
        <div key={index} className="cards" onClick={() => handlerModal(carer)}>
          <img src={carer.PhotoURL} className="photo" />
          <h3>
            {carer.Name} {carer.LastName}
          </h3>
          <span className="raiting">Stars: </span>
        </div>
      ))}
      <div className='end'></div>
      {modal && (
        <Modal carerData={selectedCarer} closeModal={handlerModal}/>
      )}
    </div>
  );
}
export default SearchCarer;
