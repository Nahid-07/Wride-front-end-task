import { RouterProvider } from "react-router-dom";
// import Main from "./Layout/Main";
import { router } from "./Routes/Routes";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  );
}

export default App;
