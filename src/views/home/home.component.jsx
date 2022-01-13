import Image from "next/image"
import { Container } from "../../components/atoms/container/container.component"
import { Typography } from "../../components/atoms/typography/typography.component"
import { About } from "../../components/organisms/about/about.component"
import { Header } from "../../components/organisms/Header/Header.component"
import { Services } from "../../components/organisms/services/services.component"

export const HomePage = ()=>{

    return(
        <div>
            <Header 
            image="/img/imgs/fondo.jpg" 
            title="Los Faroles Apart ILO" 
            description="Welcome to our wonderful world. We sincerely hope that each and every user entering our website will find exactly what he/she is looking for."
            />
            <About 
                title1="Nosotros"
                title2="¿Quienes Somos?"
                text="Una familia Ileña emprendedora que hemos apostado en contribuir por el desarrollo de nuestra provincial de Ilo, que año tras año el negocio ha venido creciendo y expandiendo sus servicios con el único fin de satisfacer las necesidades de nuestros clientes empresariales y turismo."
                text2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                variant={1}
            ></About>

            <Services/>

           <Container>

                <div className="flex flex-col text-center py-[80px]">
                    <div className="relative">
                        <Typography classProp="text-[32px] xs:text-[40px] relative z-10" fontWeight="500" color="#123E61">Oferta</Typography>
                        <Typography classProp="text-[50px] mini:text-[60px] xs:text-[80px] absolute top-[-15px] left-[0] right-[0] top-[0] ml-auto mr-auto" color="#F4F4F4" fontWeight="900">Oferta</Typography>
                    </div>
                    <div className="pt-[50px] grid lg:grid-cols-2 lg:gid-rows-2 lg:gap-3 grid-cols-1 grid-rows-1 gap-[30px]">
                       <div className="h-min">
                            <Image className="rounded-xl" src="/img/imgs/fondo.jpg" alt='fondo hotel' width={700} height={700} objectFit="cover"/>
                       </div>

                       <div className="rounded-xl bg-[#F8F7F4] p-[52px] text-left row-start-1 md:row-start-2">
                            <div className="flex items-baseline space-x-[10px]">
                                <Typography classProp="text-[30px] xs:text-[40px]" fontWeight="500" color="#123E61">Hotel</Typography>
                                <div className="h-fit"><Image className="self-center" src="/img/dots.png" width={21} height={9}/></div>
                            </div>
                            
                            <Typography classProp="mt-[16px]" fontWeight="400" color="#404040" fontSize="14px" lineHeight="24px">
                            Una familia Ileña emprendedora que hemos apostado en contribuir por el desarrollo de nuestra provincial de Ilo, que año tras año el negocio ha venido creciendo y expandiendo sus servicios con el único fin de satisfacer las necesidades de nuestros clientes empresariales y turismo.
                            </Typography>

                            <div className="mt-[50px] px-5">
                                <ul className="list-disc">
                                    <li><Typography fontWeight="400" color="#A0A0A0" fontSize="12px" lineHeight="24px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography></li>
                                    <li><Typography fontWeight="400" color="#A0A0A0" fontSize="12px" lineHeight="24px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography></li>
                                    <li><Typography fontWeight="400" color="#A0A0A0" fontSize="12px" lineHeight="24px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography></li>
                                </ul>
                            </div>
                            
                        </div>

                       <div className="rounded-xl bg-[#F8F7F4] p-[52px] text-left ">
                            <div className="flex items-baseline space-x-[10px]">
                                <Typography classProp="text-[30px] xs:text-[40px]" fontWeight="500" color="#123E61">Departamento</Typography>
                                <div className="h-fit"><Image className="self-center" src="/img/dots.png" width={21} height={9}/></div>
                            </div>
                            
                            <Typography classProp="mt-[16px]" fontWeight="400" color="#404040" fontSize="14px" lineHeight="24px">
                            Una familia Ileña emprendedora que hemos apostado en contribuir por el desarrollo de nuestra provincial de Ilo, que año tras año el negocio ha venido creciendo y expandiendo sus servicios con el único fin de satisfacer las necesidades de nuestros clientes empresariales y turismo.
                            </Typography>

                            <div className="mt-[50px] px-5">
                                <ul className="list-disc">
                                    <li><Typography fontWeight="400" color="#A0A0A0" fontSize="12px" lineHeight="24px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography></li>
                                    <li><Typography fontWeight="400" color="#A0A0A0" fontSize="12px" lineHeight="24px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography></li>
                                    <li><Typography fontWeight="400" color="#A0A0A0" fontSize="12px" lineHeight="24px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography></li>
                                </ul>
                            </div>
                            
                        </div>

                       <div className="h-min">
                            <Image className="rounded-xl" src="/img/imgs/fondo.jpg" alt='fondo hotel' width={700} height={700} objectFit="cover"/>
                       </div>
                    </div>
                </div>

                <div className="flex flex-col text-center py-[80px] space-y-[50px] hidden md:block">
                    <div className="relative">
                        <Typography classProp="text-[32px] xs:text-[40px] relative z-10" fontWeight="500" color="#123E61">Galeria</Typography>
                        <Typography classProp="text-[50px] mini:text-[60px] xs:text-[80px] absolute top-[-15px] left-[0] right-[0] top-[0] ml-auto mr-auto" color="#F4F4F4" fontWeight="900">Galeria</Typography>
                    </div>
                    <div className="py-[30px] grid grid-cols-2 gap-[20px] grid-rows-2 lg:grid-cols-4 lg:grid-rows-1">
                        <Image className="rounded-xl hidden lg:block" src="/img/imgs/fondo.jpg" alt='fondo hotel' width={290} height={290} objectFit="cover"/>
                        <Image className="rounded-xl" src="/img/imgs/fondo.jpg" alt='fondo hotel' width={290} height={290} objectFit="cover"/>
                        <Image className="rounded-xl" src="/img/imgs/fondo.jpg" alt='fondo hotel' width={290} height={290} objectFit="cover"/>
                        <Image className="rounded-xl" src="/img/imgs/fondo.jpg" alt='fondo hotel' width={290} height={290} objectFit="cover"/>
                    </div>
                </div>
                
           </Container>

        </div>
    )
}