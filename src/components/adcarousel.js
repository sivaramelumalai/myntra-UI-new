import React, { Component } from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";

class Adcarousel extends Component {
  render() {
    let names = ['ad1', 'ad2', 'ad3', 'ad4','ad5'].map( (name, index) => {
        return (
          <MDBCarouselItem itemId={index}>
          <MDBView>
          <img
              key={index}
              className="d-block w-100"
              src={require(`../images/${name}.jpg`)}
              alt=""/>
          </MDBView>
        </MDBCarouselItem>
                  ); })
  
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={false}
        showIndicators={false}
        className="z-depth-1"
        slide >
      
        <MDBCarouselInner>
          {names}
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}
}

export default Adcarousel;
