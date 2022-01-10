import { Container } from "../../components/atoms/container/container.component"
import { Button } from "../../components/atoms/button/button.container"
import { Header } from "../../components/molecules/Header.component"

export const HomePage = ()=>{
    return(
        <>
            <Header 
                image="/img/imgs/fondo.jpg" 
                title="Los Faroles Apart ILO" 
                description="Welcome to our wonderful world. We sincerely hope that each and every user entering our website will find exactly what he/she is looking for."
                />
        </>
    )
}