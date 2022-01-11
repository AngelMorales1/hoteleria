import PropTypes from 'prop-types'

export const Typography = ({variant,children,color,font,classProp,fontSize,fontWeight,lineHeight})=>{
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
        <Tag className={classProp} 
             style={{color: color, 
                    fontFamily: font, 
                    fontSize: fontSize,
                    fontWeight:fontWeight,
                    lineHeight: lineHeight}}>
            {children}
        </Tag>
    )

}

Typography.propTypes={
    variant: PropTypes.oneOf(["h1","h2","h3","h4","p","span"]),
    color: PropTypes.string,
    font: PropTypes.string,
    classProp: PropTypes.string,
    fontSize: PropTypes.string,
    fontWeight: PropTypes.string,
    lineHeight: PropTypes.string
}

Typography.defaultProps={
    variant: "p",
    color: "#404040",
    font: "Poppins",
    classProp:"",
    fontSize: "",
    fontWeight:"",
    lineHeight: ""
}