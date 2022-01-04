import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare,faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faPhoneAlt,faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import { faEnvelope} from '@fortawesome/free-regular-svg-icons'

import { Typography } from '../atoms/typography/typography.component'

import logo from '../../assets/img/logo.png'

export const Footer = ()=>{
    return(
        <div className='rounded-t-large' style={{background:"#123E61"}}>
            <div className="container mx-auto">
                <div className="flex justify-between pt-40 pb-12 items-center">
                        <Image src={logo}/>
                    <div className="space-x-10 flex items-center">
                        <FontAwesomeIcon icon={faFacebookSquare} style={{color: '#B5A067', fontSize:"18px"}}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faInstagram} style={{color: '#B5A067', fontSize:"18px"}}></FontAwesomeIcon>
                    </div>
                </div>
                <div className='flex flex-row justify-between py-12'>
                    <Typography variant='p' fontWeight='400' fontSize='16px' color='white'>INICIO </Typography>
                    <Typography variant='p' fontWeight='400' fontSize='16px' color='white'>NOSOTROS </Typography>
                    <Typography variant='p' fontWeight='400' fontSize='16px' color='white'>EMPRESA </Typography>
                    <Typography variant='p' fontWeight='400' fontSize='16px' color='white'>HOTEL </Typography>
                    <Typography variant='p' fontWeight='400' fontSize='16px' color='white'>DEPARTAMENTOS </Typography>
                    <Typography variant='p' fontWeight='400' fontSize='16px' color='white'>CONTACTO </Typography>
                </div>
                <div className="flex flex-row justify-around border-t-2 border-slate-400 py-8 ">
                    <div className="flex flex-row items-center">
                        <FontAwesomeIcon icon={faPhoneAlt} style={{color: '#FFFFFF',fontSize: "13px"}}></FontAwesomeIcon>
                        <Typography classProp="mx-3" variant='p' fontWeight='400' fontSize='16px' color='#FFFFFF'>+51 999 999 999</Typography>
                    </div>
                    <div className="flex flex-row items-center">
                        <FontAwesomeIcon className="mx-3" icon={faEnvelope} style={{color: '#FFFFFF',fontSize: "19px"}}></FontAwesomeIcon>
                        <Typography variant='p' fontWeight='400' fontSize='16px' color='#FFFFFF'>reservas@amobladosilo.com</Typography>
                    </div>
                    <div className="flex flex-row items-center">
                        <FontAwesomeIcon className="mx-3" icon={faMapMarkerAlt} style={{color: '#FFFFFF',fontSize: "19px"}}></FontAwesomeIcon>
                        <Typography variant='p' fontWeight='400' fontSize='16px' color='#FFFFFF'>reservas@amobladosilo.com</Typography>
                    </div>
                </div>
            </div>
            <div className='mx-auto border-t-2 border-slate-400'/>
            <div className="container mx-auto py-8 flex justify-between flex-row">
                    <div className="flex flex-row items-center">
                        <Typography variant='p' fontWeight='400' fontSize='12px' color='#FFFFFF'>© 2021 Los Faroles, Apart ILO. Todos los Derechos Reservados</Typography>
                    </div>
                    <div className="flex flex-row items-center space-x-10">
                        <Typography variant='p' fontWeight='400' fontSize='12px' color='#FFFFFF'>Aviso de privacidad</Typography>
                        <Typography variant='p' fontWeight='400' fontSize='12px' color='#FFFFFF'>Politica de terminos y condiciones</Typography>
                    </div>
            </div>
        </div>
    )
}