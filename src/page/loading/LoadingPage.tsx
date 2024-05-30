import React from 'react'
import ReactLoading from "react-loading";
import { Container } from 'components/stack/Content';


const CustomLoading = () => {

  return (
    <Container>
      <ReactLoading type={"bars"} color={"#FFFFFF"} height={80} width={100} /> 
    </Container>
  )
}
export default CustomLoading
