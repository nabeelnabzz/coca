import { Route, Routes as RouterRoutes } from "react-router-dom";
import LandingPage from "../features/main/LandingPage";

const Routes = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<LandingPage />} />
    </RouterRoutes>
  );
};

export default Routes;
