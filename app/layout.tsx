import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abubakar Siddik | Cloud & DevOps Engineer",
  description:
    "Cloud & DevOps Engineer focused on Kubernetes, Docker, CI/CD, cloud infrastructure, GitOps and automation.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
