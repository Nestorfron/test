import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import "../src/front/styles/App.css";
import {NavBar} from "./front/components/navbar.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./front/pages/home.jsx";
import Dashboard from "./front/pages/dashboard";
import { Users } from "./front/pages/users";
import { Branches } from "./front/pages/branches.jsx";
import { Assets } from "./front/pages/assets.jsx";

function Layout({ pageProps }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <BrowserRouter {...pageProps}>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/branches" element={<Branches />} />
            <Route path="/assets" element={<Assets />} />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
        </BrowserRouter>
      </NextThemesProvider>
    </NextUIProvider>
  );
}

export default Layout;
