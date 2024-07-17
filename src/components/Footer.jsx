import React from "react";
import "@/styles/footer.scss";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="_container">
        <div className="footer-top">
          <Link href="/">
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
            <h3><Link href="/services">Services</Link></h3>
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
                <Link href="#">Terms and Conditions</Link>
              </li>
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Refund Policy</Link>
              </li>
              <li>
                <Link href="#">Cookie Policy</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Contact us</h3>
            <ul>
              <li>The Modellist Limited</li>
              <li>167 - 169 Great Portland Street, <br/>5th Floor, London, England, W1W 5PF</li>
              <li>
                <Link href="mailto:info@modellistdigital.com">info@modellistdigital.com</Link>
              </li>
              <li>
                <Link href="tel:+442070433795">+442070433795</Link>
              </li>
            </ul>
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
