import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare,faInstagram,faAirbnb } from '@fortawesome/free-brands-svg-icons'
import { faPhoneAlt,faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import { faEnvelope} from '@fortawesome/free-regular-svg-icons'

import { Typography } from '../../atoms/typography/typography.component' 

import { Container } from '../../atoms/container/container.component' 

export const Footer = ()=>{
    return(
        <div className='rounded-t-large' style={{background:"#123E61"}}>
            <Container>
                <div className="flex justify-between items-center flex-col space-y-20 py-20 sm:flex-row sm:space-y-0 sm:pt-40 pb-15 ">
                    <Image src="/img/logo.png" width={240} height={76}/>
                    <div className="space-x-10 flex items-center">
                        <FontAwesomeIcon icon={faFacebookSquare} style={{color: '#B5A067', fontSize:"18px"}}/>
                        <FontAwesomeIcon icon={faInstagram} style={{color: '#B5A067', fontSize:"18px"}}/>
                        <div className='flex items-center'>
                            <Image src="/img/tripadvisor.png" width={26} height={17}/>
                        </div>
                        <FontAwesomeIcon icon={faAirbnb} style={{color: '#B5A067', fontSize:"18px"}}/>
                    </div>
                </div>
                <div className='flex justify-between flex-col space-y-6 text-center pb-10 sm:space-y-0 sm:flex-row sm:py-10'>
                    <Typography variant='p' fontWeight='400' fontSize='16px' color='white'>INICIO </Typography>
                    <Typography variant='p' fontWeight='400' fontSize='16px' color='white'>NOSOTROS </Typography>
                    <Typography variant='p' fontWeight='400' fontSize='16px' color='white'>EMPRESA </Typography>
                    <Typography variant='p' fontWeight='400' fontSize='16px' color='white'>HOTEL </Typography>
                    <Typography variant='p' fontWeight='400' fontSize='16px' color='white'>DEPARTAMENTOS </Typography>
                    <Typography variant='p' fontWeight='400' fontSize='16px' color='white'>CONTACTO </Typography>
                </div>
                <div className="flex justify-around border-t-2 border-slate-400 py-8 space-y-5 flex-col text-center md:space-y-0 md:flex-row ">
                    <div className="flex flex-row items-center justify-center">
                        <FontAwesomeIcon icon={faPhoneAlt} style={{color: '#FFFFFF',fontSize: "13px"}}></FontAwesomeIcon>
                        <Typography classProp="mx-3" variant='p' fontWeight='400' fontSize='16px' color='#FFFFFF'>+51 999 999 999</Typography>
                    </div>
                    <div className="flex flex-row items-center justify-center">
                        <FontAwesomeIcon className="mx-3" icon={faEnvelope} style={{color: '#FFFFFF',fontSize: "19px"}}></FontAwesomeIcon>
                        <Typography variant='p' fontWeight='400' fontSize='16px' color='#FFFFFF'>reservas@amobladosilo.com</Typography>
                    </div>
                    <div className="flex flex-row items-center justify-center">
                        <FontAwesomeIcon className="mx-3" icon={faMapMarkerAlt} style={{color: '#FFFFFF',fontSize: "19px"}}></FontAwesomeIcon>
                        <Typography variant='p' fontWeight='400' fontSize='16px' color='#FFFFFF'>reservas@amobladosilo.com</Typography>
                    </div>
                </div>
            </Container>
            <div className='mx-auto border-t-2 border-slate-400'/>
            <Container classProps="py-8 flex justify-center flex-row px-20 xl:px-0 md:justify-between">
                    <div className="flex flex-row items-center ">
                        <Typography variant='p' fontWeight='400' fontSize='12px' color='#FFFFFF'>© 2021 Los Faroles, Apart ILO. Todos los Derechos Reservados</Typography>
                    </div>
                    <div className="flex flex-row items-center space-x-10 hidden md:flex">
                        <Typography variant='p' fontWeight='400' fontSize='12px' color='#FFFFFF'>Aviso de privacidad</Typography>
                        <Typography variant='p' fontWeight='400' fontSize='12px' color='#FFFFFF'>Politica de terminos y condiciones</Typography>
                    </div>
            </Container>
        </div>
    )
}