import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import { PrivateRoute } from "./components/PrivateRoute";
import { Login } from "./pages/Login";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/documents" element={<PrivateRoute></PrivateRoute>}/>
        <Route path="/my_thesis" element={<PrivateRoute></PrivateRoute>}/>
        <Route path="/my_profile" element={<PrivateRoute></PrivateRoute>}/>
        <Route path="/export_files" element={<PrivateRoute></PrivateRoute>}/>
        <Route path="/thesises" element={<PrivateRoute></PrivateRoute>}/>
        <Route path="/finished_thesises" element={<PrivateRoute></PrivateRoute>}/>
        <Route path="/users" element={<PrivateRoute></PrivateRoute>}/>
      </Routes>
    </>
  );
}

export default App;