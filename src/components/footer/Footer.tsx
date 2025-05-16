import "./footer.css";
import linkedInIcon from "../../assets/icon-linkedIn.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="copyright">
                    &copy; 2025 Idle Spin. All right reserved.
                </p>

                <div className="social-buttons">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <img src={linkedInIcon} alt="링크드인"/>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;