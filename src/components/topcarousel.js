import React, { Component } from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";

class CarouselPage extends Component {
  render() {
    let names = ['topcarousel1', 'topcarousel2', 'topcarousel3', 'topcarousel4','topcarousel5'].map( (name, index) => {
        return (
          <MDBCarouselItem itemId={index}>
          <MDBView>
          <img
              key={index}
              className="d-block w-100"
              src={require(`../images/${name}.jpeg`)}
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

export default CarouselPage;
//<img class="image-image undefined image-hand" src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/8/2/f69f4aba-2db3-4ebb-afb6-22f30a7759021564731936906-desktop-deal.jpG" srcset=""></img>
//src={require(`./icons/${name}.png`)}