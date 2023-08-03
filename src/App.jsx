import Router from "./Router";
import useAppInit from "./hooks/useAppInit";

function App() {
  useAppInit();
  
  return <Router />;
}

export default App;
