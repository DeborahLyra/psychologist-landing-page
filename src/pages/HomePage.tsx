import { AboutMe } from "../components/aboutMe/AboutMe";
import { Banner } from "../components/Banner/Banner";
import { Books } from "../components/books/Books";
import { Contact } from "../components/contact/Contact";
import { Footer } from "../components/footer/Footer";
import { Navbar } from "../components/Navbar/Navbar";


export function HomePage() {
  return (
    <div className="h-screen">
      <Navbar />
      <Banner />
      <AboutMe />
      <Books />
      <Contact />
      <Footer/>
    </div>
  )
}
