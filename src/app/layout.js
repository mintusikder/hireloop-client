
import "./globals.css";

export const metadata = {
  title: "HireLoop",
  description: "Find your dream job with HireLoop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
