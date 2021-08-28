import "./team.css";

import { teamList } from "./teamList";

export function Team() {
   return (
      <div className="team-component">
         <div className="team-header-mark"></div>
         <section className="team-container">
            <header className="team-head">
               <p className="text-primary">OUR TEAM</p>
               <div className="team-head-tagline">
                  <p>An incredible team of </p>
                  <p>amazing individuals</p>
               </div>
            </header>

            <section className="members-container">
               {teamList.map((member) => (
                  <div key={member.name} className="member-card">
                     <div
                        className="member-profile"
                        style={{ backgroundColor: member.backgroundColor }}>
                        <img src={member.profilePic} alt={member.name} />
                     </div>
                     <div className="member-name">{member.name}</div>
                     <div className="member-role "> {member.role} </div>
                     <div className="member-handles">
                        <a href={member.twitter}>
                           <i className="fab fa-twitter"></i>
                        </a>
                        <a href={member.github}>
                           <i className="fab fa-github"></i>
                        </a>
                     </div>
                  </div>
               ))}
            </section>
         </section>
      </div>
   );
}
