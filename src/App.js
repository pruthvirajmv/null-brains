import "./App.css";
import {
   Blog,
   Features,
   Footer,
   HeroContent,
   NavBar,
   ProductOverview,
   Team,
   TrustedBy,
} from "./components";

function App() {
   return (
      <div className="App">
         <NavBar />
         <HeroContent />
         <TrustedBy />
         <ProductOverview />
         <Features />
         <Team />
         <Blog />
         <Footer />
      </div>
   );
}

export default App;
