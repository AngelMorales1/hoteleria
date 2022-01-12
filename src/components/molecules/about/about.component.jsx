import PropTypes from 'prop-types'
import Image from "next/image"
import { Container } from "../../atoms/container/container.component"
import { Typography } from "../../atoms/typography/typography.component"
import { Button } from '../../atoms/button/button.container'


export const About = ({title1, title2,text,text2,variant})=>{
    return(
        <>
            {variant === 1 ?
                <div>
                    <Container>
                        <div className="flex lg:flex-row flex-col pb-[20px]">
                            <div className="xl:w-7/12 lg:w-6/12 w-full mb-[20px] relative">
                                <Typography fontWeight="900" lineHeight="60px" classProp="text-[45px] mini:text-[60px] xs:text-[75px] md:text-[90px] xl:text-[114px]" color="#F4F4F4">{title1}</Typography>
                                <div className="flex items-center space-x-[20px] mb-[30px]">
                                    <div className="h-fit"><Image className="self-center" src="/img/dots.png" width={21} height={9}/></div>
                                    <Typography classProp="text-[32px] xs:text-[40px]" fontWeight="500" color="#123E61">{title2}</Typography>
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
                                <div className="rounded-[20px] overflow-hidden ml-[0] md:ml-[50px] max-w-[500px] max-h-[391px] xl:max-w-[430px] w-full h-full xl:max-h-[337px]">
                                    <Image className="rounded-[20px]" src="/img/imgs/fondo.jpg" width={500} height={391}/>
                                </div>
                            </div>
                            <div className="absolute right-[25%] top-[40%] hidden xl:block rounded-[20px] overflow-hidden max-w-[400px] w-full h-full max-h-[268px]">
                                <Image src="/img/imgs/fondo.jpg" width={400} height={268}/>
                            </div>
                        </div>
                    </Container>
                </div>:
                <div>
                    <Container>
                        <div className="flex lg:flex-row flex-col-reverse pb-[20px] lg:space-x-[68px] relative">
                            <div className="absolute top-[100px] hidden lg:block rounded-[20px] overflow-hidden max-w-[336px] max-h-[263px] w-full h-full">
                                <Image className="rounded-[20px]" src="/img/imgs/fondo.jpg" width={336} height={263}/>
                            </div>
                            <div className="lg:w-6/12 w-full flex justify-center lg:justify-end">
                                <div className="rounded-[20px] overflow-hidden max-w-[423px] max-h-[454px] w-full h-full">
                                    <Image className="rounded-[20px]" src="/img/imgs/fondo.jpg" width={423} height={454}/>
                                </div>
                            </div>
                            <div className="lg:w-6/12 w-full mb-[20px] relative">
                                <Typography fontWeight="900" lineHeight="60px" classProp="text-[45px] mini:text-[60px] xs:text-[75px] md:text-[90px] xl:text-[104px]" color="#F4F4F4">{title1}</Typography>
                                <div className="flex items-center space-x-[20px] mb-[10px]">
                                    <div className="h-fit"><Image className="self-center" src="/img/dots.png" width={21} height={9}/></div>
                                    <Typography classProp="text-[32px] xs:text-[40px]" fontWeight="500" color="#123E61">{title2}</Typography>
                                </div>
                                <div className="w-[100%] lg:max-w-[517px] max-w-[100%] space-y-[20px]">
                                    <Typography fontWeight="400" color="#404040" fontSize="14px" lineHeight="21px">{text}</Typography>
                                    <Typography fontWeight="400" color="#A0A0A0" fontSize="12px" lineHeight="21px">{text2}</Typography>
                                    <div className="flex items-center space-x-[22px] md:justify-start justify-center">
                                        <Image src="/img/medal.png" width={54} height={54}/>
                                        <Typography fontWeight="500" color="#5B5B5B" fontSize="20px" lineHeight="30px">Superanfitrión en airbnb</Typography>
                                    </div>
                                    <div className="pt-[10px] w-full md:w-[163px]">
                                        <Button background='#123E61' color='white'>CONTACTO</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            }
        </>
    )
}

About.propTypes={
    title1: PropTypes.string,
    title2: PropTypes.string,
    text: PropTypes.string,
    text2: PropTypes.string,
    variant: PropTypes.string
}

About.defaultProps={
    title1: "",
    title2: "",
    text:"",
    text2: "",
    variant: "1"
}