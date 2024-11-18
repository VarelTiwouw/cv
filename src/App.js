import React from "react";
import "./assets/css/style.css"; // Pastikan jalur file benar
import Header from "./components/header"; // Pastikan file ini ada dan sesuai

const App = () => {
  return (
    <div className="app">
      <Header /> {/* Tambahkan props jika diperlukan */}
    </div>
  );
};

export default App;
