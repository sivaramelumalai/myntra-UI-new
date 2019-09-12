import React, { Component } from "react";

class Sixgrid extends Component {
    render() {
        return(

<div class="container">
  <div class="row">
  <div class="col" >
  <img src ={require(`../images/6grid1.jpg`)} width="514" height="20"/>
    </div>
    <div class="col"  >
    <img src ={require(`../images/6grid2.jpg`)} width="514" height="220" />
    </div>
  </div>
  <div class="row">
    <div class="col">
    <img src ={require(`../images/6grid3.jpg`)} width="514" height="220" />
    </div>
    <div class="col">
    <img src ={require(`../images/6grid4.jpg`)} width="514" height="220" />
    </div>
  </div>
  <div class="row">
    <div class="col">
    <img src ={require(`../images/6grid5.jpg`)} width="514" height="220" />
    </div>
    <div class="col">
    <img src ={require(`../images/6grid6.jpg`)} width="514" height="220" />
    </div>
  </div>
</div>
        );}}
        
export default Sixgrid;