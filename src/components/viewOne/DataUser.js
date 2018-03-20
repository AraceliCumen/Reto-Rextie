import React from 'react';
import PropTypes from 'prop-types';

const DataUser = ({dataUser}) => (
  <div className="col-md-4">
    <div className="card" style={{width: '18rem'}}>
      <h2 className="text-center">{dataUser.title}</h2>
      <img className="card-img-top" src={dataUser.url} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title text-center">{dataUser.name}</h5>
        <p className="card-text text-center">DNI : {dataUser.dni}</p>
      </div>
    </div>
  </div>
)
/* Header.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
} */

export default DataUser