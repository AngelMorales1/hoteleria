import Image from "next/image"
import { Container } from "../../atoms/container/container.component"
import { Typography } from "../../atoms/typography/typography.component"


export const About = ({title,text,text2})=>{
    return(
        <div className="">
            <Container>
                <div className="flex lg:flex-row flex-col pb-[20px]">
                    <div className="xl:w-7/12 lg:w-6/12 w-full my-[20px]">
                        <Typography fontWeight="900" classProp="mini:text-[50px] text-[60px] md:text-[90px] xl:text-[114px]" color="#F4F4F4">{title}</Typography>
                        <div className="flex items-center space-x-[20px]">
                            <div className="h-fit"><Image className="self-center" src="/img/dots.png" width={21} height={9}/></div>
                            <Typography fontWeight="500" fontSize="40px" color="#123E61">{title}</Typography>
                        </div>
                        <div className="w-[100%] lg:max-w-[517px] max-w-[100%] space-y-[20px] mt-[30px] lg:mt-[0px]">
                            <Typography fontWeight="400" color="#404040" fontSize="14px" lineHeight="21px">{text}</Typography>
                            <Typography fontWeight="400" color="#A0A0A0" fontSize="12px" lineHeight="21px">{text2}</Typography>
                            <div className="flex items-center space-x-[22px] md:justify-start justify-center">
                                <Image src="/img/medal.png" width={54} height={54}/>
                                <Typography fontWeight="500" color="#5B5B5B" fontSize="20px" lineHeight="30px">Superanfitrión en airbnb</Typography>
                            </div>
                        </div>
                    </div>
                    <div className="xl:w-5/12 lg:w-6/12 w-full flex justify-center lg:justify-end">
                        <div className="rounded-[20px] overflow-hidden max-w-[430px] w-full h-full max-h-[337px]">
                            <Image src="/img/imgs/fondo.jpg" width={430} height={337}/>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}