import React from "react";
import './stylesheets/Footer.css'

function Footer() {
    return (
        <div id="connect" className="footer-div">
            <div className="message">
                <p className="lets-connect">
                    Let's connect!
                </p>
                <div className="social-icons">
                    <a className="social"
                        href="mailto:anuraghit317@gmail.com"
                        target="_blank"
                        rel="noreferrer">
                        <img alt="gmail" src="https://gistcdn.githack.com/anurag-ux/b0e4c910c99616e195b4d56dfe15b379/raw/c1df4f7d667972088411609a8874abdaaaf3dea5/gmail.svg" />
                    </a>
                    <a className="social"
                    rel="noreferrer"
                        href="https://wa.me/919304117405"
                        target="_blank">
                        <img alt="whatsapp" src="https://gistcdn.githack.com/anurag-ux/3afb2202c9b73d0d260546d910926ec3/raw/f3ffdfbda608d943bb5e0871551c8d05a4501764/gmail.svg" />
                    </a>
                    <a className="social"
                    rel="noreferrer"
                        href="https://www.linkedin.com/in/anuragshandilya31/"
                        target="_blank">
                        <img alt="linkedin" src="https://gistcdn.githack.com/anurag-ux/e58b004ad5198ca7e9fe5fa59409b811/raw/9138870bd6d606381f0968272692833e1f6df053/linkedin.svg" />
                    </a>
                    <a className="social"
                    rel="noreferrer"
                        href="https://twitter.com/anurag__3107/"
                        target="_blank">
                        <img alt="twitter" src="https://gistcdn.githack.com/anurag-ux/629ae18cb7b054e649cc63f1ff630f53/raw/5af9ebf870eb3cc626c7ec1519c1538a6dff0094/twitter.svg" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer; 