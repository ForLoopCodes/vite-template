import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { BlogRenderer } from "./pages/BlogRenderer";
import { HomePage } from "./pages/homePage";
import { ThemeProvider } from "./components/theme-provider";
import { Divider } from "./pages/Divider";
import { BlogLinks } from "./pages/BlogLinks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Divider />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/blog/",
        element: <BlogLinks />,
      },
      {
        path: "/blog/:category/:id",
        element: <BlogRenderer />,
      },
      {
        path: "/blog/:category",
        element: <BlogRenderer />,
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
