import { connect } from 'react-redux';
import Navbar from './Navbar';

let mapStateToProps = (state) => {
    return {
        sitebar: state.sitebar
    }
}

const NavbarContainer = connect(mapStateToProps) (Navbar);
export default NavbarContainer;