import "./productOverview.css";

import boostProductivity from "./assets/boost-productivity.png";
import automatedTasks from "./assets/automated-tasks.png";
import bullet from "./assets/bullet.png";

export function ProductOverview() {
   return (
      <div className="productOverview-container">
         <section className="productOverview-section">
            <div>
               <img
                  className="productOverview-section-img"
                  src={boostProductivity}
                  alt="boost productivity"
               />
            </div>
            <div>
               <h2>Boost Productivity</h2>
               <p>
                  Build an atmosphere that creates productivity in your organisation and your
                  company culture
               </p>
               <ul>
                  <li className="list-item">
                     <img className="img-bullet" src={bullet} alt="bullet" />
                     <div className="list-item-text">Maximize productivity and growth</div>
                  </li>
                  <li className="list-item">
                     <img className="img-bullet" src={bullet} alt="bullet" />
                     <div className="list-item-text">Speed past your competition</div>
                  </li>
                  <li className="list-item">
                     <img className="img-bullet" src={bullet} alt="bullet" />
                     <div className="list-item-text">Learn the top techniques </div>
                  </li>
               </ul>
            </div>
         </section>

         <section className="productOverview-section">
            <div>
               <h2>Automated Tasks</h2>
               <p>
                  Save time and money with our revolutionary services. We are the leaders in the
                  industry.
               </p>
               <ul>
                  <li className="list-item">
                     <img className="img-bullet" src={bullet} alt="bullet" />
                     <div className="list-item-text">Automated task management workflow</div>
                  </li>
                  <li className="list-item">
                     <img className="img-bullet" src={bullet} alt="bullet" />
                     <div className="list-item-text">Detailed analytics for your data</div>
                  </li>
                  <li className="list-item">
                     <img className="img-bullet" src={bullet} alt="bullet" />
                     <div className="list-item-text">Some awesome integrations</div>
                  </li>
               </ul>
            </div>
            <div>
               <img
                  className="productOverview-section-img"
                  src={automatedTasks}
                  alt="automated tasks"
               />
            </div>
         </section>
      </div>
   );
}
