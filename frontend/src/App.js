import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import { PrivateRoute } from "./components/PrivateRoute";
import { LoginPage } from "./pages/Login";
import { MyThesis } from "./pages/MyThesis";
import { MyProfile } from "./pages/MyProfile";
import { ThesisList } from "./pages/ThesisList";
import { UserList } from "./pages/UserList";
import { Footer } from "./components/Footer";
import { GeneralThesis } from "./components/Thesis";
import { DocumentsPage, FileExport } from "./pages/Documents";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/documents" element={<PrivateRoute><DocumentsPage /></PrivateRoute>} />
        <Route path="/export_files" element={<PrivateRoute><FileExport /></PrivateRoute>} />
        
        <Route path="/thesises" element={<PrivateRoute><ThesisList /></PrivateRoute>} />
        <Route path="/thesises/:thesisId" element={<PrivateRoute><GeneralThesis /></PrivateRoute>} />
        <Route path="/finished_thesises" element={<PrivateRoute></PrivateRoute>} />
        <Route path="/finished_thesises/:thesisId" element={<PrivateRoute></PrivateRoute>} />
        <Route path="/my_thesis" element={<PrivateRoute><MyThesis /></PrivateRoute>} />

        <Route path="/my_profile" element={<PrivateRoute><MyProfile /></PrivateRoute>} />
        <Route path="/users" element={<PrivateRoute><UserList /></PrivateRoute>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;