import styles from './App.module.css';
import Counter from './Counter';
import Counter2 from './Counter2';
import Dynamo from './Dynamo';
import Flow from './Flow';
import Login from './Login';
import Menu from './Menu';
import MyComponent from './MyComponent';


function App() {
  return (
    <>
    <div class={styles.App}>Dobar dan, svijete!
    </div>
    <MyComponent />
    <Counter />
    <Counter2 />
    <Login />
    <Flow />
    <Menu />
    <Dynamo />
    </>
    
  );
}

export default App;