import React from "react";
import "@/styles/footer.scss";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="_container">
        <div className="footer-top">
          <Link href="/" className="logo">
            <img src="/images/footer/logo_white.svg" alt="logo_white" />
          </Link>
        </div>

        <div className="footer-navs">
          <div>
            <h3>Company</h3>
            <ul>
              <li>
                <Link href="/work">Work</Link>
              </li>
              <li>
                <Link href="/team">Team</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>
              <Link href="/services">Services</Link>
            </h3>
            <ul>
              <li>
                <Link href="/services/video-production">Video production</Link>
              </li>
              <li>
                <Link href="/services/3d-modeling">3D modelling</Link>
              </li>
              <li>
                <Link href="/services/ux-ui-design">UX/UI design</Link>
              </li>
              <li>
                <Link href="/services/animations">Animations</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Legal</h3>
            <ul>
              <li>
                <Link href="/terms-and-conditions">Terms and Conditions</Link>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/refund-policy">Refund Policy</Link>
              </li>
              <li>
                <Link href="/cookie-policy">Cookie Policy</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Contact us</h3>
            <ul>
              <li>The Modellist Limited</li>
              <li>
                <Link href="mailto:info@modellistdigital.com">
                  info@modellistdigital.com
                </Link>
              </li>
              <li>
                <Link href="tel:+442070433795">+442070433795</Link>
              </li>
              <li>
                Office address: 2 Eastbourne Terrace, London W2 6LG, United
                Kingdom
              </li>
              <li>
                Registered address: 167 - 169 Great Portland Street, 5th Floor,
                London, W1W 5PF, United Kingdom
              </li>
            </ul>
          </div>
          <div className="soc">
            <Link
              href="https://www.facebook.com/Modellistcom/"
              target="_blank"
            >
              <img src="/images/footer/fb.svg" />
            </Link>
            <Link
              href="https://www.instagram.com/modellistdigital/"
              target="_blank"
            >
              <img src="/images/footer/inst.svg" />
            </Link>
            <Link href="https://x.com/modellistdigit" target="_blank">
              <img src="/images/footer/x.svg" />
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          © {currentYear} The Modellist Limited. Professional production
          company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
