import './App.css';
import {
  Input,
  Ripple,
  initTE,
} from "tw-elements";
import Login from './components/Login';

initTE({ Input, Ripple });

function App() {
  return (
    <>
    <Login />
    </>
  );
}

export default App;
