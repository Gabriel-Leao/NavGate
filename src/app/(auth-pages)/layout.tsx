import { ReactNode } from 'react'

export default function AuthLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <h1>Auth page</h1>
        {children}
      </body>
    </html>
  )
}
