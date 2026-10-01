import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { ScrollToTop } from "@/components/common/ScrollToTop";

const HomePage = lazy(() => import("@/pages/HomePage").then((m) => ({ default: m.HomePage })));
const AboutPage = lazy(() => import("@/pages/AboutPage").then((m) => ({ default: m.AboutPage })));
const ServicesPage = lazy(() =>
  import("@/pages/ServicesPage").then((m) => ({ default: m.ServicesPage })),
);
const ServiceDetailPage = lazy(() =>
  import("@/pages/ServiceDetailPage").then((m) => ({ default: m.ServiceDetailPage })),
);
const WorkPage = lazy(() => import("@/pages/WorkPage").then((m) => ({ default: m.WorkPage })));
const WorkDetailPage = lazy(() =>
  import("@/pages/WorkDetailPage").then((m) => ({ default: m.WorkDetailPage })),
);
const ContactPage = lazy(() =>
  import("@/pages/ContactPage").then((m) => ({ default: m.ContactPage })),
);
const InsightsPage = lazy(() =>
  import("@/pages/InsightsPage").then((m) => ({ default: m.InsightsPage })),
);
const NotFoundPage = lazy(() =>
  import("@/pages/NotFoundPage").then((m) => ({ default: m.NotFoundPage })),
);

function ProjectsRedirect() {
  const { slug } = useParams();
  const target = slug === "gabrulooks" ? "gabru-looks" : slug;
  return <Navigate to={`/work/${target}`} replace />;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<div className="surface-navy min-h-screen" />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/:slug" element={<WorkDetailPage />} />
          <Route path="/projects" element={<Navigate to="/work" replace />} />
          <Route path="/projects/:slug" element={<ProjectsRedirect />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Toaster position="bottom-right" />
    </BrowserRouter>
  );
}
