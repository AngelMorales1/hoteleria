import PropTypes from 'prop-types'
import {Typography} from '../typography/typography.component'

export const TextField = ({placeholder,textarea,select,options,label,type,onSubmit,classProp,classPropLabel}) => {

    const Text = ({value})=>{
      if(textarea){
        return (<textarea className={classProp} placeholder={placeholder} value={value} onSubmit={onSubmit}/>)
      }else if(select){
        return (
          <select type={type} onSubmit={onSubmit} className={classProp} style={{fontFamily:"Poppins",fontSize:"12px",color:"#AFAFAF"}}>
            {options.map((option,idx)=>(
              <option key={idx} value={option}>{option}</option>
            ))}
          </select>)
      }else{
        return (<input  className={classProp} type={type}  placeholder={placeholder} value={value} onSubmit={onSubmit}/>)
      }
    } 

    return(
        <div className="flex flex-col">
          <Typography fontSize="14px" color='#404040' fontWeight="400" classProp={classPropLabel}>{label}</Typography>
          <Text/>
        </div>
    )
}

TextField.propTypes={
  placeholder: PropTypes.string,
  textarea: PropTypes.bool,
  select: PropTypes.bool,
  options: PropTypes.array,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string
}

TextField.defaultProps={
  placeholder : "",
  textarea: false,
  select: false,
  options: [],
  label: "",
  type: "text",
  value: ""
}