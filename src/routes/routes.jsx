import React, { Fragment, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import WaitingLoad from "../utils/waitingLoad";
import WrapperLoader from "../components/loader/wrapperloader";
const Home = lazy(() => WaitingLoad(1000).then(() => import("../pages/home")));
const About = lazy(() =>
  WaitingLoad(1000).then(() => import("../pages/about"))
);
const Contact = lazy(() =>
  WaitingLoad(1000).then(() => import("../pages/contact"))
);
export default function RouteApps() {
  return (
    <Routes>
      <Fragment>
        <Route path="/" element={<Navigate to={"/app"} />} />
        <Route path="app" element={<WrapperLoader />}>
          <Route index element={<Navigate to={"home"} />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Fragment>
    </Routes>
  );
}
