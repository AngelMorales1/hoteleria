import PropTypes from 'prop-types'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Typography } from "../../atoms/typography/typography.component"

export const IconCard = ({icon,title,text})=>{
    return (
        <>
            <div className="w-full flex flex-col items-center">
                <div className="rounded-full p-[7px] shadow-[-1px_3px_22px_4px_rgba(0,0,0,0.18)] mb-[30px] w-[110px] h-[110px]">
                    <div className="flex items-center justify-center rounded-full border-[1px] border-[#BFA58A] w-[96px] h-[96px]">
                        <FontAwesomeIcon icon={icon} style={{color: "#BFA58A", fontSize:"40px"}} />
                    </div>
                </div>
                <Typography fontWeight='500' fontSize='24px' color='#123E61'>{title}</Typography>
                <Typography fontWeight='400' fontSize='14px' color='#404040'>{text}</Typography>
            </div>
        </>
    )
}

IconCard.PropTypes={  
    title: PropTypes.string,
    text: PropTypes.string,
    value: PropTypes.string
  }

IconCard.defaultProps={
    title: "",
    text: "",
    select: false
 }