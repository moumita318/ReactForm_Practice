import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {
	continue =e =>{
		e.preventDefault();
		this.props.nextStep();
	}
	render(){
		const {values, handleChange}=this.props;
		return(
			<MuiThemeProvider>
			    <React.Fragment>
                   <AppBar title="Enter User Details"/>
                   <TextField
                      hintText="enter Your First Name"
                      floatingLabelText="First Name"
                      onChange={handleChange('firstName')}
                      defaultValue={values.firstName}
                   />
                   <br/>
                   <TextField
                      hintText="enter Your Last Name"
                      floatingLabelText="Last Name"
                      onChange={handleChange('lastName')}
                      defaultValue={values.lastName}
                   />
                   <br/>
                   <TextField
                      hintText="enter Your Email"
                      floatingLabelText="Email"
                      onChange={handleChange('email')}
                      defaultValue={values.email}
                   />
                   <br/>
                   <RaisedButton
                   label="continue"
                   primary={true}
                   onClick={this.continue}
                   />
			    </React.Fragment>
			</MuiThemeProvider>
			);
	}
}

export default FormUserDetails