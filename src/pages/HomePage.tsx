import { AboutMe } from "../components/aboutMe/AboutMe";
import { Banner } from "../components/Banner/Banner";
import { Books } from "../components/books/Books";
import { Contact } from "../components/contact/Contact";
import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/footer/Footer"

export function HomePage() {
  return (
    <div className="h-screen">
      <Navbar />
      <Banner />
      <AboutMe />
      <Books />
      <Contact />
      <Footer />
    </div>
  )
}
