import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

//ReactDOM.render(
//  <React.StrictMode>
//    <App /> 
//  </React.StrictMode>,
//  document.getElementById('root')
//);



const myelement = (
                <center><h2><label id='profileTitle'>Complete your Profile</label></h2>
				<form  id='profileForm' method='post'>					
				<table>
				<tr><td>DisplayName For SLN..6666... </td><td><input type='text' value='' id='displayName'/></td></tr>
				<tr><td>City</td><td><input type='text' value='' id='city'/></td></tr>
				<tr><td>Email</td><td><input type='text' value='' id='emailLabel'/></td></tr>
			    <tr><td colspan='2' align='center'>
				<input type='button' value='Submit' id='updateProfile'  onClick="alert('trey')"/> </td></tr>
			    </table>
                </form> </center>
);

ReactDOM.render(myelement, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
