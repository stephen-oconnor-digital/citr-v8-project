import { lazy, Suspense, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AdoptedPetContext from "./AdoptedPetContext";

const Details = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchParams"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const adoptedPet = useState(null);
  return (
    <div>
      <BrowserRouter>
        <AdoptedPetContext.Provider value={adoptedPet}>
          <Suspense fallback={<div className="loading-pane">...</div>}>
            <QueryClientProvider client={queryClient}>
              <header>
                <Link to="/">Adopt Me!</Link>
              </header>
              <Routes>
                <Route path="/details/:id" element={<Details />} />
                <Route path="/" element={<SearchParams />} />
              </Routes>
            </QueryClientProvider>
          </Suspense>
        </AdoptedPetContext.Provider>
      </BrowserRouter>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
