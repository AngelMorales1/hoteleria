import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt} from '@fortawesome/free-solid-svg-icons'
import { faEnvelope} from '@fortawesome/free-regular-svg-icons'
import { faFacebookSquare,faInstagram } from '@fortawesome/free-brands-svg-icons'
import { Typography } from '../atoms/typography/typography.component'
import Image from 'next/image'
import logo2 from '../../assets/img/logo2.png'

export const Navbar = ()=>{
    return(
        <div>
            <div className="container mx-auto flex justify-between ">
                <div className="inline-flex p-4">
                    <FontAwesomeIcon icon={faPhoneAlt} style={{color: '#B5A067',fontSize: "14px"}}></FontAwesomeIcon>
                    <Typography      classProp="mx-3"  variant='p'       fontWeight='400' fontSize='12px' color='#404040'>+51 999 999 999</Typography>
                    <FontAwesomeIcon className="mx-3"  icon={faEnvelope} style={{color: '#B5A067',fontSize: "19px"}}/>
                    <Typography      fontSize='12px'   variant='p'       fontWeight='400' color='#404040'>reservas@amobladosilo.com</Typography>
                </div>
               <div className="space-x-10  p-3">
                    <FontAwesomeIcon icon={faFacebookSquare} style={{color: '#B5A067'}}/>
                    <FontAwesomeIcon icon={faInstagram} style={{color: '#B5A067'}}/>
               </div>
            </div>

            <div className='mx-auto opacity-50' style={{maxWidth:"1740px" ,border:"0.2px solid #686868"}}/>

            <div className="container mx-auto py-5">
                <div className="flex justify-between items-center">
                    <div>
                        <Image src={logo2}/>
                    </div>
                    <div className='flex flex-column space-x-3 xl:space-x-20 lg:space-x-10'>
                        <Typography variant='p' fontWeight='400' fontSize='16px' color='#404040'>INICIO </Typography>
                        <Typography variant='p' fontWeight='400' fontSize='16px' color='#404040'>NOSOTROS </Typography>
                        <Typography variant='p' fontWeight='400' fontSize='16px' color='#404040'>EMPRESA </Typography>
                        <Typography variant='p' fontWeight='400' fontSize='16px' color='#404040'>HOTEL </Typography>
                        <Typography variant='p' fontWeight='400' fontSize='16px' color='#404040'>DEPARTAMENTOS </Typography>
                        <Typography variant='p' fontWeight='400' fontSize='16px' color='#404040'>CONTACTO </Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}