import React from 'react';

const Contact = () => {
    return ( 
    <>
        <div className="contact">
            <h1>Contact Us</h1>
            <form action="">
                <label for="fullname">Full Name</label>
                <input type="text" name="name" id="fullname" />
                <label for="email">Email</label>
                <input type="email" name="email" id="email" />
                <label for="comment">Comments</label>
                <textarea id="comment" />
                <button>Submit</button>
            </form>
        </div>
    </>
     );
}
 
export default Contact;