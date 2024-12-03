import "./App.css";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        Start coding here or use Button / Input from ShadCN (inbuilt)
      </ThemeProvider>
    </>
  );
}

export default App;
