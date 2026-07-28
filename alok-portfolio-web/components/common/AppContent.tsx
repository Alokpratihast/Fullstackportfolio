"use client";

import { ReactNode } from "react";
import { usePortfolio } from "@/app/context/PortfolioContext";
import LoadingOverlay from "./LoadingOverlay";

interface AppContentProps {
  children: ReactNode;
}

export default function AppContent({
  children,
}: AppContentProps) {
  const { loading } = usePortfolio();

  if (loading) {
    return <LoadingOverlay />;
  }

  return <>{children}</>;
}