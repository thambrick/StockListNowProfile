import React from 'react';
import ReactDOM from 'react-dom';

const myfirstelement = (
                <center><h2><label id='profileTitle'>Complete your Profile</label></h2>
				<form  id='profileForm' method='post'>					
				<table>
				<tr><td>DisplayName For SLN..6666777888... </td><td><input type='text' value='' id='displayName'/></td></tr>
				<tr><td>City</td><td><input type='text' value='' id='city'/></td></tr>
				<tr><td>Email</td><td><input type='text' value='' id='emailLabel'/></td></tr>
			    <tr><td colspan='2' align='center'>
				<input type='button' value='Submit' id='updateProfile'  onClick="alert('trey')"/> </td></tr>
			    </table>
                </form> </center>
)

ReactDOM.render(myfirstelement, document.getElementById('root'));