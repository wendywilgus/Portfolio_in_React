import React from 'react';
import Header from '../components/Header';



function Contact() {
    return (
      <div>
        <Header />
        <div className='container contact'>
        <div className='row'>
          <div className='col-md-6'></div>
          <div className='col-md-6'>
            <div className='contact-form m-3 p-5 n-box2'>
              <h3 className='font-bold'>Contact Me</h3>
              <hr />

              <input type="text" className='form-control' placeholder='Name' />
              <input type="text" className='form-control' placeholder='Email' />
              <textarea className='form-control' placeholder='Message' />
              <br />
              <button className='primary-button '>Submit</button>
            </div>
          </div>
        </div>
        </div>
        
      </div>
    );
  }
  
  export default Contact;