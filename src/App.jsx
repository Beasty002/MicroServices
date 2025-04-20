import React from "react";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import UsersPage from "./features/User/UsersPage";
import AccountingPage from "./features/pages/AccountingPage";
import LibraryPage from "./features/Library/LibraryPage";
import { ToastContainer } from "react-toastify";

export const api_user = import.meta.env.VITE_BASE_USER;
export const api_book = import.meta.env.VITE_BASE_BOOKS;
export const api_account = import.meta.env.VITE_BASE_ACCOUNTING;

const App = () => {
  return (
    <section className="bg-black/80 min-h-screen min-w-screen text-white flex gap-4">
      <ToastContainer />
      <NavBar />
      <main className="px-4 py-5 max-h-screen overflow-y-auto flex-1">
        <Routes>
          <Route path="/" element={<UsersPage />} />
          <Route path="/accounting" element={<AccountingPage />} />
          <Route path="/Library" element={<LibraryPage />} />
        </Routes>
      </main>
    </section>
  );
};

export default App;
