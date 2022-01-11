import clsx from 'clsx';
import PropTypes from 'prop-types'
import {Typography} from '../typography/typography.component'

export const TextField = ({placeholder,textarea,select,options,label,type,onSubmit,classProp,classPropLabel}) => {

    const Text = ({ value }) => {
      if (textarea) {
        return (
          <textarea
            className={clsx(classProp,"border-[1px] rounded-[10px]")}
            placeholder={placeholder}
            value={value}
            onSubmit={onSubmit}
          />
        );
      } else if (select) {
        return (
          <select
            onSubmit={onSubmit}
            className={clsx(classProp,"border-[1px] rounded-[10px]")}
            style={{
              fontFamily: "Poppins",
              fontSize: "12px",
              color: "#AFAFAF",
            }}
          >
            {options.map((option, idx) => (
              <option key={idx} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      } else {
        return (
          <input
            className={clsx(classProp,"border-[1px] rounded-[10px]")}
            type={type}
            placeholder={placeholder}
            value={value}
            onSubmit={onSubmit}
            style={{
              fontFamily: "Poppins",
              fontSize: "12px",
              color: "#AFAFAF"
            }}
          />
        );
      }
    }; 

    return(
        <div className="flex flex-col w-full">
          <Typography fontSize="14px" color='#404040' fontWeight="400" classProp={clsx(classPropLabel,"text-left py-[5px]")}>{label}</Typography>
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