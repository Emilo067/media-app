import './globals.css';
import {Route, Routes} from "react-router-dom";
import SigninForm from "./_auth/forms/SigninForm.tsx";
import {Home} from "./_root/pages";
import SignupForm from "./_auth/forms/SignupForm.tsx";
import AuthLayout from "./_auth/AuthLayout.tsx";
import RootLayout from "./_root/RootLayout.tsx";
import { Toaster } from "@/components/ui/toaster"

const App = () => {
    return (
        <main className="flex h-screen">
            <Routes>
                {/* public routes */}
                <Route element={<AuthLayout/>}>
                    <Route path="sign-in" element={<SigninForm/>}/>
                    <Route path="sign-up" element={<SignupForm/>}/>
                </Route>

                {/* private routes */}
                <Route element={<RootLayout/>}>
                    <Route index element={<Home/>}/>
                </Route>
            </Routes>

            <Toaster />
        </main>
    );
};

export default App;
