import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import 'antd/dist/reset.css'
import Home from './pages/Home'
import { QueryClient,QueryClientProvider  } from "@tanstack/react-query"


function App() {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
    <Home/>
    </QueryClientProvider>
  );
}

export default App;