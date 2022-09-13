import React, { FunctionComponent } from 'react';
import { useNavigate, Link } from 'react-router-dom';

interface MainProps {}

const Main: FunctionComponent<MainProps> = () => {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center bg-[white]">
      this is main page
    </main>
  );
};

export default Main;
