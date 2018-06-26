import React, { Component } from 'react';
import logo from "../css/success.svg";
class Gameboard extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
  }

  render() {
      const styles={
        inline1:{
            display:"inline",
            padding:5,
            borderWidth:1,
            borderColor:"black"
        },
        button: {
            margin: 3,
          },
      }
    return(
      <div className="container">
          <div className="col-md-12 inline1" style={{border:'1px solid black',padding:"5px"}}>
            <h1 style={{display:"inline"}}>#Game 4 is live</h1>
            <button style={{border:'1px solid black',display:"inline",float:"right",width:"80px",height:"30px",margin:"5px"}}>Play</button>
          </div>
          <table style={{width:"100%",marginTop:"20px"}}>
              <th>Game NO.</th>
              <th>Game Type</th>
              <th>Status</th>
              <th>Ending Date</th>
              <th>Stake</th>
              <th>Reward</th>
              <th></th>
              <tr style={{border:'1px solid black',marginTop:"20px",height:"50px"}}>
                 <th>Game #012</th>
                 <th>Team Dream</th>
                 <th>Live</th>
                 <th>2 days</th>
                 <th>40 STR</th>
                 <th>Pending</th>
                 <th></th>
              </tr>
              <tr style={{border:'1px solid black',marginTop:"20px",height:"50px"}}>
                 <th>Game #013</th>
                 <th>Team Dream</th>
                 <th>Live</th>
                 <th>10 days</th>
                 <th>40 STR</th>
                 <th>Pending</th>
                 <th></th>
              </tr>
              <tr style={{border:'1px solid black',marginTop:"20px",height:"50px"}}>
                 <th>Game #012</th>
                 <th>Team Dream</th>
                 <th>Live</th>
                 <th>2 days</th>
                 <th>40 STR</th>
                 <th>Pending</th>
                 <th><img src={logo} style={{width:"40px",height:"40px"}}/></th>
              </tr>
          </table>
      </div>
    )
  }
}

export default Gameboard