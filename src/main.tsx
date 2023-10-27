import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';
import Routers from '@routers/Routers';
import 'aos/dist/aos.css';

// aos 초기화 코드 추가
import AOS from 'aos';
AOS.init();

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={Routers} />
    </QueryClientProvider>
  </React.StrictMode>
);
