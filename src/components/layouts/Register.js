import React, { Component } from 'react';
import { Form, Input, Label, FormGroup, FormFeedback, Button } from 'reactstrap';
import {isEmail} from 'validator';

class Register extends Component {
    constructor(props) {
        super(props);

        this.state= this.getInitialState();
        
    }

    getInitialState = () => ({
            data: {
                firstname: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: ''
            },
            errors:{}

    });
handleChange = (e) => {
    this.setState({
        data: {
            ...this.state.data,
            [e.target.name]: e.target.value
        },
        errors: {
            ...this.state.errors,
            [e.target.name]: ''
        }
    });
}

validate = () => {
    const { data } = this.state;
    let errors = {};

    if(data.firstname === '') errors.firstName = 'First Name can not be blank.';
    if(data.lastName === '') errors.lastName = 'Last Name can not be blank.';
    if(!isEmail(data.email)) errors.email = 'Email must be valid';
    if(data.email === '') errors.email = 'email can not be blank.';
    if(data.password === '') errors.password = 'password must be valid';
    if(data.password !== errors.password ) errors.confirmPassword = 'password must much';

    return errors;
}

    handleSubmit = (e) =>{
        e.preventDefault();

        const{ data, errors }= this.state;

        

        if(Object.keys(errors).length === 0) {
            console.log(data);
            //call an api here
            //Resetting the form
            this.setState(this.getInitialState());
        } else {
            this.setState({ errors });
        }
        
    }

    
    render() {
        const { data, errors } = this.state;
    return (
        <Form onSubmit={this.handleSubmit}>
            <FormGroup>
                <Label for="firstName"> First Name</Label>
                <Input id="firstName" value={data.firstName} invalid={errors.firstName ? true : false}  name="firstname" onChange={this.handleChange} />
                <FormFeedback>{errors.firstName}</FormFeedback>
            </FormGroup>
       
            <FormGroup>
            <Label for="lastName"> Last Name</Label>
                <Input id="lastName" value={data.lastName} invalid={errors.lastName ? true : false} name="lastname" onChange={this.handleChange}/>
                <FormFeedback>{errors.lastName}</FormFeedback>
            </FormGroup>
        
            <FormGroup>
               <Label for="email"> Email</Label>
               <Input id="email" value={data.email} invalid={errors.email ? true : false} name="email" onChange={this.handleChange}/>
               <FormFeedback>{errors.email}</FormFeedback>
            </FormGroup>
        
            <FormGroup>
               <Label for="password"> password</Label>
               <Input id="password" type="password" value={data.password} invalid={errors.password ? true :false} name="password" onChange={this.handleChange}/>
               <FormFeedback>{errors.password}s</FormFeedback>
            </FormGroup>
            <FormGroup>
               <Label for="confirmPassword"> Confirm password</Label>
               <Input id="confirmPassword" type="password" value={data.confirmPassword} invalid={errors.firstName ? true : false} name="confirmpassword" onChange={this.handleChange}/>
               <FormFeedback>{errors.confirmPassword}</FormFeedback>
            </FormGroup>

        <Button color="primary">Register</Button>

    </Form>
    );
}
}
export default Register;
