import React, { Component } from "react";

class Prodgrid1 extends Component {
    render() {
        const arange ={
            height: "50%",
             width: "30%"
        }
        let names = ['prodg1','prodg2','prodg3','prodg4','prodg5','prodg6','prodg7','prodg8'].map( (name, index) => {
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
    <img src ={require(`../images/text1.jpg`)} />
  </div>
            <div class="container">
                <div class="row">
                {names}
            </div>
            </div>
            <div>
    <img src ={require(`../images/text2.jpg`)} />
  </div>
  <div>
  <div class="container">
  <div class="row">
  <div class="col" style={arange}>
  <img src ={require(`../images/prodbig1.jpg`)} width="514" height="300"/>
    </div>
    <div class="col" style={arange} >
    <img src ={require(`../images/prodbig2.jpg`)} width="514" height="300" />
    </div>
  </div>
  <div class="row">
    <div class="col">
    <img src ={require(`../images/prodbig3.jpg`)} width="514" height="300" />
    </div>
    <div class="col">
    <img src ={require(`../images/prodbig4.jpg`)} width="514" height="300" />
    </div>
  </div>
</div>
  </div>
            </div>
        )
    }
}
export default Prodgrid1;