import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>E-SHOPPING</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Products</Link>
                    </li>
                    <li>
                        <Link to='/cart'>Cart</Link>
                    </li>
                    <li>
                        <Link to='/orders'>Order</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;
