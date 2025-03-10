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
      <div className="app-container">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/documents" element={<DocumentsPage />} />
          <Route path="/export_files" element={<FileExport />} />
        
          <Route path="/thesises" element={<ThesisList />} />
          <Route path="/thesises/:thesisId" element={<GeneralThesis />} />
          <Route path="/finished_thesises" element={<PrivateRoute></PrivateRoute>} />
          <Route path="/finished_thesises/:thesisId" element={<PrivateRoute></PrivateRoute>} />
          <Route path="/my_thesis" element={<MyThesis />} />

          <Route path="/my_profile" element={<MyProfile />} />
          <Route path="/users" element={<UserList />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;