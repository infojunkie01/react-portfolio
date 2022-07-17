import React from 'react';

function Contact() {
  return (
    <section>
      <h2 id="about" className="d-flex justify-content-center ">Contact me</h2>
      <form id="contact-form" className='form'>
        <div>
          <label htmlFor="name">Name:</label>
          <input className='mx-1' type="text" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input className='mx-1' type="email" name="email" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" className='mx-1' rows="5"  />
        </div>
        <button data-testid="button" type="submit">Submit</button>
      </form>
    </section>
  );
}
export default Contact;
