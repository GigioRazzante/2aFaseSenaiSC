import './Header.css'
import Logo from './Logo'

function Header(){
    return(
        <div className='Header-container'>

            <Logo />
            <label className='lblHeader'>Farmárcia</label>
           
        </div>
    )
}

export default Header