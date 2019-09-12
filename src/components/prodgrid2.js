import React, { Component } from "react";

class Prodgrid2 extends Component {
    render() {
        const arange ={
            height: "50%",
             width: "30%"
        }
        let names = ['prodgr1','prodgr2','prodgr3','prodgr4','prodgr5','prodgr6','prodgr7','prodgr8'].map( (name, index) => {
            return (
                <div class="col-md-3 col-sm-4 col-xs-6">
            <img
              key={index}
              className="d-block w-100"
              src={require(`../images/${name}.jpg`)}
              alt=""/>
              </div>
              ); })

            

        return(
            <div>
            <div>
    <img src ={require(`../images/text3.jpg`)} margin="5%"/>
  </div>
            <div class="container">
                <div class="row">
                {names}
            </div>
            
            </div>
            
            <div>
    <img src ={require(`../images/text4.jpg`)} margin="5%"/>
  </div>
    
  
            </div>
        )
    }
}
export default Prodgrid2;