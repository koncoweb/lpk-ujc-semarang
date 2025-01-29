import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import routes from "tempo-routes";
import { Layout } from "./components/layout";
import Dashboard from "./components/dashboard";

function App() {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-blue-500 border-t-transparent" />
            <p className="text-sm text-gray-600">Loading...</p>
          </div>
        </div>
      }
    >
      <>
        <Layout>
          {/* Tempo routes */}
          {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}

          {/* App routes */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            {import.meta.env.VITE_TEMPO === "true" && (
              <Route path="/tempobook/*" />
            )}
          </Routes>
        </Layout>
      </>
    </Suspense>
  );
}

export default App;
