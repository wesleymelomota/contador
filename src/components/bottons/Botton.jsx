import './botton.css'

export default ({children, Onclick}) => {
    return(
        <button type="botton" onClick={Onclick} className="botao">
        
            {children}
        </button>
    )
}