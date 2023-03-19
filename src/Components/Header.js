import MenuIcon from '@mui/icons-material/Menu';
import './Header.css';


function Header() {

    return (
        <>
            <div className="Header">
                <div className='header-menu-button'>
                    <MenuIcon style={{ fontSize: '3rem', color:'gray' }}/>
                </div>
                <div className='header-months'>
                    <p>March 2023</p>
                </div>
            </div>
        </>
    );
}

export default Header;