import React from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      {/* We can have all the router stuff directly in here or it in the nav
      component. *the way it was set up earlier had each page shown twice as
      there was a switch in here and then the nav component also was controlling
      a separate switch. The footer was cover the second instance of each page.
      No worries tho react router is confusing. */}
      <Footer />
    </div>
  );
}

export default App;
