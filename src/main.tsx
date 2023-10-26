import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import Routers from '@routers/Routers';

import 'aos/dist/aos.css';

// aos 초기화 코드 추가
import AOS from 'aos';
AOS.init();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={Routers} />
  </React.StrictMode>
);
