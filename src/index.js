//import React from 'react';
//import ReactDOM from 'react-dom';
//const myfirstelement = <h1>Hello React!...ssss...</h1>
//ReactDOM.render(myfirstelement, document.getElementById('root'));

//import React, { Component } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
//import queryString from 'query-string';
//import pic01 from './images/pic01.jpg'; // with import



function setData(data){
   alert(data);
   //frameElement.remove();
   alert("try close now");
   //window.parent.document.getElementById('centerDiv').style.display = "none";
   alert("try close now11112222");
   //window.opener = null;
   //window.open('', '_self');
   //window.close();
   //frames['iFrame'].document.getElementById('centerDiv').style.display = "none";
   //window.parent.postMessage();
   alert("try close now111122223333");
   //alert(document.getElementById("displayName").value);
   //alert(document.getElementById("city").value);
   //alert(document.getElementById("email").value);
	
	//window.close();
    //createCookieInHour("displayName",document.getElementById("displayName").value,9000);	
	//createCookieInHour("city",document.getElementById("city").value,9000);
	//createCookieInHour("email",document.getElementById("email").value,9000);
	//window.parent.getElementById('centerDiv').style.display = "none";	
	//let email = document.getElementById("email").value;
	//let displayName = document.getElementById("displayName").value;
	//let city = document.getElementById("city").value;
   //alert(email);
   //alert(displayName);
   //alert(city);
	
}

//function createCookieInHour (cookieName, cookieValue, hourToExpire) {
//    let date = new Date();
//    date.setTime(date.getTime()+(hourToExpire*60*60*1000));
//    document.cookie = cookieName + " = " + cookieValue + "; expires = " +date.toGMTString();
//}

var userId;
var email;

class Container extends React.Component {
  constructor(props) {
    super(props);
	//let userId2 = document.cookie.replace(/(?:(?:^|.*;\s*)userId\s*\=\s*([^;]*).*$)|^.*$/, "$1"); 
	//parent.iFrameWin = window;
	//alert("in react, userId="); 
	
	//alert(this.props.location.search);
	let params = window.location.search;
	//alert(params);
	params = params.replace("?userid=", "");
	//alert(params);
	
	//?userid=123&email=trey.hambrick@cox.net
	
	userId = params.substring(0, params.search("&email="));
	//alert(userId);
	email = params.replace(userId, "");
	//alert(email);
	email = email.replace("&email=", "");
	//alert(email);
	//this.document.getElementById("email").value=email;

	//alert(location.search);
	//let email2 = document.cookie.replace(/(?:(?:^|.*;\s*)email\s*\=\s*([^;]*).*$)|^.*$/, "$1");
	//alert(email2);
    //this.state = {show: true};
  }
  updateProfile = () => {
	//alert("updated Profile."); 
    //alert(document.getElementById("displayName").value);	
    //this.setState({show: false});
		//let userId = document.cookie.replace(/(?:(?:^|.*;\s*)userId\s*\=\s*([^;]*).*$)|^.*$/, "$1"); 
		if (!userId){ 
		   alert("you must login before completing your profile"); 
		   return false;
		   }
		
		try {
			//let userId = document.cookie.replace(/(?:(?:^|.*;\s*)userId\s*\=\s*([^;]*).*$)|^.*$/, "$1"); 
			//alert("userId===");
			//alert(userId);
			let email = document.getElementById("email").value;
			let displayName = document.getElementById("displayName").value;
			let city = document.getElementById("city").value;
			
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            var raw = JSON.stringify({"userId":userId,"email":email,"displayName":displayName,"city":city});
			//alert(raw);
            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };
			fetch("https://u3yyrwv2r5.execute-api.us-west-2.amazonaws.com/dev", requestOptions)
             .then(response => response.text())
			 //.then(result => alert(JSON.parse(result).body))
			 .then(result => setData(JSON.parse(result).body))
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
	///let email = document.cookie.replace(/(?:(?:^|.*;\s*)email\s*\=\s*([^;]*).*$)|^.*$/, "$1");
	//<tr><td>Current Email</td><td>{email}</td></tr>
    return (    
	            <section id="yourProfile" class="wrapper style2 spotlights">
	           
                <div class="inner">
				<h2><label id='profileTitle'>Complete your Profile</label></h2>
				<form id='profileForm' method='post' >					
				<table> 
				<tr><td>DisplayName </td><td><input type='text' id='displayName' onchange={this.handleChange}/></td></tr>
				<tr><td>City</td><td><input type='text' id='city' onchange={this.handleChange}/></td></tr>
                <tr><td>Email</td><td><input type='text' defaultValue={email} id='email' onchange={this.handleChange}/></td></tr>
			    <tr><td colspan='2' align='center'>
				<input type='button' value="Submit" id='updateProfile' onClick={this.updateProfile}/> </td></tr>
			    </table>
                </form>
                </div>		
               				
				</section>  
        );
  }
}


ReactDOM.render(<Container />, document.getElementById('root'));
