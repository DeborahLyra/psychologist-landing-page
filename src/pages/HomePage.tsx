import { AboutMe } from "../components/aboutMe/AboutMe";
import { Banner } from "../components/Banner/Banner";
import { Navbar } from "../components/Navbar/Navbar";

export function HomePage() {
  return (
    <div className="bg-offWhite h-screen">
      <Navbar/>
      <Banner/>
      <AboutMe/>
    </div>
  )
}
