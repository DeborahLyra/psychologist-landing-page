import { AboutMe } from "../components/aboutMe/AboutMe";
import { Banner } from "../components/Banner/Banner";
import { Books } from "../components/books/Books";
import { Navbar } from "../components/Navbar/Navbar";

export function HomePage() {
  return (
    <div className="h-screen">
      <Navbar/>
      <Banner/>
      <AboutMe/>
      <Books/>
    </div>
  )
}
