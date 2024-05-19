import { Route, Routes as RouterRoutes } from "react-router-dom";
import LandingPage from "../features/main/LandingPage";
import FeaturePage from "../features/features/FeaturePage";
import BlogPage from "../features/blog/BlogPage";
import ResourcePage from "../features/resource/ResourcePage";
import PricingPage from "../features/pricing/PricingPage";

const Routes = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/features" element={<FeaturePage />} />
      <Route path="/blogs" element={<BlogPage />} />
      <Route path="/resources" element={<ResourcePage />} />
      <Route path="/pricing" element={<PricingPage />} />
    </RouterRoutes>
  );
};

export default Routes;
