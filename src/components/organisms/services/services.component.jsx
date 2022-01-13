import { IconCard } from "../../molecules/iconCard/iconCard.component"
import {faBuilding} from '@fortawesome/free-regular-svg-icons'
import { Container } from "../../atoms/container/container.component"
import { Typography } from "../../atoms/typography/typography.component"

export const Services = ()=>{
    return(
        <> 
            <Container>
                <div className="flex flex-col text-center py-[80px] space-y-[50px]">
                    <div className="relative">
                        <Typography classProp="text-[32px] xs:text-[40px] relative z-10" fontWeight="500" color="#123E61">Servicios</Typography>
                        <Typography classProp="text-[50px] mini:text-[60px] xs:text-[80px] absolute top-[-15px] left-[0] right-[0] top-[0] ml-auto mr-auto" color="#F4F4F4" fontWeight="900">Servicios</Typography>
                    </div>
                    <div className="flex flex-wrap py-[30px] space-y-[53px] lg:flex-nowrap lg:space-y-0 lg:space-x-[53px]">
                        <IconCard icon={faBuilding} text="Our business center offers two well-appointed meeting rooms and a privately equipped office." title="Precios Corporativos"/>
                        <IconCard icon={faBuilding} text="Our business center offers two well-appointed meeting rooms and a privately equipped office." title="Restaurant"/>
                        <IconCard icon={faBuilding} text="Our business center offers two well-appointed meeting rooms and a privately equipped office." title="Lavandería"/>
                        <IconCard icon={faBuilding} text="Our business center offers two well-appointed meeting rooms and a privately equipped office." title="WiFi"/>
                    </div>
                </div>

            </Container>
        </>
    )
}
