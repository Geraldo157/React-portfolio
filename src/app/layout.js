import "C:/Users/gsmec/react_portfolio/src/app/globals.css"

export const metadata = {
  title: 'Geraldo JR',
  description: 'Developer Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
