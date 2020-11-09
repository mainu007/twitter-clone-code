import classes from './App.module.css';
import Login from './components/Login/Login';
import Main from './components/Main';
import { useStateValue } from './store/StateProvider';

function App() {
   const [{ user }] = useStateValue();
   return <div className={classes.App}>{!user ? <Login /> : <Main />}</div>;
}

export default App;
