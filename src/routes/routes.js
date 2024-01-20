import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import config from "../pages/config";
import PrivateRoutes from "./PrivateRoutes";
import LogIn from "../pages/LogIn";
function RoutesProviders() {
    return (

        <Routes>

            {
                config.map(({ path, element, Layout }, idx) => (
                    <Route element={<PrivateRoutes />} key={idx} >
                        <Route element={<Layout>{element}</Layout>} path={path} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Route>
                ))
            }
            <Route path="/login" element={<LogIn />} />
        </Routes>

    )
}

export default RoutesProviders