'use client';

import Header from "@/components/header/Header";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default AppLayout;
