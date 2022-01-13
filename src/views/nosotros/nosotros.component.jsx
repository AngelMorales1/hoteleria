import { Container } from "../../components/atoms/container/container.component"
import { About } from "../../components/organisms/about/about.component"
import { Header } from "../../components/organisms/Header/Header.component"

export const Nosotros = ()=>{
    return (
      <>
        <Header
          title="Nosotros"
          variant={1}
          image="/img/imgs/fondo.jpg"
        ></Header>
        <Container>
          <About
            
            title1="Nosotros"
            title2="¿Quienes Somos?"
            text="Una familia Ileña emprendedora que hemos apostado en contribuir por el desarrollo de nuestra provincial de Ilo, que año tras año el negocio ha venido creciendo y expandiendo sus servicios con el único fin de satisfacer las necesidades de nuestros clientes empresariales y turismo."
            text2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            variant={2}
          />
        </Container>
      </>
    );
}