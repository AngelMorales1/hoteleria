import { Footer } from "../organisms/Footer/Footer.component" 
import { Navbar } from "../organisms/Navbar/Navbar.component"

export const Template = ({children})=>{
    return (
        <div>
            <Navbar/>
                {children}
            <Footer/>
        </div>
    )
  }