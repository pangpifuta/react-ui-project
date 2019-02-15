import React from 'react'
import { Link } from 'react-router-dom'

import './Sidebar.css'

// const MyLink = props => <Link to="/traffic" {...props} />

const sidebar = props => (
  <header className="sidebar">



    <div id="Profile" class="profile_container">
    <img src="https://openclipart.org/download/247319/abstract-user-flat-3.svg" alt="Avatar" class="image"/> {/* changeee */}
    <div class="username-text">Guest</div>
    </div>
    {/* constructor(props) {
    super(props)
    this.routeChange = this.routeChange.bind(this);
  }
  
  routeChange(){
    let path = `./traffic` //set the condition for path
    //let path = `./menu`
    this.props.history.push(path);

    onClick={()=>this.props.history.push('/traffic')}
  } */}
    <div class="tab">
    {/* <button class="tablinks" onmouseover="openCity(event, 'Current Traffic')">Current Traffic</button>
    <button class="tablinks" onmouseover="openCity(event, 'Analyse Region')">Analyse Region</button> 
    <button class="tablinks" onmouseover="openCity(event, 'Statistics')">Statistics</button> */}
    {/* <button class="tablinks" >Current Traffic</button>
    <button class="tablinks"   >Analyse Region</button> 
    <button class="tablinks" >Statistics</button>  */}
    <a href="#" class="tablinks" >Current Traffic</a>
    <a href="/traffic" class="tablinks" >Analyse Region</a> 
    <a href="#" class="tablinks" >Statistics</a> 
    </div>

    {/* <a href="/login">Log In</a> */}

    {/* <div id="Current Traffic" class="tabcontent">
    <h3 >Current Traffic</h3>
    <p>London is the capital city of England.</p>
    </div>

    <div id="Analyse Region" class="tabcontent">
    <h3>Analyse Region</h3>
    <p>Paris is the capital of France.</p> 
    </div>

    <div id="Statistics" class="tabcontent">
    <h3>Statistics</h3>
    <p>Tokyo is the capital of Japan.</p> */}
    {/* </div> */}
  </header>
)

export default sidebar