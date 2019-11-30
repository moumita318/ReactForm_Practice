import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPersonalDetails extends Component {
	continue =e =>{
		e.preventDefault();
		this.props.nextStep();
	}
  back =e =>{
    e.preventDefault();
    this.props.prevStep();
  }
	render(){
		const {values, handleChange}=this.props;
		return(
			<MuiThemeProvider>
			    <React.Fragment>
                   <AppBar title="Enter Personal Details"/>
                   <TextField
                      hintText="Enter Your First Occupation"
                      floatingLabelText="Occupation"
                      onChange={handleChange('Occupation')}
                      defaultValue={values.occupation}
                   />
                   <br/>
                   
                   <TextField
                      hintText="enter Your City"
                      floatingLabelText="City"
                      onChange={handleChange('city')}
                      defaultValue={values.city}
                   />
                   <br/>
                   <TextField
                      hintText="Enter Your Bio"
                      floatingLabelText="Bio"
                      onChange={handleChange('Bio')}
                      defaultValue={values.bio}
                   />
                   <br/>
                   <RaisedButton
                   label="continue"
                   primary={true}
                   onClick={this.continue}
                   />
                    <RaisedButton
                   label="back"
                   onClick={this.back}
                   />
			    </React.Fragment>
			</MuiThemeProvider>
			);
	}
}

export default FormPersonalDetails