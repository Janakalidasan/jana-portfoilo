import Profile from "./Portfoliocontainer/Home/Profile";
import Header from "./Portfoliocontainer/Header/Header";
import About from "./Portfoliocontainer/Aboutme/About";
import Resume from "./Portfoliocontainer/Resume/Resume";
import Contact  from "./Portfoliocontainer/Contactme/Contact";
import Footer from "./Portfoliocontainer/Footer/Footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <About />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
