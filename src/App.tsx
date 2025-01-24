import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <Home />
      </QueryClientProvider>
    </>
  );
}

export default App;
