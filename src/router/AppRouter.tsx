import React, { ReactNode, createContext, lazy } from 'react';
import { BrowserRouter, Routes, Route, Link, Await } from 'react-router-dom';

// append page (only views)
import Home from '../component/@Views/TopList/Home';
import About from '../component/@Views/TopList/About';

import ProfileHome from '../component/@Views/Profile/ProfileHome';
import SampleTable from '../component/@Views/Template/TempleDataTable';

import SystemConfig from '../component/@Views/Systems/SystemConfig/SystemConfigIndex'
import LoginLayout from '../component/@Shared/@Layout/LoginLayout';
import Login from '../component/@Views/Auth/LoginForm';
import MainLayout from '../component/@Shared/@Layout/MainLayout';
import { RequireAuth } from "react-auth-kit";
import { ToastContainer } from 'react-toastify';
import { Services, ServicesContext } from '../services/services';
import Modal from 'react-modal';
import MenuConfigIndex from '../component/@Views/Systems/Menu/MenuConfigIndex';


Modal.setAppElement('body');

const AppRouter = () => {
    //ajax
    const privateElement = (element: JSX.Element) => {
        return (
            <RequireAuth loginPath={"/login"}>
                {element}
            </RequireAuth>
        );
    }

    const services: Services = new Services();
    return (
        <BrowserRouter>
            <ServicesContext.Provider value={services} >
                <ToastContainer />
                <Routes>
                    {/* user authrozie element */}
                    <Route path="/Login" element={<LoginLayout />}>
                        <Route path="/Login" element={<Login />} />
                    </Route>

                    {/* System element */}
                    <Route path="/" element={<MainLayout />}>
                        <Route path="/" element={privateElement(<Home />)} />
                        <Route path="/Profile" element={privateElement(<ProfileHome />)} />
                        <Route path="/about" element={privateElement(<About />)} />

                        <Route path="/BDP000A" element={privateElement(<SystemConfig />)} />
                        <Route path="/Menu" element={privateElement(<MenuConfigIndex />)} />
                    </Route>

                </Routes>
            </ServicesContext.Provider>
        </BrowserRouter>
    );
}

export default AppRouter;
