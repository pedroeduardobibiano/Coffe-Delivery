import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { CompletedForm } from "./CompleteForm";
import { DefaultLayout } from "./Layouts/Default";
import { HomePage } from "./pages/Home";

export function Router() {
    return (
        <Routes>
           <Route path="/" element={<DefaultLayout/>}>
           <Route path="/" element={<HomePage />} />
            <Route path="/CompletedForm" element={<CompletedForm />} />
           </Route>
        </Routes>
    )
}