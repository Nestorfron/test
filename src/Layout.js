import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import "../src/front/styles/App.css";
import {NavBar} from "../src/front/components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./front/pages/dashboard";


function Layout({}) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <BrowserRouter >
          <NavBar />
          <Routes>
            <Route path="/" element={<h1>Dashboard</h1>} />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
        </BrowserRouter>
      </NextThemesProvider>
    </NextUIProvider>
  );
}

export default Layout;
