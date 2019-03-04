import React, { Component } from 'react'
import './viewData.css';
export default class ViewData extends Component {

state={
  c : this.props.elements
}

data =  this.props.data;
ele = this.props.elements;

generateTable=()=>{
  
 let col = [];
  for (let i = 0; i < this.data.length; i++) {
      for (let key in this.data[i]) {
          if (col.indexOf(key) === -1) {
              col.push(key);
          }
      }
  }

  let table = document.createElement("table");
  var tr = table.insertRow(-1); 

  for (var i = 0; i < col.length; i++) {
    var th = document.createElement("th");     
    th.innerHTML = col[i];
    tr.appendChild(th);
}

for ( i = 0; i < this.data.length; i++) {

  tr = table.insertRow(-1);

  for (var j = 0; j < col.length; j++) {
      var tabCell = tr.insertCell(-1);
      if(this.data[i][col[j]])
      tabCell.innerHTML = this.data[i][col[j]];
  }

  var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
}
}

deselect = (e,i)=>{
  console.log(i);
 
}
 mKey =[];
settings = ()=>{

  
let cont = this.state.c.map((e,i)=>{

let cKey = Object.keys(e)[0];
let check = Object.values(e).map((t)=>{

  let a = t.map((e,j)=>{
    let b = Object.keys(e)[0]
    return(
      <div className="form-check" key={"j"+j}>
  <button className={this.state.c[i][cKey][j][b] ? "btn btn-success" : "btn btn-danger"}  type="button" onClick={(e)=>{this.ele[i][cKey][j][b] = !this.ele[i][cKey][j][b]; e.target.checked =!e.target.checked; this.setState({  c : this.ele });  }} id="defaultCheck1" > {Object.keys(e)} </button>
 
</div>
    );
  })

  return a;
});

return(
  <div className="card" key={i}>
<div className="card-header">
    {cKey}
  </div>
  <div className="card-body">
  {check}
  </div>
  </div>
);
  })

 
return (
 cont
);

}

componentDidMount(){

  if(this.props.data){
    this.generateTable()
  }

 
}
  render() {

    return (

      <div className='popup'>
      <div className='popup_inner'>
      <button className="btn btn-sm btn-danger closeButton" onClick={()=>{this.props.closePopup(this.state.c)}}>X</button>
        <h1>{this.props.text}</h1>

          <div id="showData">

            {this.props.elements ? this.settings() : null}

          </div>


     
      </div>
    </div>
    )
  }
}
