//import React from 'react';
//import ReactDOM from 'react-dom';
//const myfirstelement = <h1>Hello React!...ssss...</h1>
//ReactDOM.render(myfirstelement, document.getElementById('root'));

//import React, { Component } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';


class Container extends React.Component {
  //constructor(props) {
  //  super(props);
    //this.state = {show: true};
  //}
  updateProfile = () => {
	alert("updated Profile."); 
    alert(document.getElementById("displayName").value);	
    //this.setState({show: false});
		
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
             .then(response => response.text())
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
    return (    
                <div class="inner">
				<h2><label id='profileTitle'>Complete your Profile</label></h2>
				<form id='profileForm' method='post' >					
				<table > 
				<tr><td>DisplayName </td><td><input type='text' id='displayName' onchange={this.handleChange}/></td></tr>
				<tr><td>City</td><td><input type='text' id='city' onchange={this.handleChange}/></td></tr>
				<tr><td>Email</td><td><input type='text' id='emailLabel' onchange={this.handleChange}/></td></tr>
			    <tr><td colspan='2' align='center'>
				<input type='button' value="Submit" id='updateProfile' onClick={this.updateProfile}/> </td></tr>
			    </table>
                </form>
                </div>	 
        );
  }
}


ReactDOM.render(<Container />, document.getElementById('root'));
