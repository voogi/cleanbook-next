import React from "react";
import "@scss/main.scss";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body >{children}</body>
    </html>
  )
}
