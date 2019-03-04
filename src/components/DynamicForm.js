import React, { Component } from 'react';
import uuid from 'uuid';
import Popup from './viewData';


export default class DynamicForm extends Component {
    constructor(props) {
      super(props)
    
      this.state={
        showPopup: false,

            elements :[]
      }

      this.settings = this.settings.bind(this);
    
    }
     group = [];
     itm = [];
componentDidMount(){
    this.props.model.map((m,mi)=>{
        this.group =[
            ...this.group,
           { [m.name] :[]}
        ]
            m.elements.map(e=>{
                this.group[mi][m.name].push({[e.key] : true});
            //  console.log(this.group[mi]);
                    return null;
            })

        this.setState({
            elements : this.group,
            
        });
        return null;
    })
    


}

settings =(conts)=>{
    this.setState({
        showPopup: !this.state.showPopup,
       
      });

      if(Array.isArray(conts)){
          this.setState({
              elements : conts
          });
      }
}

componentWillUnmount(){
  //  debugger;

}

    renderForm = ()=>{
        let model = this.props.model;
        let formUI = model.map((e,i)=>{
            let name = e.name;
            let mainclass = e.className;

            let ele = e.elements.map((m,j)=>{
                let key = m.key;
                let type = m.type || "text";
                let props = m.props;
                let itemclass = m.className;
                let control = m.control || "input";
                
                if(this.state.elements.length > 0)
                if(this.state.elements[i][name][j][key])
                switch(control){
                    case "input" :          
                                        
                                         return(
                                            <div className={itemclass} key={key}>
                                                <label 
                                                key={"l"+key}
                                                htmlFor={key}
                                                >
                                                {m.label}
                                                </label>
                                                <br/>
                                                <input
                                                
                                                type={type}
                                                {...props} 
                                                ref={(key)=>{this[m.key]=key}}
                                                key={"t"+key}
                                                onChange={e=>{this.onChange(e,key)}}/>
                            
                            
                                            </div>
                                        );
                    case "select" : return(
                                            <div className={itemclass} key={key}>
                                                <label 
                                                key={"l"+key}
                                                htmlFor={key}
                                                >
                                                {m.label}
                                                </label>
                                                    
                                                <select
                                                type={type}
                                                {...props} 
                                                ref={(key)=>{this[m.key]=key}}
                                                key={"t"+key}
                                                onChange={e=>{this.onChange(e,key)}}>
                                                    {m.options.map(opt=>{
                                                       if(opt.default){
                                                        return(
                                                            <option key={opt.default} default>{opt.default}</option>
                                                        );
                                                       }else{
                                                        return(
                                                            <option  key={opt}>{opt}</option>
                                                        );
                                                       }
                                                    })}
                                                </select>
                            
                            
                                            </div>
                                        );

                    default :return(<div key={uuid()}> No recogisabe data found </div>)
                }
                return null;
            });

           return(
               <div key={name} className={mainclass}>                       
                    {ele}
               </div>
           );
           
            

            
        });

        return formUI;
    }

onChange=(e,key)=>{
    this.setState({
        enteredData :{
            ...this.state.enteredData,
            [key]:this[key].value
        }
    });
}
    onSubmit = e=>{
        e.preventDefault();
        if(this.props.onSubmit) this.props.onSubmit(this.state.enteredData);
    }
  render() { 

    return (

      <div className={this.props.className || "App"}>
        <h1>{this.props.title || "DYnamic form"}</h1>
        <h4>{this.props.desc || "no description given"}</h4>

            <form action="" onSubmit={e=>this.onSubmit(e)}>
            <br/> <br/>


            {this.renderForm()}
                    <div className="form-group">
                        <input type="submit" value="SUbmit"/>
                    </div>
            </form>
                        <div className="btn btn-warning" onClick={this.settings}>Settings</div>
                        {this.state.showPopup ? 
          <Popup
            text="Settings"
            elements={this.state.elements}
            closePopup={(conts)=>{this.settings(conts)}}
          />
          : null
        }
      </div>
    )

  }
}
