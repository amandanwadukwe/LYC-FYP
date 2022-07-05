import Menu from "../resources/menu.svg"

export default function Header(props){
    return <header>
        <div className="to-left">
            <h1 className="primary-logo">Find Your Purpose</h1>
            <h1 className="secondary-logo">realise your ambition</h1>
        </div>
        <div className="to-right">
            <img className="menu" onClick={props.handleMenuClick} src={Menu} alt="Menu"/>
        </div>
    </header>
}