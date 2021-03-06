import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import EcommerceDash from "./components/root-navigator";
import EcomProvider from "./providers/ecom-provider";
import { theme } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <EcomProvider>
          <Router>
            <EcommerceDash />
          </Router>
        </EcomProvider>
      </ChakraProvider>
    </div>
  );
}

export default App;
