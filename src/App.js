import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./Layout/Main";
import Home from "./Components/Home/Home";
import Statistics from "./Components/Statistics/Statistics";
import About from "./Components/About/About";
import Blogs from "./Components/Blogs/Blogs";
import NotFound from "./Components/NotFound/NotFound";
import Blog1 from "./Components/Blogs/Blog1";
import Blog3 from "./Components/Blogs/Blog3";
import Blog2 from "./Components/Blogs/Blog2";
import Quiz from "./Components/Quiz/Quiz";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          loader: () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Home />,
        },
        {
          path: "/stat",
          loader: () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Statistics />,
        },
        {
          path: "/blog",
          element: <Blogs />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/blog1",
          element: <Blog1 />,
        },
        {
          path: "/blog2",
          element: <Blog2 />,
        },
        {
          path: "/blog3",
          element: <Blog3 />,
        },
        {
          path: "/quiz/:quizId",
          loader: async ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.quizId}`
            );
          },
          element: <Quiz />,
        },
      ],
    },
    { path: "*", element: <NotFound /> },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
