import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"

gsap.registerPlugin(ScrollTrigger);

import { Navbar, Hero, ProductViewer, Showcase } from "./components/index"


const App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <ProductViewer />
            <Showcase />
        </main>
    )
}

export default App
