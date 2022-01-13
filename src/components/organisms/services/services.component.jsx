import { IconCard } from "../../molecules/iconCard/iconCard.component"
import {faBuilding} from '@fortawesome/free-regular-svg-icons'
import { Container } from "../../atoms/container/container.component"
import { Typography } from "../../atoms/typography/typography.component"

export const Services = ()=>{
    return(
        <> 
            <Container>
                <div className="flex flex-col text-center py-[80px] space-y-[50px]">
                <Typography classProp="text-[32px] xs:text-[40px]" fontWeight="500" color="#123E61">Servicios</Typography>
                    <div className="flex space-x-[53px]">
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