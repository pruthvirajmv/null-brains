import "./footer.css";

export function Footer() {
   return (
      <footer className="app-footer">
         <ul className="footer-nav-list">
            <li>About</li>
            <li>Blog</li>
            <li>Team</li>
            <li>Pricing</li>
            <li>Contact</li>
            <li>Terms</li>
         </ul>
         <ul className="social-handles-list">
            <li>
               <i className="fab fa-facebook"></i>
            </li>
            <li>
               <i className="fab fa-instagram"></i>
            </li>
            <li>
               <i className="fab fa-twitter"></i>
            </li>
            <li>
               <i className="fab fa-github"></i>
            </li>
            <li>
               <i className="fas fa-globe"></i>
            </li>
         </ul>
         <p> © 2021 SomeCompany, Inc. All rights reserved </p>
      </footer>
   );
}
