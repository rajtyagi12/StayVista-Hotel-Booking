function Footer(){
    return(
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h2>StayVista</h2>
                    <p>
                        Find your perfect stay and enjoy a comfortable
                        travel experience with StayVista.
                    </p>
                </div>

                <div className="footer-section">
                    <h3>Quick Links</h3>

                    <a href="/">Home</a>
                    <a href="hotels">Hotels</a>
                    <a href="about">About</a>
                    <a href="contact">Contact</a>
                </div>

                <div className="footer-section">
                    <h3>Contact</h3>

                    <p>📍 Delhi NCR, India</p>
                    <p>📧 support@stayvista.com</p>
                    <p>📞 +91 98765 43210</p>
                </div>

            </div>

            <div className="footer-bottom">
                <p>© 2026 StayVista. All rights reserved.</p>
            </div>

        </footer>        
    );
}
export default Footer;