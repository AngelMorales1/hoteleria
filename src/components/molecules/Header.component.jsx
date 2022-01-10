import PropTypes from 'prop-types'
import Image from 'next/image';
import fondo from '../../../public/img/imgs/fondo.jpg'
import { Container } from "../atoms/container/container.component";
import { Typography } from "../atoms/typography/typography.component";
import { Button } from '../atoms/button/button.container';
import { TextField } from '../atoms/textfield/textfield.component';

export const Header = ({variant,title,description,image})=>{
    return(
        <>
            {variant===1 ?
                <div className="w-full rounded-b-Xlarge h-[500px] relative">
                    <Image className='rounded-b-Xlarge' src={image} layout='fill' objectFit='cover'/>
                    <Container>
                        <div className="absolute top-[190px]">
                            <Typography fontWeight={800} color="white" classProp="text-[60px] md:text-[80px]">{title}</Typography>
                        </div>
                    </Container>
                </div>
            :
            <div className="w-full rounded-none md:rounded-b-Xlarge h-[700px] md:h-[930px] relative md:overflow-hidden">
                <Image src={image} layout='fill' objectFit='cover'/>
                <Container>
                    <div className="absolute w-full left-[0px] top-[170px]">
                        <div className="text-center space-y-[30px]">
                            <Typography fontWeight={800} color="white" classProp="text-[60px] md:text-[80px]">{title}</Typography>
                            <div className="text-left px-[16px] mx-auto xl:w-[880px]">
                                <Typography fontWeight={400} color="white" classProp="text-[16px] md:text-[24px]">{description}</Typography>
                            </div>
                            <Button background='#FFFFFF'color='#123E61' classProp="w-[200px] md:w-[160px]">EMPRESA</Button>
                        </div>
                        <div className="absolute rounded-[40px] h-content px-[40px] bg-[#ffffff] text-center">
                            <Typography fontWeight="500" color='#123E61' classProp='py-[15px]'>Comprobar Disponibilidad</Typography>
                            <div className="flex flex-row justify-center w-full border-t-[1px] border-slate-200">
                                <TextField label='Fecha de llegada' placeholder='Octubre 11, 2021'></TextField>
                                <TextField label='Fecha de Salida' placeholder='Octubre 20, 2021'></TextField>
                                <TextField label='Tipo de Servicio' placeholder='Departamento'></TextField>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
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