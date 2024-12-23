import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { BlogRenderer } from "./pages/BlogRenderer";
import { HomePage } from "./pages/homePage";
import { ThemeProvider } from "./components/theme-provider";
import { Divider } from "./pages/Divider";
import { BlogLinks } from "./pages/BlogLinks";
import { Skills } from "./pages/skills";
import { Projects } from "./pages/projects";
import { Socials } from "./pages/socials";

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
      {
        path: "/skills/",
        element: <Skills />,
      },
      {
        path: "/projects/",
        element: <Projects />,
      },
      {
        path: "/socials/",
        element: <Socials />,
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
