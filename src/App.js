import { Route, Switch, Redirect } from "react-router-dom";
import Aidkit from "./components/Aidkit";
import Construction from "./components/Construction";
import Contact from "./components/Contact";
import DeepTrust from "./components/DeepTrust";
import DINStandards from "./components/DINStandards";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Main from "./components/Main";
import PageNotFound from "./components/PageNotFound";
import Resources from "./components/Resources";
import Services from "./components/Services";

function App() {

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -110; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

  return (
    <div className="App">
     <Main>
       <Switch>
         <Route exact path="/">
          <Home scrollWithOffset={scrollWithOffset}/>
         </Route>
         <Route  path="/aidkit">
           <Aidkit 
           scrollWithOffset={scrollWithOffset} />
         </Route>
         <Route path="/contact">
           <Contact 
           scrollWithOffset={scrollWithOffset}/>
         </Route>
         <Route path="/deeptrust">
           <DeepTrust 
           scrollWithOffset={scrollWithOffset}/>
         </Route>
         <Route path="/DINstandards">
           <DINStandards />
         </Route>
         <Route path="/resources">
           <Resources 
           scrollWithOffset={scrollWithOffset}/>
         </Route>
         <Route path="/services">
           <Services 
           scrollWithOffset={scrollWithOffset}/>
         </Route>
         <Route path="/construction">
           <Construction 
           scrollWithOffset={scrollWithOffset}/>
         </Route>
         <Route path="/pagenotfound" component={PageNotFound} />
         <Redirect to="/pagenotfound" />
       </Switch>
       <Footer/>
     </Main>
    </div>
  );
}

export default App;
