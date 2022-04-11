import { useSelector } from "react-redux";
import { Route,Routes } from "react-router";
import { BookStore } from "../Components/BookStore";
import { CartPage } from "../Components/CartPage";
import { LoginForm } from "../Components/LoginForm";
import { Navbar } from "../Components/Navbar";
import { SignUpForm } from "../Components/SignUp";

export const MainRoutes = ()=>{
    

    return(
        <>
          <Routes>
            <Route path="/" element={<BookStore />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/cart" element={<CartPage />} />
         </Routes>
        </>
    )
}