import { Suspense } from "react";
import Loader from "./loader";
import { Outlet } from "react-router-dom";
import loading from "../../assets/json/loader.json";

export default function WrapperLoader() {
  return (
    <Suspense fallback={<Loader icon={loading} width={"150px"} height={"150px"} />}>
      <Outlet />
    </Suspense>
  );
}
