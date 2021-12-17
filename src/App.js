
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.css';
import { actionCreators } from './state';

function App() {
  const state = useSelector(state => state.account);
 const dispatch = useDispatch();
    const {deposit,withdraw}= bindActionCreators(actionCreators,dispatch);
  return (
    <div className="App">
      <span>your account has : {state} Euros</span>
      <button onClick={()=> deposit(100)}>deposit</button>
      <button onClick={()=> withdraw(200)}>withdraw</button>
    </div>
  );
}

export default App;
