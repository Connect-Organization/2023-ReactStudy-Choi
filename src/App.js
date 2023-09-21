import './App.css';
import { RouterProvider, createBrowserRouter, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";

function App() {

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  }
]);

  return (
    <RouterProvider router={router}>
     </RouterProvider>
  );
}

export default App;
