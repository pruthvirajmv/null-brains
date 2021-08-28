import "./trustedBy.css";

import disneyPlus from "./assets/disney_plus.png";
import google from "./assets/google.png";
import hubspot from "./assets/hubspot.png";
import shopify from "./assets/shopify.png";
import slack from "./assets/slack.png";
import youtube from "./assets/youtube.png";

const trustedBy = [disneyPlus, google, hubspot, youtube, slack, shopify];

export function TrustedBy() {
   return (
      <section className="trustedBy-container">
         <p>TRUSTED BY TOP-LEADING COMPANIES</p>
         <div className="logo-container">
            {trustedBy.map((company) => (
               <img key={company} src={company} alt="disney_plus" className="logo" />
            ))}
         </div>
      </section>
   );
}
