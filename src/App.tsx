import Header from './components/Header'
import Hero from './components/Hero';
import ScrollAboutUs from './components/ScrollAboutUs';
import Welcome from './components/Welcome';
import Divider from './components/Divider';
import OurStory from './components/OurStory';
import OurGoal from './components/OurGoal';
import OurClients from './components/OurClients';
import Footer from './components/Footer';
import States from './components/States';
import Owner from './components/Owner';


function App() {


  return (
    <div>
      <Header />
      <Hero />

      
      <ScrollAboutUs />

      <Welcome />

      <Divider />
      <OurStory />
      
      <Divider />
      <OurGoal />
      
      <States />
      <Divider />

      <Owner />
      <Divider />

      <OurClients />

      <Footer />
    </div>
  )
}

export default App;
