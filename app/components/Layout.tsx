import React, { ReactNode } from "react";

export default function Layout({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`w-full h-full inline-block z-0  p-32 ${className}`}>
      {children}
    </div>
  );
}
