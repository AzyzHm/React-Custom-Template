import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "@/pages/Home/Home";
import { NotFoundPage } from "@/pages/NotFound/NotFound";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
