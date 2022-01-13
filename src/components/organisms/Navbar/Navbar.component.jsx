import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Container } from '../../atoms/container/container.component' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt,faAlignRight} from '@fortawesome/free-solid-svg-icons'
import { faEnvelope} from '@fortawesome/free-regular-svg-icons'
import { faFacebookSquare,faInstagram,faAirbnb } from '@fortawesome/free-brands-svg-icons'
import { Typography } from '../../atoms/typography/typography.component' 

export const Navbar = ()=>{

    const [windowSize, setWindowSize] = useState(1920)
    const [menu,setMenu]=useState(false);

    useEffect(()=>{

        setWindowSize(window.innerWidth)

        window.addEventListener('resize',()=>{
            setWindowSize(window.innerWidth)
        })
    },[]);

    return(
        <div>
            <>
                {windowSize>768 ?
                    <div>
                        <Container classProps="flex justify-between ">
                            <div className="inline-flex p-4">
                                <FontAwesomeIcon icon={faPhoneAlt} style={{color: '#B5A067',fontSize: "14px"}}></FontAwesomeIcon>
                                <Typography      classProp="mx-3"  variant='p'       fontWeight='400' fontSize='12px' color='#404040'>+51 999 999 999</Typography>
                                <FontAwesomeIcon className="mx-3"  icon={faEnvelope} style={{color: '#B5A067',fontSize: "19px"}}/>
                                <Typography      fontSize='12px'   variant='p'       fontWeight='400' color='#404040'>reservas@amobladosilo.com</Typography>
                            </div>
                        <div className="space-x-10  p-3 flex flex-row items-end">
                                <FontAwesomeIcon icon={faFacebookSquare} style={{color: '#B5A067'}}/>
                                <FontAwesomeIcon icon={faInstagram} style={{color: '#B5A067'}}/>
                                <div className='w-6 flex items-center '>
                                    <Image src="/img/tripadvisor.png" alt='icon' width={26} height={17}/>
                                </div>
                                <FontAwesomeIcon icon={faAirbnb} style={{color: '#B5A067', fontSize:"18px"}}/>
                        </div>
                        </Container>

                        <div className='mx-auto opacity-50' style={{maxWidth:"1740px" ,border:"0.2px solid #686868"}}/>

                        <Container classProps="">
                            <div className="flex justify-between items-center">
                                <div className='w-48'>
                                    <Image src="/img/logo2.svg" alt='fondo hotel' width={500} height={300}/>
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
                        </Container>
                    </div>
                :
                    <div>
                        <Container classProps="relative">
                            <div className="flex justify-between items-center">
                                <div className='w-48'>
                                    <Image src="/img/logo2.svg" alt='fondo hotel' width={500} height={300}/>
                                </div>
                                <div>
                                    <FontAwesomeIcon className='fon' style={{fontSize:"26px"}} icon={faAlignRight} onClick={()=>{setMenu(true)}}/>
                                </div>
                            </div>
                            {menu ?
                                <div className="flex flex-col justify-start bg-slate-900/50 w-full min-h-screen z-10 top-0 left-0 fixed">
                                    <div className='flex flex-col w-11/12 bg-white min-h-screen'>
                                        <div className="flex justify-end w-full p-5">
                                            <Image src="/img/cross.png" alt='icon' onClick={()=>{setMenu(false)}} width={20} height={20}/>
                                        </div>

                                        <div className='space-y-4 px-10'>
                                                <Typography variant='p' fontWeight='400' fontSize='16px' color='#123E61'>INICIO </Typography>
                                                <Typography variant='p' fontWeight='400' fontSize='16px' color='#123E61'>NOSOTROS </Typography>
                                                <Typography variant='p' fontWeight='400' fontSize='16px' color='#123E61'>EMPRESA </Typography>
                                                <Typography variant='p' fontWeight='400' fontSize='16px' color='#123E61'>HOTEL </Typography>
                                                <Typography variant='p' fontWeight='400' fontSize='16px' color='#123E61'>DEPARTAMENTOS </Typography>
                                                <Typography variant='p' fontWeight='400' fontSize='16px' color='#123E61'>CONTACTO </Typography>
                                        </div>

                                        <div className="space-x-10 p-5 pt-40 flex flex-row justify-center">
                                            <FontAwesomeIcon icon={faFacebookSquare} style={{color: '#B5A067'}}/>
                                            <FontAwesomeIcon icon={faInstagram} style={{color: '#B5A067'}}/>
                                            <div className='w-6 flex items-center'>
                                                <Image src="/img/tripadvisor.png" width={500} height={300}/>  
                                            </div>
                                            <FontAwesomeIcon icon={faAirbnb} style={{color: '#B5A067', fontSize:"18px"}}/>
                                        </div>

                                        <div className="flex flex-col border-y-2 border-slate-200 py-8 space-y-2">
                                            <div className="flex flex-row items-center justify-center">
                                                <Typography variant='p' fontWeight='400' fontSize='12px' color='#404040'>+51 999 999 999</Typography>
                                            </div>
                                            <div className="flex flex-row items-center justify-center">
                                                <Typography variant='p' fontWeight='400' fontSize='12px' color='#404040'>reservas@amobladosilo.com</Typography>
                                            </div>
                                            <div className="flex flex-row items-center justify-center">
                                                <Typography variant='p' fontWeight='400' fontSize='12px' color='#404040'>reservas@amobladosilo.com</Typography>
                                            </div>
                                        </div>

                                        <div className="flex flex-row mx-auto place-content-center text-center py-10">
                                            <Typography variant='p' fontWeight='400' fontSize='10px' color='#404040'>© 2021 Los Faroles
                                            Apart ILO. <br/>Todos los Derechos Reservados</Typography>
                                        </div>
                                    </div>
                                </div>
                            
                            :null}
                            
                        </Container>
                    </div>
                }
            </>
        </div>
    )
}