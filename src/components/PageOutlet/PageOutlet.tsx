import React from 'react';
import { Outlet } from 'react-router-dom';

const PageOutlet = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default PageOutlet;
