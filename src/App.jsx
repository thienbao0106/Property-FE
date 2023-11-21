import { Suspense, lazy } from "react";
import BaseLayout from "./layout/BaseLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";

const Home = lazy(() => import("./pages/Home"));
const Properties = lazy(() => import("./pages/Properties"));
const CreateProperty = lazy(() => import("./pages/CreateProperty"));

const App = () => {
  return (
    <main>
      <BrowserRouter>
        <Suspense fallback={<Loading msg={"Loading..."} />} />
        <BaseLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/create" element={<CreateProperty />} />
          </Routes>
        </BaseLayout>
      </BrowserRouter>
    </main>
  );
};

export default App;
