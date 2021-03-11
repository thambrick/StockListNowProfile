//import React from 'react';
//import ReactDOM from 'react-dom';
//const myfirstelement = <h1>Hello React!...ssss...</h1>
//ReactDOM.render(myfirstelement, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';

class Container extends React.Component {
  constructor(props) {
    super(props);
    //this.state = {show: true};
  }
  updateProfile = () => {
	alert("updated Profile.");  
    //this.setState({show: false});
  }
  render() {
    let myheader;
    //if (this.state.show) {
    //  myheader = <Child />;
    //};
    return (
                <center>{myheader}
				<h2><label id='profileTitle'>Complete your Profile</label></h2>
				<form  id='profileForm' method='post' action22={this.updateProfile} action="www.stocklistnow.com">					
				<table>
				<tr><td>DisplayName </td><td><input type='text' value='' id='displayName'/></td></tr>
				<tr><td>City</td><td><input type='text' value='' id='city'/></td></tr>
				<tr><td>Email</td><td><input type='text' value='' id='emailLabel'/></td></tr>
			    <tr><td colspan='2' align='center'>
				<input type='button' value='Submit' id='updateProfile'  onClick={this.updateProfile}/> </td></tr>
			    </table>
                </form> </center>
        );
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    alert("The component named Header is about to be unmounted.");
  }
  render() {
    return (
      <h1>Header!</h1>
    );
  }
}

ReactDOM.render(<Container />, document.getElementById('root'));
