import React from 'react';
import { MDBRow, MDBCol } from 'mdbreact';

//src: https://www.pngfuel.com/free-png/txphk
const Logo = () => {
  return (
    <MDBRow>
      <MDBCol>
        <img className="img-fluid mx-auto mt-1 mb-3 d-block" src={`${process.env.PUBLIC_URL}/logo.png`} alt="kk" style={{maxHeight: "200px"}}/>
      </MDBCol>
    </MDBRow>
  );
};

export default Logo;