import { Suspense } from "react";
import "./App.css";
import DataComponent from "./Suspence/DataComponent";
import Parent from "./forwardRef/Parent";
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'

function App() {
  const queryClient=new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Parent />
      <Suspense fallback={<div>Loading...</div>}>
        <DataComponent />
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
