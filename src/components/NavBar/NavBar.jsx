import "./navBar.css";

export function NavBar() {
   return (
      <nav className="nav-container ">
         <div className="app-name">nullBrains</div>
         <div className="nav-pages">
            <div className="active">Home</div>
            <div>Features</div>
            <div>Blog</div>
            <div>Contact</div>
            <div>
               <i className="fas fa-search"></i>
            </div>
         </div>
         <div className="nav-signing">
            <button className="bttn-secondary">Sign In</button>
            <button className="bttn-primary">Sign Up</button>
         </div>
      </nav>
   );
}
