import React from "react"
import { useRoutes } from "react-router-dom"

//일반
import Home from "./pages/Home"

//UserService-Main
import Login from "./components/users/Login/main/Login"
import JoinAgree from "./components/users/Register/main/JoinAgree"
import Join from "./components/users/Register/main/Join"

//UserService-Find
import FindId from "./components/users/Find/main/FindId/FindId"
import FindPwSelect from "./components/users/Find/main/Find_Pw/FindPwSelect"
import FindPwEmail from "./components/users/Find/main/Find_Pw/FindPwEmail"
import FindPwPhone from "./components/users/Find/main/Find_Pw/FindPwPhone"
import ChangePw from "./components/users/Find/main/Find_Pw/ChangePw"

//UserService-Update
import AuthModify from './components/users/Modify/main/modifyAuth'
import Modify from "./components/users/Modify/main/modify"

//테이블
import Table from "./components/tables/main/Table"

//etc
import Product from "./components/product/main/Product";
import Customer from "./components/customer/main/Customer"






export default function App() {


  return useRoutes([
      //Main
    {path:"/",element:<Home />},

      //UserService-Main
    {path:"login",element:<Login />},
    {path:"agreeRegister",element:<JoinAgree />},
    {path:"register",element:<Join/>},

      //UserService-Find
    {path:"findId",element:<FindId />},
    {path:"findPwSelect",element:<FindPwSelect />},
    {path:"findPwEmail",element:<FindPwEmail />},
    {path:"findPwPhone",element:<FindPwPhone />},
    {path:"changePw",element:<ChangePw />},

      //UserService-Update
    {path:"profile",element:<Modify />},
    {path:"authModify",element:<AuthModify />},

      //Table
    {path:"table",element:<Table />},

      //product-Page
    {path:"product",element:<Product />},

      //Customer-Page
    {path:"customer",element:<Customer />}


  ]);
}

