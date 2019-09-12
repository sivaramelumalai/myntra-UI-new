import React, { Component } from "react";

class Prodgrid3 extends Component {
    render() {
        const arange ={
            height: "50%",
             width: "30%"
        }
        let names = ['prodgri1','prodgri2','prodgri3','prodgri4','prodgri5','prodgri6','prodgri7','prodgri8'].map( (name, index) => {
            return (
                <div class="col-md-3 col-sm-4 col-xs-6">
            <img
              key={index}
              className="d-block w-100"
              src={require(`../images/${name}.jpg`)}
              alt=""/>
              </div>
              ); })

            //   let prodlarge = ['prodbig1','prodbig2','prodbig3','prodbig4'].map( (name, index) => {
            //     return (
            //         <div class="col-md-3 col-sm-4 col-xs-6">
            //     <img
            //       key={index}
            //       className="d-block w-100"
            //       src={require(`../images/${name}.jpg`)}
            //       alt=""/>
            //       </div>
            //       ); })

        return(
            <div>
            <div>
    <img src ={require(`../images/text4.jpg`)} />
  </div>
            <div class="container">
                <div class="row">
                {names}
            </div>
            <br></br>
            </div>
            <div>
    <img src ={require(`../images/text5.jpg`)} />
  </div>
  </div>
            
        )
    }
}
export default Prodgrid3;