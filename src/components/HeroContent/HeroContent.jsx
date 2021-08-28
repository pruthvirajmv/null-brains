import "./heroContent.css";

export function HeroContent() {
   return (
      <section className="heroContent-container">
         <header className="heroContent-head">
            <div className="heroContent-head-text">Start Crafting Your</div>
            <div className="text-primary">Next Great Idea</div>
         </header>
         <div className="heroContent-tagline text-grey">
            <p className="heroContent-tagline-text">
               Simplifying the creation of landing pages, blog pages,
            </p>
            <p>application pages and so much more!</p>
         </div>
         <div className="heroContent-actions">
            <button className="bttn-primary">
               Purchase Now <span className="badge">only $15/mo</span>
            </button>
            <p className="text-primary">Learn More</p>
         </div>
      </section>
   );
}
