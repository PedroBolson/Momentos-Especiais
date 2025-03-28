import "../css/Footer.css";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <div className="footer-divider"></div>
            <div className="footer-content">
                <p>© {currentYear} Pedro Bolson</p>
                <p className="love-message">Feito com muito amor ❤️</p>
            </div>
        </footer>
    );
}

export default Footer;