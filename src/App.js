import { Route, Switch } from "react-router";
import Aidkit from "./components/Aidkit";
import Construction from "./components/Construction";
import Contact from "./components/Contact";
import DeepTrust from "./components/DeepTrust";
import DINStandards from "./components/DINStandards";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Main from "./components/Main";
import Resources from "./components/Resources";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
     <Main>
       <Switch>
         <Route exact path="/">
          <Home />
         </Route>
         <Route  path="/aidkit">
           <Aidkit  />
         </Route>
         <Route path="/contact">
           <Contact />
         </Route>
         <Route path="/deeptrust">
           <DeepTrust />
         </Route>
         <Route path="DINstandards">
           <DINStandards />
         </Route>
         <Route path="/resources">
           <Resources />
         </Route>
         <Route path="/services">
           <Services />
         </Route>
         <Route path="/construction">
           <Construction />
         </Route>
       </Switch>
       <Footer/>
     </Main>
    </div>
  );
}

export default App;
