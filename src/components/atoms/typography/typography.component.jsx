import PropTypes from 'prop-types'

export const Typography = ({variant,children,color,font,classProp,fontSize,fontWeight})=>{
 /*
    Mapa para seleccionar la etiqueta a renderizar
  */
    const H1    = (props) => (<h1 {...props}>{props.children}</h1>)
    const H2    = (props) => (<h2 {...props}>{props.children}</h2>)
    const H3    = (props) => (<h3 {...props}>{props.children}</h3>)
    const H4    = (props) => (<h4 {...props}>{props.children}</h4>)
    const P     = (props) => (<p {...props}>{props.children}</p>)
    const Span  = (props) => (<span {...props}>{props.children}</span>)
    
    const Variants = {
        "h1": H1,
        "h2": H2,
        "h3": H3,
        "h4": H4,
        "p": P,
        "span": Span
    }

    const Tag = Variants[variant]

    return(
        <Tag className={classProp} style={{color: color, fontFamily: font, fontSize: fontSize,fontWeight:fontWeight}}>
            {children}
        </Tag>
    )

}

Typography.propTypes={
    variant: PropTypes.oneOf(["h1","h2","h3","h4","p","span"]),
    className: PropTypes.string,
    color: PropTypes.string,
    font: PropTypes.string
}

Typography.defaultProps={
    variant: "p",
    className: "",
    color: "#404040",
    font: "Poppins"
}