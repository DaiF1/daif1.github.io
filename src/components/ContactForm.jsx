import React from 'react'

import './ContactForm.css'

class ContactForm extends React.Component
{
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            message: "",
        }
    }

    render() {
        return (
        <>
            <div>Contact Me!</div>
            <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail">Email Address</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" rows="5"></textarea>
                </div>
                <button type="submit" className="btn">Submit</button>
            </form>
        </>
        )
    }

    onNameChange(event) {
        this.setState({name: event.target.value})
    }

    onEmailChange(event) {
        this.setState({email: event.target.value})
    }

    onMessageChange(event) {
        this.setState({message: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("message sent");
    }
}

export default ContactForm;