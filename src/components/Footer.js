import React from "react";
import './stylesheets/Footer.css'

function Footer() {
    return (
        <div className="footer-div">
            <div className="message">
                <p className="lets-connect">
                    Let's connect!
                </p>
                <div className="social-icons">
                    <a className="social"
                        href="mailto:anuraghit317@gmail.com"
                        target="_blank">
                        <img src="https://gistcdn.githack.com/anurag-ux/b0e4c910c99616e195b4d56dfe15b379/raw/c1df4f7d667972088411609a8874abdaaaf3dea5/gmail.svg" />
                    </a>
                    <a className="social"
                        href="https://wa.me/919304117405"
                        target="_blank">
                        <img src="https://gistcdn.githack.com/anurag-ux/3afb2202c9b73d0d260546d910926ec3/raw/f3ffdfbda608d943bb5e0871551c8d05a4501764/gmail.svg" />
                    </a>
                    <a className="social"
                        href="https://www.linkedin.com/in/anuragshandilya31/"
                        target="_blank">
                        <img src="https://gistcdn.githack.com/anurag-ux/e58b004ad5198ca7e9fe5fa59409b811/raw/9138870bd6d606381f0968272692833e1f6df053/linkedin.svg" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;