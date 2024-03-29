import Header from "./Header";
import MenuSidebar from "./MenuSidebar";
//append css or js
import 'admin-lte/dist/css/adminlte.min.css'
import 'admin-lte/plugins/fontawesome-free/css/all.css'
import 'admin-lte/plugins/bootstrap/js/bootstrap'
import 'admin-lte/plugins/bootstrap/js/bootstrap.bundle'
import 'jquery/dist/jquery'
import 'admin-lte/dist/js/adminlte'
//primereact theme 
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";     
//custom css
import "../../../stylesheet/global.css";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useIsAuthenticated, useAuthHeader } from "react-auth-kit";
import { setAuthHeaderFunction } from "../../../services/services";

const MainLayout = () => {
    const navigate = useNavigate();
    const isAuthenticated = useIsAuthenticated();
    const authHeader = useAuthHeader();
    setAuthHeaderFunction(authHeader());
    
    useEffect(() => {
        if(!isAuthenticated()){
            navigate("/login", { replace: true });
        }
      }, []);


    return (
        <div className="wrapper">
            <Header />
            <MenuSidebar />

            <div className='content-wrapper'>
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;

function isAuthenticated(): any {
    throw new Error("Function not implemented.");
}
