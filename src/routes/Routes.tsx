import { BrowserRouter, Routes, Route } from "react-router";
import { MessagePage } from "../pages/MessagePage";

export function RoutePages() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MessagePage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
