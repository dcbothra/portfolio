import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@/components/analytics"
import ClientLayout from "./client"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Devchand Bothra | Robotics & AI Engineer",
  description:
    "Portfolio of Devchand Bothra, Robotics & AI Engineer with expertise in SLAM, Reinforcement Learning, Robotic Manipulation, and Control Systems. Experienced in ROS, OpenCV, PyTorch, and MoveIt.",
  keywords: [
    "Devchand Bothra",
    "Robotics Engineer",
    "Artificial Intelligence",
    "SLAM",
    "Reinforcement Learning",
    "ROS",
    "ROS2",
    "OpenCV",
    "PyTorch",
    "MoveIt",
    "Robotic Manipulation",
    "Control Systems",
    "Autonomous Mobile Robotics",
  ],
  authors: [{ name: "Devchand Bothra", url: "https://www.linkedin.com/in/devchand-bothra" }],
  creator: "Devchand Bothra",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dcbothra.vercel.app",
    title: "Devchand Bothra | Robotics & AI Engineer",
    description:
      "Portfolio of Devchand Bothra, Robotics & AI Engineer with expertise in SLAM, Reinforcement Learning, Robotic Manipulation, and Control Systems.",
    siteName: "Devchand Bothra Portfolio",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Devchand Bothra Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Devchand Bothra | Robotics & AI Engineer",
    description:
      "Portfolio of Devchand Bothra, Robotics & AI Engineer specializing in Robotics, SLAM, and AI-driven systems.",
    creator: "@yourTwitterHandle",
    images: ["/favicon.ico"],
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Suspense>
        <ClientLayout>{children}</ClientLayout>
      </Suspense>
      <Analytics />
    </>
  )
}


import './globals.css'