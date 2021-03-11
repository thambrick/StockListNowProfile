//import React from 'react';
//import ReactDOM from 'react-dom';
//const myfirstelement = <h1>Hello React!...ssss...</h1>
//ReactDOM.render(myfirstelement, document.getElementById('root'));

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
    //this.setState({show: false});
  }
  render() {
    //let myheader;
    //if (this.state.show) {
    //  myheader = <Child />;
    //};
    return (
                <center>
			    <div style={{ width: 600, }}>
				<h2><label id='profileTitle'>Complete your Profile</label></h2>
				<form  id='profileForm' method='post' >					
				<table > 
				<tr><td>DisplayName </td><td><input type='text'  id='displayName' onchange={this.handleChange}/></td></tr>
				<tr><td>City</td><td><input type='text'  id='city' onchange={this.handleChange}/></td></tr>
				<tr><td>Email</td><td><input type='text'  id='emailLabel' onchange={this.handleChange}/></td></tr>
			    <tr><td colspan='2' align='center'>
				<input type='button' value="Submit" id='updateProfile'  onClick={this.updateProfile}/> </td></tr>
			    </table>
                </form>
              	</div>		
				</center> 
        );
  }
}


ReactDOM.render(<Container />, document.getElementById('root'));
