import PropTypes from 'prop-types'
import Image from 'next/image';
import { Container } from '../../atoms/container/container.component'; 
import { Typography } from '../../atoms/typography/typography.component'; 
import { Button } from '../../atoms/button/button.container'; 
import { TextField } from '../../atoms/textfield/textfield.component';

export const Header = ({variant,title,description,image})=>{
    return(
        <>
            {variant===1 ?
                <section className="w-full rounded-b-Xlarge h-[500px] relative">
                    <Image className='rounded-b-Xlarge' src={image} layout='fill' objectFit='cover'/>
                    <Container>
                        <div className="absolute top-[190px]">
                            <Typography fontWeight="800" color="white" classProp="text-[60px] md:text-[80px]">{title}</Typography>
                        </div>
                    </Container>
                </section>
            :
            <section className="w-full rounded-none md:rounded-b-Xlarge h-[700px] md:h-[930px] relative overflow-visible lg:overflow-hidden  mb-[300px] mini:mb-[250px] sm:mb-[200px] md:mb-[300px] lg:mb-[50px]">
                <Image src={image} layout='fill' objectFit='cover'/>
                <div className="absolute w-full space-y-[60px] md:space-y-[168px] left-[0px] top-[100px] md:top-[170px]">
                    <div className="text-center space-y-[30px]">
                        <Typography fontWeight="800" color="white" classProp="text-[60px] md:text-[80px]">
                            {title}
                        </Typography>
                        <div className="text-left px-[16px] mx-auto xl:w-[880px]">
                            <Typography fontWeight="400" color="white" classProp="text-[16px] md:text-[24px]">
                                {description}
                            </Typography>
                        </div>
                        <Button background='#FFFFFF'color='#123E61' classProp="w-[200px] md:w-[160px]">EMPRESA</Button>
                    </div>
                    <Container>
                        <div className="w-[100%] max-w-[1520px] rounded-[40px] py-[15px] space-y-[15px] px-[40px] bg-[#ffffff] text-center shadow-[0_0_15px_rgba(0,0,0,0.3)] lg:shadow-none">
                            <Typography fontWeight="500" color='#123E61'>Comprobar Disponibilidad</Typography>
                            <div className="flex flex-col lg:flex-row justify-between space-y-[14px] lg:space-y-[0] lg:space-x-[20px] py-[15px] w-full border-t-[1px] border-slate-200 pb-[20px]">
                                <TextField classProp="px-[40px] py-[17px]" label='Fecha de llegada' placeholder='Octubre 11, 2021'></TextField>
                                <TextField classProp="px-[40px] py-[17px]" label='Fecha de Salida' placeholder='Octubre 20, 2021'></TextField>
                                <TextField classProp="px-[40px] py-[17px] bg-white" select={true} options={["Departamento"]} label='Tipo de Servicio' placeholder='Departamento'></TextField>
                                <Button background='#BFA58A'color='#FFFFFF' classProp="h-[55px] self-end">REVISAR</Button>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>
            }
        </>
    )
}

Header.propTypes={
    variant: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string
}

Header.defaultProps={
    variant : "2",
    title: "",
    image: ""
}