import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shared from "./pages/Shared/Shared";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/shared" element={<Shared />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
