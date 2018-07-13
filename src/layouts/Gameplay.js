import React, { Component } from 'react'
import { Link } from 'react-router'
import {connect} from "react-redux";
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
class Gameplay extends Component {
    state = {
        checkedA: true,
        checkedB: true,
      };
    
      handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
      };
      checkSubmission(){
          
      }
    render(){
        return (
          <div className="container" style={{marginTop:"10%"}}>
              
              <div style={{display:"inline-block",width:"40%",height:"auto",textAlign:"center",border:"1px solid black",padding:"10px"}}>
              <h1 style={{textAlign:"center",margin:"10px"}}>Project Dimension</h1>
              <div style={{width:"80%",height:"50px",textAlign:"center",display:"block",margin:"auto",border:"1px solid black",marginBottom:"10px"}}>Attribute 1</div>
              <div style={{width:"80%",height:"50px",textAlign:"center",display:"block",margin:"auto",border:"1px solid black",marginBottom:"10px"}}>Attribute 2</div>
              <div style={{width:"80%",height:"50px",textAlign:"center",display:"block",margin:"auto",border:"1px solid black",marginBottom:"10px"}}>Attribute 3</div>
              </div>
              <div style={{display:"inline-block",width:"20%",height:"50%",textAlign:"center"}}>
                    <Switch
                checked={this.state.checkedA}
                onChange={this.handleChange('checkedA')}
                value="checkedA"
                />
              </div>
              <div style={{display:"inline-block",width:"40%",height:"auto",textAlign:"center",border:"1px solid black",padding:"10px"}}>
              <h1 style={{textAlign:"center",margin:"10px"}}>Project Dimension</h1>
              <div style={{width:"80%",height:"50px",textAlign:"center",display:"block",margin:"auto",border:"1px solid black",marginBottom:"10px"}}>Attribute 4</div>
              <div style={{width:"80%",height:"50px",textAlign:"center",display:"block",margin:"auto",border:"1px solid black",marginBottom:"10px"}}>Attribute 5</div>
              <div style={{width:"80%",height:"50px",textAlign:"center",display:"block",margin:"auto",border:"1px solid black",marginBottom:"10px"}}>Attribute 6</div>
              </div>
              <div style={{marginLeft:"40%",marginTop:"30px"}}>
                    <TextField
                id="password-input"
                label="STR"
                type="password"
                />
                <Button variant="outlined" color="secondary" style={{display:"inline",margin:"10px"}}>
                    Go ahead
                </Button>
              </div>
         </div>
        );
    }
}
export default Gameplay;