import React from 'react'
import styled from "./styled.module.scss";
import AddressForm from './address/AddressForm';

const ReservationView = () => {
  return (
    <div  className={styled.border}>
      <AddressForm/>
    </div>
  )
}

export default ReservationView
