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
            <img src="/images/footer/logo_white.svg" />
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
                <Link href="#">Team</Link>
              </li>
              <li>
                <Link href="#">Blog</Link>
              </li>
              <li>
                <Link href="#">Contact us</Link>
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
              <li>Office address</li>
              <li>Registered address</li>
              <li>
                <Link href="#">Email</Link>
              </li>
              <li>
                <Link href="#">Phone</Link>
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
