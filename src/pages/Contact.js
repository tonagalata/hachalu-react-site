import React from 'react';

// const Contact = () => {

//     const formStyles = {
//         display: 'flex',
//         flexDirection: 'column',
//         margin: '40px'
//     }

//     return ( 
//     <>
//         <div className="contact-app">
//             <form style={formStyles} name="contact" method="POST" action="/contact">
//                 <input type="hidden" name="form-name" value="contact" />
//                 <input required type="text" name="name" placeholder="Your name" />
//                 <input required type="email" name="email" placeholder="Your Email" />
//                 <textarea required name="message" placeholder="Message" id="" cols="30" rows="10"></textarea>
//                 <div className="field">
//                     <div data-netlify-recaptcha="true"></div>
//                 </div>
//                 <button type="submit">Send You Message</button>

//             </form>
//         </div>
//     </>
//      );
// }

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.state = { name: "", email: "", message: "" };
    }

    /* Here’s the juicy bit for posting the form submission */

    handleSubmit = e => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...this.state })
      })
        .then(() => {
            alert("Success!")
            this.setState ({
                name: "",
                email: "",
                message: ""
    
            })
        })
        .catch(error => alert(error));

      e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
      const { name, email, message } = this.state;
      return (
          <>
          <h1 style={{marginTop: '2rem'}}>CONTACT US</h1>
        <form className="contact" onSubmit={this.handleSubmit}  name="contact" method="POST" action="/contact">
          <p>
            {/* <label>
              Your Name: 
            </label> */}
              <div className="input-field col s6">
                  <input id="icon_prefix" required type="text" name="name" value={name} onChange={this.handleChange} />
                  <label for="icon_prefix">Your Name</label>
              {/* <input required type="text" name="name" value={name} onChange={this.handleChange} /> */}
              </div>
          </p>
          <p>
            {/* <label>
              Your Email: 
            </label> */}
            <div className="input-field col s6">
            <input required type="email" name="email" value={email} onChange={this.handleChange}/>
            <label for="icon_email">Email</label>
            </div>
              {/* <input required type="email" name="email" value={email} onChange={this.handleChange} /> */}
          </p>
          <p>
            <label>
              Message: 
            </label>
              <textarea required name="message" value={message} onChange={this.handleChange} />
          </p>
          <div data-netlify-recaptcha="true"></div>
          <p>
            <button className="btn " type="submit">Send</button>
          </p>
        </form>
        </>
      );
    }
  }
 

export default Contact;