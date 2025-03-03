import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {Skill} from "./layout/sections/skills/Skill.tsx";
import {Project} from "./layout/sections/projects/project/Project.tsx";
import {Contact} from "./layout/sections/contacts/Contact.tsx";
import {Footer} from "./layout/footer/Footer.tsx";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skill/>
            <Project/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default App
