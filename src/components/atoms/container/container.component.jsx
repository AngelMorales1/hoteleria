import clsx from "clsx"
export const Container = ({children,classProps})=>{
    return(
        <div className={clsx(classProps,"mx-auto px-[20px] md:px-[30px] xl:px-[0px]")} style={{maxWidth:"1200px"}}>
            {children}
        </div>
    )
}