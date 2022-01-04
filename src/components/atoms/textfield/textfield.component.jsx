import PropTypes from 'prop-types'

export const TextField = ({placeholder,textarea,label,type,onSubmit,classProp}) => {

    const Text = ({value})=>{
      if(textarea){
        return (<textarea placeholder={placeholder} value={value} className={styles.input} onSubmit={onSubmit}/>)
      }else{
        return (<input type={type} placeholder={placeholder} value={value} className={styles.input} onSubmit={onSubmit}/>)
      }
    } 

    return(
        <div className={classProp}>
          <label>{label}</label>
          <Text/>
        </div>
    )
}

TextField.propTypes={
  placeholder: PropTypes.string,
  textarea: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string
}

TextField.defaultProps={
  placeholder : "",
  textarea: "",
  label: "",
  type: "text",
  value: ""
}