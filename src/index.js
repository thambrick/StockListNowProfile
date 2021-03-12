//import React from 'react';
//import ReactDOM from 'react-dom';
//const myfirstelement = <h1>Hello React!...ssss...</h1>
//ReactDOM.render(myfirstelement, document.getElementById('root'));

//import React, { Component } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
//import pic01 from './images/pic01.jpg'; // with import

function setData(data){
   alert(data);
   
   //alert(document.getElementById("displayName").value);
   //alert(document.getElementById("city").value);
   //alert(document.getElementById("email").value);
				
}

class Container extends React.Component {
  //constructor(props) {
  //  super(props);
    //this.state = {show: true};
	//var email = document.cookie.replace(/(?:(?:^|.*;\s*)email\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  //}
  
  updateProfile = () => {
	//alert("updated Profile."); 
    //alert(document.getElementById("displayName").value);	
    //this.setState({show: false});
	
	    let userId = document.cookie.replace(/(?:(?:^|.*;\s*)userId\s*\=\s*([^;]*).*$)|^.*$/, "$1"); 
		if (!userId){ 
		   alert("you must login before completing your profile"); 
		   //return false;
		   }
		alert(userId);
		
		try {
			let userId = "testuserId";  //get from the cookie
			let email = document.getElementById("emailLabel").value;
			let displayName = document.getElementById("displayName").value;
			let city = document.getElementById("city").value;
			
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            var raw = JSON.stringify({"userId":userId,"email":email,"displayName":displayName,"city":city});
            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };
			fetch("https://u3yyrwv2r5.execute-api.us-west-2.amazonaws.com/dev", requestOptions)
             //.then(response => response.text())
			 
			 //.then(result => setData(JSON.parse(result).body))
			 .then(result => alert(JSON.parse(result).body))
            .catch(error => alert(JSON.parse(error).body));
		} catch (error) {
			//console.error(error);
			alert(error);
		}
		
  }
  render() {
    //let myheader;
    //if (this.state.show) {
    //  myheader = <Child />;
    //};
	//<div style={{ width: 600, }}>
	//</div>
	//<img src={pic01} alt="" data-position="top center" />
	//<a href="#yourProfile" class="image"><img src={pic01} alt="" data-position="top center" /></a>
	//let displayName = document.cookie.replace(/(?:(?:^|.*;\s*)displayName\s*\=\s*([^;]*).*$)|^.*$/, "$1");
	//let city = document.cookie.replace(/(?:(?:^|.*;\s*)city\s*\=\s*([^;]*).*$)|^.*$/, "$1");
	let email = document.cookie.replace(/(?:(?:^|.*;\s*)email\s*\=\s*([^;]*).*$)|^.*$/, "$1");
	// email = "234"; value={email}
    return (    
	            <section id="yourProfile" class="wrapper style2 spotlights">
	            <section>
	            <div class="content">
				
                <div class="inner">
				<h2><label id='profileTitle'>Complete your Profile</label></h2>
				<form id='profileForm' method='post' >					
				<table> 
				<tr><td>DisplayName </td><td><input type='text'  id='displayName' onchange={this.handleChange}/></td></tr>
				<tr><td>City</td><td><input type='text' id='city'  onchange={this.handleChange}/></td></tr>
				<tr><td>Email</td><td><input type='text' id='emailLabel'  onchange={this.handleChange}/></td></tr>
				<tr><td>Current Email</td><td>{email}</td></tr>
			    <tr><td colspan='2' align='center'>
				<input type='button' value="Submit" id='updateProfile' onClick={this.updateProfile}/></td></tr>
			    </table>
                </form>
                </div>	
                </div>		
                </section>				
				</section>  
        );
  }
}


ReactDOM.render(<Container />, document.getElementById('root'));
