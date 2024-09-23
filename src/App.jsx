import styles from './App.module.css';
import Counter from './Counter';
import Counter2 from './Counter2';
import Login from './Login';
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
    </>
    
  );
}

export default App;