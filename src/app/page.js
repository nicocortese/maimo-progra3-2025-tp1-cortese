import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import HomeContainer from "@/app/components/HomeContainer";

export default function Home() {

  return ( // no es html, es jsx (html que acepta dentro JS) 
  <div>
    <Navbar title="Mi web"/>
    <HomeContainer />
    <Footer />
  </div>
  ); 
}