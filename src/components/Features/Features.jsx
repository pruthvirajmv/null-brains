import "./features.css";

import { featuresList } from "./featuresList";

export function Features() {
   return (
      <>
         <header className="features-header">
            <h1>Our Features</h1>
            <p className="text-grey">Check out our list of awesome features below</p>
         </header>
         <section className="features-container">
            {featuresList.map((feature) => (
               <div className="feature-card">
                  <div className="feature-card-icon">
                     <img src={feature.icon} alt="feature" />
                  </div>
                  <h2>{feature.name}</h2>
                  <p>{feature.descp}</p>
               </div>
            ))}
         </section>
      </>
   );
}
