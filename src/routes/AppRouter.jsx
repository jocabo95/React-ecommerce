import { Routes, Route } from "react-router";
import Layout from "../components/layout/Layout";
import { routes } from "./routes";

const AppRouter = () => {
  return (
   
    <Routes>

        {/* layout wrapper */}
        <Route element={<Layout />}>
            {
                routes.map(({id, path, Element})=>{
                    return (
                        <Route key={id} path={path} element={<Element />}/>
                    )
                })
            }
        </Route>

        {/* 404 error */}
        <Route path="*" element={<h1>404 Page not found</h1>} />
    </Routes>
    
  );
}

export default AppRouter;