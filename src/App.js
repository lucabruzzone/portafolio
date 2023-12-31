import './App.css';
import {NextUIProvider} from "@nextui-org/react";
import Home from './Components/Home/Home';

function App() {
  return (
    <NextUIProvider>
      <div className="App">
        <Home />
      </div>
    </NextUIProvider>
  );
}

export default App;
