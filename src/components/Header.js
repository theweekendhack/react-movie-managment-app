import {useContext} from 'react';
import ModalContext from "../context/ModalContext";
import {Link} from "react-router-dom"



const Header = (props) => {

    const {toogleAddForm} = useContext(ModalContext);
    return (
        <header className="grid grid-col-3">
                <h1><Link to="/"> Managment System</Link></h1>
                <Link className="grid-x-center" to="/about-us">About Us</Link>
                <button onClick={()=>{
                    toogleAddForm()
                }} className="btn btn-primary grid-x-right"  type="button" > Add movie</button>
        </header>
    )
}

export default Header
