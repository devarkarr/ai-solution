import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import App from "./layouts/App";
import AppLoader from "./components/app-loader";

const Landing = lazy(() => import("@/pages/landing"));
const Gallery = lazy(() => import("@/pages/gallery"));
const ShowCase = lazy(() => import("@/pages/show-case"));
const NotFound = lazy(() => import("@/pages/error/not-found"));
const Service = lazy(() => import("@/pages/service"));
const Blog = lazy(() => import("@/pages/blogs"));
const AboutUs = lazy(() => import("@/pages/about-us"));
const Contact = lazy(() => import("@/pages/contact"));
const Event = lazy(() => import("@/pages/events"));

const Router = () => {
  return (
    <Suspense fallback={<AppLoader />}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Landing />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="show-case" element={<ShowCase />} />
          <Route path="service" element={<Service />} />
          <Route path="blog" element={<Blog />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="events" element={<Event />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Router;
