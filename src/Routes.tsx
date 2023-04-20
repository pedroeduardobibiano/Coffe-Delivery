import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { DefaultLayout } from "./Layouts/Default";
import { HomePage } from "./pages/Home";
import { CompleteOrder } from "./pages/CompleteOrder";

export function Router() {
    return (
        <Routes>
           <Route path="/" element={<DefaultLayout/>}>
           <Route path="/" element={<HomePage />} />
            <Route path="/CompleteOrder" element={<CompleteOrder/>} />
           </Route>
        </Routes>
    )
}