import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {Skill} from "./layout/sections/skills/Skill.tsx";
import {Project} from "./layout/sections/projects/project/Project.tsx";
import {Contact} from "./layout/sections/contacts/Contact.tsx";
import {Footer} from "./layout/footer/Footer.tsx";
import {AboutWorkEducation} from "./layout/sections/aboutMe/AboutWorkEducation.tsx";
import {Testimony} from "./layout/sections/Testimony/Testimony.tsx";
import {Particle} from "./components/particle/Particle.tsx";
import {GoTopBtn} from "./components/goTopBtn/GoTopBtn.tsx";

function App() {
    return (
        <div className="App">
            <Particle/>
            <Header/>
            <Main/>
            <AboutWorkEducation/>
            <Skill/>
            <Project/>
            <Testimony/>
            <Contact/>
            <Footer/>
            <GoTopBtn/>
        </div>
    )
}

export default App
