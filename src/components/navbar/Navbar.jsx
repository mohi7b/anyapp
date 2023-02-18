import styled from './navbar.module.css'
import { Link } from 'react-router-dom'

function Navbar(props) {




    return (
        
        <div className= {styled.header}>

            <ul>
                <li>
                    <Link to ="/"> لیست مقالات</Link>
                </li>
                <li>مقاله جدید</li>
                <li>
                    <Link to ="/about"> درباره ما </Link>
                </li>
            </ul>
                        
        </div>
        
    )
}
export default Navbar