import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

import classes from './MainNavigation.module.css';

function MainNavigation() {
  const history = useHistory();

  return (
    <header className={classes.header}>
      <div className={classes.logo} onClick={() => history.push('/')}>Album Search</div>
      <div>
        <Link to='/'>All Albums</Link>
      </div>
    </header>
  );
}

export default MainNavigation;