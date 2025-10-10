import { MantineProvider, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout/Layout.tsx";
import "./main.css";
import Home from "./pages/Home.tsx";

export const theme = createTheme({
  fontFamily: "'Special Elite', monospace",
  fontSizes: {
    xs: "10px",
    sm: "12px",
    md: "14px",
    lg: "16px",
    xl: "20px",
  },
  colors: {
    site: [
      "#0a001b",
      "#5516dc",
      "#f0ebff",
      "#000000",
      "#000000",
      "#000000",
      "#000000",
      "#000000",
      "#000000",
      "#000000",
    ],
  },
  headings: {
    sizes: {
      h1: { fontSize: "200px" },
      h2: { fontSize: "60px" },
      h3: { fontSize: "30px" },
      h4: { fontSize: "20px" },
      h5: { fontSize: "10px" },
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);
