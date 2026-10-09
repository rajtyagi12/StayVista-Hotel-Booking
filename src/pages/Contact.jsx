function Contact() {
  return (
    <div className="contact-page">

      {/* Contact Hero */}
      <div className="contact-hero">
        <h1>Contact StayVista</h1>
        <p>We'd love to hear from you.</p>
      </div>

      {/* Contact Content */}
      <div className="contact-content">

        {/* Contact Information */}
        <div className="contact-info">

          <h2>Get In Touch</h2>

          <p>
            Have a question about a hotel or your booking?
            Feel free to contact us.
          </p>

          <div className="contact-item">
            <span>📍</span>
            <div>
              <h3>Location</h3>
              <p>Delhi NCR, India</p>
            </div>
          </div>

          <div className="contact-item">
            <span>📧</span>
            <div>
              <h3>Email</h3>
              <p>support@stayvista.com</p>
            </div>
          </div>

          <div className="contact-item">
            <span>📞</span>
            <div>
              <h3>Phone</h3>
              <p>+91 98765 43210</p>
            </div>
          </div>

        </div>

        {/* Contact Form */}
        <div className="contact-form">

          <h2>Send Us a Message</h2>

          <form>

            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                placeholder="Write your message..."
                rows="5"
              ></textarea>
            </div>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Contact;