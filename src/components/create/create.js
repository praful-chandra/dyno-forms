import React, { Component } from 'react';
import './create.css';

export default class CreateForm extends Component {
    state = {

        form:[{
            "key" : "user001",
            "title" : null,
            "description" : null,
            "model":[]
        }],
        showAdd : false,
        addGroup : false
    }

addtitle = ()=>{
const temp = this.state.form;
temp[0]["title"] = this.refs.title.value;

this.setState({
    form : temp
});
}

addDesc = ()=>{
    const temp = this.state.form;
    temp[0]["description"] = this.refs.desc.value;
    
    this.setState({
        form : temp
    });
    }
 addGroup=(e)=>{
  
  if(!this.state.addGroup){
    this.setState({
        addGroup : !this.state.addGroup
   
   });
  }else{

    if(this.refs.groupName.value !== ""){
        const temp = this.state.form;
        temp[0]["model"].push({"name" : this.refs.groupName.value , "className": "form-row","elements" : []});

        this.setState({
            form : temp,
            addGroup : !this.state.addGroup
        });
    }
  }
   //  
 }  
 showAdd = ()=>{
return(
    <div className={ this.state.showAdd ? "addBox show" : "addBox hide"}>
            <button className="btn btn-danger addBox-close" onClick={()=>{this.setState({showAdd : !this.state.showAdd })}}>X</button>

        <div className="addBox-wrapper">
            <div className="container">
           <div>
           <button className="btn btn-info" onClick={this.addGroup}> Group Box </button>
            {this.state.addGroup ? <div> <input type="text" ref="groupName" /> <button onClick={this.addGroup} >Add</button> </div> : null}
           </div>

            <div>
           <button className="btn btn-info" onClick={this.addInput}> Input Box </button>
            {this.state.addInput ? <div> <input type="text" ref="InputName" /> <button onClick={this.addInput} >Add</button> </div> : null}
           </div>

            </div> 
        </div>
    </div>
);
 }   
 createForm = ()=>{
     return(
        <div className="Cform">


        <h1>Title : {this.state.form[0]["title"]}</h1>
        <hr/>
        <h5>Description : {this.state.form[0]["description"]}</h5>
        <hr/>
        <div className="form-body">

        </div>

        <div className="btn btn-info" onClick={()=>{this.setState({
            showAdd : !this.state.showAdd
        })}}>ADD Items</div>
    </div>
     )
 }

  render() {
     console.log(this.state.form)
    return (
      <div>
                      { this.showAdd() }

        {this.state.form[0]["title"] === null ? (
             <div className="create-wrapper">
             <div className="create-title form-group">
             <label htmlFor="title">Enter title for the form </label>
             <input className="form-control" type="text" ref="title" name="title" id="title" required />
             <button className="btn btn-success" onClick={this.addtitle}>Continue</button>
         </div>
             </div>
        ) : null     
    }

    {(this.state.form[0]["description"] === null && this.state.form[0]["title"] !== null ) ? (
             <div className="create-wrapper">
             <div className="create-title form-group">
             <label htmlFor="title">Enter Description for the form </label>
             <input className="form-control" type="text" ref="desc" name="desc" id="desc" required />
             <button className="btn btn-success" onClick={this.addDesc}>Continue</button>
         </div>
             </div>
        ) : null     
    }

    {(this.state.form[0]["title"] !== null && this.state.form[0]["description"] !== null ) ? this.createForm() : null}
      </div>
    )
  }
}
