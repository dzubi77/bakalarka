import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import { LoginPage } from "./pages/Login";
import { MyThesis } from "./pages/MyThesis";
import { MyProfile } from "./pages/MyProfile";
import { ThesisList } from "./pages/ThesisList";
import { UserList } from "./pages/UserList";
import { Footer } from "./components/Footer";
import { GeneralThesis } from "./components/Thesis";
import { DocumentsPage, FileExport } from "./pages/Documents";
import { PrivateRoute } from "./components/PrivateRoute.js";
import { UserItem } from "./components/UserItem.js";

function App() {
  return (
    <>
      <div className="app-container">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/documents" element={<PrivateRoute><DocumentsPage /></PrivateRoute>} />
          <Route path="/export_files" element={<PrivateRoute><FileExport /></PrivateRoute>} />
          <Route path="/info" element={<PrivateRoute></PrivateRoute>} />
        
          <Route path="/thesises" element={<PrivateRoute><ThesisList isFinished={false} /></PrivateRoute>} />
          <Route path="/thesises/:id" element={<PrivateRoute><GeneralThesis isFinished={false} /></PrivateRoute>} />
          <Route path="/finished_thesises" element={<PrivateRoute><ThesisList isFinished={true} /></PrivateRoute>} />
          <Route path="/finished_thesises/:id" element={<PrivateRoute><GeneralThesis isFinished={true} /></PrivateRoute>} />
          <Route path="/my_thesis" element={<PrivateRoute><MyThesis /></PrivateRoute>} />

          <Route path="/my_profile" element={<PrivateRoute><MyProfile /></PrivateRoute>} />
          <Route path="/users" element={<PrivateRoute><UserList /></PrivateRoute>} />
          <Route path="/users/:userId" element={<PrivateRoute><UserItem /></PrivateRoute>} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;