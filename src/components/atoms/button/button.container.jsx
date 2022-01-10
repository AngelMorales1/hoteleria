import PropTypes from 'prop-types'
import clsx from 'clsx'

export const Button = ({children,background,color,width,classProp})=>{
    return(
        <>
            <button className={clsx("border rounded-xl w-full py-3" ,classProp)}
                    style={{
                        background:background ,
                        color:color ,
                        width:width,
                        fontWeight:"500", "&:hover": {
                        background: "white"}
                       }}>
                {children}
            </button>
        </>
    )
}

Button.propTypes={
    background: PropTypes.string,
    color: PropTypes.string,
}

Button.defaultProps={
    background : "white",
    color: "black"
}