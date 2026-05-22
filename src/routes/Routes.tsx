import { BrowserRouter, Routes, Route } from "react-router";
import { LandingPage } from "../pages/Landing";

export function RoutePages() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
