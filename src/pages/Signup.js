import React from 'react';
import '../App.css'

// const Signup = () => {
//     return ( 
//         <>
//         <div className="contact">
//             <h1>Sign Up</h1>
//             <form action="">
//                 <label for="fullname">Full Name</label>
//                 <input type="text" name="name" id="fullname" />
//                 <label for="email">Email</label>
//                 <input type="email" name="email" id="email" />
//                 <label for="comment">Comments</label>
//                 <textarea id="comment" />
//                 <button>Submit</button>
//             </form>
//         </div>
//         </>);
// }

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  class Signup extends React.Component {
    constructor(props) {
      super(props);
      this.state = { name: "", email: "" };
    }

    /* Here’s the juicy bit for posting the form submission */

    handleSubmit = e => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "sign-up", ...this.state })
      })
        .then(() => {
            alert("Successfully Signed up!")
            this.setState ({
                name: "",
                email: ""
            })
        })
        .catch(error => alert(error));

      e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
      const { name, email } = this.state;
      return (
          <>
          <h1 style={{marginTop: '2rem'}}>SIGN UP</h1>
        {/* <form className="contact" onSubmit={this.handleSubmit}  name="sign-up" method="POST" action="/sign-up">
          <p>
            <label>
              Your Name: 
            </label>
              <input required type="text" name="name" value={name} onChange={this.handleChange} />
          </p>
          <p>
            <label>
              Your Email: 
            </label>
              <input required type="email" name="email" value={email} onChange={this.handleChange} />
          </p>
          <div data-netlify-recaptcha="true"></div>
          <p>
            <button type="submit">SUBMIT</button>
          </p>
        </form> */}
          <div className="row container contact-row">
            <form className="col s12">
            <div className="row">
                <div className="input-field col s6">
                    <input name="name" id="icon_prefix" type="text" className="validate"  value={name} />
                    <label for="icon_prefix">Your Name</label>
                </div>
                <div className="input-field col s6">
                    <input name="email" id="icon_email" type="email" class="validate" value={email} />
                    <label for="icon_email">Email</label>
                </div>
                <button class="waves-effect waves-light btn">SUBMIT</button>
            </div>
            </form>
        </div>
        </>
      );
    }
  }
 
export default Signup;