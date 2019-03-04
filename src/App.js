import React, { Component } from 'react';
import './App.css';
import FormList from './components/formList';
import DynamicForm from './components/DynamicForm';
import JSONToCSVConvertor from './components/csvConverter';
import Popup from './components/viewData';

import {Link} from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showPopup: false,
      formselected : null,
      data:[]
    };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }


onSubmit = (model)=>{
  this.setState({
    data : [ ...this.state.data, model ]
  });

}

goHome = ()=>{
  if(this.state.data.length > 0 ){
   if( window.confirm("Your entered data will be lost . are you sure?"))
    this.setState({formselected:null,data:[]}) ;
  }else{
    this.setState({formselected:null,data:[]}) 
  } 
  
}


Forms = FormList();

  render() {

   const formSelector=()=>{
     const itms=[];
        this.Forms.map((m,i)=>{
            itms.push(
              <button key={m.key} className="btn btn-primary btn-block" onClick={()=>{this.setState({formselected:i,data:[]})}}  >{m.title}</button>
            );

            return null;
        });

        return itms;
    }
    const renderForm=(f)=>{
      f = this.Forms[f];
      return(
        <DynamicForm 
        key={f.key}
        title={f.title}
        desc={f.desc}
        model={f.model}
        onSubmit={model=>this.onSubmit(model)}
        />
      );
    }
    const downloadCSV=()=>{
      JSONToCSVConvertor(this.state.data, this.Forms[this.state.formselected].title , true);
        this.setState({
          data:[]
        });
    }

  

    return (
      <div className="App container">



     {(this.state.formselected === null)? formSelector() : renderForm(this.state.formselected)}
     
     
      
        <br/>

        {   (this.state.data.length > 0) ?
          <div className="dataContainer">
            <button className="btn btn-block btn-info" onClick={()=>this.togglePopup()}>View entered data</button>

          </div>
          : null
        }

        <br/><br/>

       {   (this.state.data.length > 0) ?
          <button className="btn " onClick={downloadCSV}>Downoad Excel data</button>
          : null
        }
        
        <br/>
      {
        this.state.formselected !== null ?  
         <button className="btn btn-danger btn-sm " onClick={()=>this.goHome()}>Home</button>
        : <Link to="/create" className="btn btn-warning" > Create your own </Link>
      }

      {this.state.showPopup ? 
          <Popup
            text="Entered Data"
            data = {this.state.data}
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }

      </div>
    );
  }
}

export default App;
