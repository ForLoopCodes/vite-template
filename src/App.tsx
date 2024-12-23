import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import { Divider } from "./pages/Divider";
import { CustomerHome } from "./pages/CustomerHome";
import { CustomerProfile } from "./pages/CustomerProfile";
import { CustomerSearch } from "./pages/CustomerSearch";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { RegisterRestaurant } from "./pages/RegisterRestaurant";
import AdminPage from "./pages/AdminPage";
import { RestaurantPage } from "./pages/RestaurantPage";

function SearchPageWrapper() {
  // Extract the query parameter from the URL
  const { query } = useParams<{ query: string }>();

  // Pass the extracted query as a prop to CustomerSearch
  return <CustomerSearch initialQuery={query || ""} />;
}
function RestaurantPageWrapper() {
  // Extract the query parameter from the URL
  const { id } = useParams<{ id: string }>();

  // Pass the extracted query as a prop to CustomerSearch
  return <RestaurantPage initialId={id || ""} />;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Divider />,
    children: [
      {
        path: "",
        element: <CustomerHome />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "registerRestaurant",
        element: <RegisterRestaurant />,
      },
      {
        path: "admin",
        element: <AdminPage />,
      },
      {
        path: "search",
        element: <CustomerSearch initialQuery="" />,
      },
      {
        path: "search/:query",
        element: <SearchPageWrapper />,
      },
      {
        path: "restaurant/:id",
        element: <RestaurantPageWrapper />,
      },
      {
        path: "customerProfile",
        element: <CustomerProfile />,
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
