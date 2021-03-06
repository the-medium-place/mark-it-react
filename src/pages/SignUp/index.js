
import React from 'react'
import API from "../../utils/API"
import "./style.css"
import { toast } from "bulma-toast";
import { withRouter } from 'react-router-dom';

// convert to rfc

class SignUpPage extends React.Component {
    
    state = {
        username: null,
        password:null,
        first_name: null,
        last_name: null,
        email: null,
        vendor_name: null,
        vendor_email: null,
        vendor_phone: null,
        bus_lic: null,
 
        errors: {
            username: '',
            email: '',
            password: '',
            first_name: '',
            last_name: ''
        }
    }

    refreshPage = () => {
        window.location.reload(false);
    }
     

    handleInputChange = event => {
        const { name, value } = event.target;
        const errors = this.state.errors;
        const validEmailRegex = RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+.)+[^<>()[\].,;:\s@"]{2,})$/i);
        // const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

        // ==============================
        // CHECK ALL REQUIRED FIELDS AND
        // UPDATE ERROR MESSAGE IF VALUES
        // DO NOT MATCH REQUIREMENTS
        //===============================
        switch (name) {
            case 'username':
                errors.username = value.length < 5 ? 'Username must be at least 5 characters' : '';
                break;
            case 'email':
                errors.email = validEmailRegex.test(value) ? '' : 'Email is not valid';
                break;
            case 'password':
                errors.password = value.length < 8 ? 'Password must be at least 8 characters' : '';
                break;
            case 'first_name':
                errors.first_name = value.length <= 1 ? 'Please enter a first name' : '';
                break;
            case 'last_name':
                errors.last_name = value.length <= 1 ? 'Please enter a last name' : '';
                break;
            default:
                break;
        }

        this.setState({
            errors, [name]: value
        })
    }

    handleFormSubmit = event => {
        event.preventDefault();

        // ================================
        // CHECK FOR ERROR STRINGS IN STATE
        // ================================
        const validateForm = (errors) => {
            let valid = true;
            Object.values(errors).forEach(
                // if we have an error string set valid to false
                (val) => val.length > 0 && (valid = false)
            );
            return valid;
        }

        // =============================
        // IF FORM IS VALID, CREATE USER
        // =============================
        if (validateForm(this.state.errors)) {
            console.info('Valid Form')
            API.createUser(this.state).then(newUser => {
                if (newUser.status !== 200) {
                    // console.log(newUser.status)

                    // there was an error, notify user
                    toast({
                        message: "New account not created. Please check that you have completed all required fields and try again.",
                        type: "is-danger",
                        position: "bottom-center",
                        duration: 4000,
                        dismissible: true
                    });
                } else {
                    // console.log(this.state)
                    this.setState({
                        username: null,
                        password: null,
                        first_name: null,
                        last_name: null,
                        email: null,
                        vendor_name: null,
                        vendor_email: null,
                        vendor_phone: null,
                        bus_lic: null
                    })
                }
                
                this.props.history.push('/login');
            })
        } else {
            console.error('Invalid Form')
        }

    }
    render() {
        const { errors } = this.state;

        return (
            <div className="SignUpPage">
                <section className="hero is-bold">
                    <div className="hero-body color-change-3x">
                        <div className="container">
                            <h1 className="title">
                                Register as a User
                            </h1>

                        </div>
                    </div>
                </section>
                <div className="section signupSection">
                    <div className="container">
                        <div className="box formbox">



                            <div className="field">
                                <form>

                                    <div className="field">
                                        <label className="label">User Name:<span className="form-error">*</span></label>
                                        <div className="control">

                                            <input type="text is-hovered" className="input" onChange={this.handleInputChange} name="username" placeholder="username" />
                                            {errors.username.length > 0 && <span className='form-error'>{errors.username}</span>}
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label">Password:<span className="form-error">*</span></label>
                                        <div className="control">
                                            <input type="password is-hovered" className="input" onChange={this.handleInputChange} name="password" placeholder="password" />
                                            {errors.password.length > 0 && <span className='form-error'>{errors.password}</span>}

                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label">First Name:<span className="form-error">*</span></label>
                                        <div className="control">
                                            <input type="text is-hovered" className="input" onChange={this.handleInputChange} name="first_name" placeholder="first_name" />
                                            {errors.first_name.length > 0 && <span className='form-error'>{errors.first_name}</span>}

                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label">Last Name:<span className="form-error">*</span></label>
                                        <div className="control">
                                            <input type="text is-hovered" className="input" onChange={this.handleInputChange} name="last_name" placeholder="last_name" />
                                            {errors.last_name.length > 0 && <span className='form-error'>{errors.last_name}</span>}

                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label">Email:<span className="form-error">*</span></label>
                                        <div className="control">
                                            <input refs="email is-hovered" className="input" onChange={this.handleInputChange} name="email" placeholder="email" />
                                            {errors.email.length > 0 && <span className='form-error'>{errors.email}</span>}

                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label">Vendor Name:</label>
                                        <div className="control">
                                            <input type="text is-hovered" className="input" onChange={this.handleInputChange} name="vendor_name" placeholder="vendor_name" />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label">Vendor Email:</label>
                                        <div className="control">
                                            <input type="email is-hovered " className="input" onChange={this.handleInputChange} name="vendor_email" placeholder="vendor_email" />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label">Vendor Phone:</label>
                                        <div className="control">
                                            <input type="text is-hovered" className="input" onChange={this.handleInputChange} name="vendor_phone" placeholder="vendor_phone" />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label">Business License #</label>
                                        <div className="control">
                                            <input type="text is-hovered" className="input" onChange={this.handleInputChange} name="bus_lic" placeholder="business license" />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="control">
                                            <button className="button is-info" onClick={this.handleFormSubmit}>Submit</button>
                                        </div>
                                    </div>
                                    <span className='form-error'>* Required Field</span>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(SignUpPage);
