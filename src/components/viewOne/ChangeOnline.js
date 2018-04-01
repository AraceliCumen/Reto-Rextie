import React from 'react';
import { Link } from "react-router-dom";

const ChangeOnline = ({ isChange, handleClick1, handleClick2, onConverterBuy, onConverterSale }) => {
  const show1 = () => {
    const style = isChange.isChange1 ? ' show' : ' hide'
    return style;
  }

  const show2 = () => {
    const style = isChange.isChange2 ? ' show' : ' hide'
    return style;
  }



  return (
    <div className="Container mb-3 p-0">
      <div className="radius-20 w-contain p-4 bg-white">
        <div className="text-center">
          <p className="title-c-1 mb-0">Cambio de dólares online</p>
          <p className="title-c-2 mt-0">Seguro, rápido y al mejor precio</p>
        </div>

        <div className="row d-flex justify-content-center" >
          <button type="button" className="btn btn-primary mr-2 px-3" onClick={handleClick1}>Compra: 3.2480</button>
          <button type="button" class="btn btn-success px-4" onClick={handleClick2}>Venta: 3.2700</button>
        </div>

        {/********************************************************mostrar cambio de soles a dolares************************************************** */}

        <div className={"container mt-3" + show1()}>
          <div className="row" >
            <div className="col-6 border ">
              <label className="grey-2 f14 mb-0" htmlFor="">Tengo</label>
              <input className="input-c" type="text" maxLength="20" onChange={evt => {
                onConverterBuy(evt.target.value)
              }} />
            </div>
            <div className="col-6 border pt-2">

              <div className=" d-inline-block">
                <img className="flag" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Flag_of_Peru_%28state%29.svg/1200px-Flag_of_Peru_%28state%29.svg.png" alt="eeuu" />
              </div>
              <div className="d-inline-block">
                <p className=" money">PEN S/</p>
              </div>

            </div>
          </div>
          <div className="row" >
            <div className="col-6 border">
              <label className="grey-2 f14" htmlFor="">Quiero</label>
              <input type="text" className="input-c" maxLength="20" value={isChange.result1} />
            </div>
            <div className="col-6 border pt-2">

              <div className=" d-inline-block">
                <img className="flag" src="https://amedia.britannica.com/33/4833-004-297297B9.jpg" alt="eeuu" />
              </div>
              <div className=" d-inline-block">
                <p className=" money">USD $</p>
              </div>

            </div>
          </div>
        </div>

        {/**********************************************mostrar cambio de dolares a soles************************************************************ */}

        <div className={"container venta  mt-3 " + show2()}>
          <div className="row" >
            <div className="col-6 border ">
              <label className="grey-2 f14 mb-0" htmlFor="">Tengo</label>
              <input className="input-c" type="text" maxLength="20" onChange={evt => {
                onConverterSale(evt.target.value)
              }} />
            </div>
            <div className="col-6 border pt-2">

              <div className=" d-inline-block">
                <img className="flag" src="https://amedia.britannica.com/33/4833-004-297297B9.jpg" alt="eeuu" />
              </div>
              <div className="d-inline-block">
                <p className=" money">USD $</p>
              </div>

            </div>
          </div>
          <div className="row" >
            <div className="col-6 border">
              <label className="grey-2 f14" htmlFor="">Quiero</label>
              <input type="text" className="input-c" maxLength="20" value={isChange.result2} />
            </div>
            <div className="col-6 border pt-2">

              <div className=" d-inline-block">
                <img className="flag" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Flag_of_Peru_%28state%29.svg/1200px-Flag_of_Peru_%28state%29.svg.png" alt="peru" />
              </div>
              <div className=" d-inline-block">
                <p className=" money">PEN S/</p>
              </div>

            </div>
          </div>
        </div>


        <div className="text-center grey-2 mt-3" >
          <p className="title-4 mb-0 ">Ahorra S/. 100.00 respecto al banco</p>
          <p className="f14">Tipo de cambio vigente hasta 00:00</p>
        </div>
        <div className="text-center" >
          <button type="button" className="btn btn-success px-5 ">
            <Link to="/confirmation" className="white">Siguiente</Link>
          </button>
        </div>

      </div>
    </div>

  )
}




export default ChangeOnline;