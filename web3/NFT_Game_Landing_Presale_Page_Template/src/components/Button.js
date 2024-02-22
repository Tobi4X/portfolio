

const Button = ({text, clas, click}) => {

    return(
        <button onClick={click} className={clas}>{text}</button>
    )
}

export default Button

