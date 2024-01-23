import React from "react";
import "@mantine/core/styles.css";
import ReactDOM from "react-dom/client";
import { MantineProvider, createTheme } from "@mantine/core";
import { Layout } from "./components/Layout/Layout.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Experience from "./pages/Experience.tsx";
import Projects from "./pages/Projects.tsx";
import "./main.css";

export const theme = createTheme({
    fontFamily: "Lato variant0",
    colors: {
        site: ["#272829", "#61677A", "#D8D9DA", "#FFF6E0", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000"],
    },
    headings: {
        //fontFamily: "PT_Sans variant0, Tofu",
        sizes: {
            h1: { fontSize: "75px" },
            h2: { fontSize: "50px" },
            h3: { fontSize: "25px" },
            h4: { fontSize: "17px" },
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
    {
        path: "/experience",
        element: (
            <Layout>
                <Experience />
            </Layout>
        ),
    },
    {
        path: "/projects",
        element: (
            <Layout>
                <Projects />
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
