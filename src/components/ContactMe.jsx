
import React from 'react'

const ContactMe = () => {
  return (
    <>
      <h2 className="headingTwo text-center">Contact Me</h2>

      <div className="container w-50 my-4 p-4 shadow rounded">
        <form>
          <div className="mb-3">
            <label className="form-label">Your Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Your Message</label>
            <textarea
              className="form-control"
              rows="4"
              placeholder="Write your message"
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Send Message
          </button>
        </form>
      </div>
    </>
  )
}

export default ContactMe
