import React, { Component } from "react";

class Deal extends Component {
    render() {
        let names = ['deal1', 'deal2', 'deal3', 'deal4'].map( (name, index) => {
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
            <div class="container">
                <div class="row">
                {names}
            </div>
            </div>
        )
    }
}
export default Deal;