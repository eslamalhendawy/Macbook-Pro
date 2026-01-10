import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"

gsap.registerPlugin(ScrollTrigger);

import { Navbar, Hero, ProductViewer } from "./components/index"


const App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <ProductViewer />
        </main>
    )
}

export default App
