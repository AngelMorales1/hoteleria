import { Footer } from "../organisms/Footer.component"
import { Navbar } from "../organisms/Navbar.component"

export const Template = ({children})=>{
    return (
        <div>
            <Navbar/>
                {children}
            <Footer/>
        </div>
    )
  }