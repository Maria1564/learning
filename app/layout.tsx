import { Metadata } from "next";

export const metadata: Metadata = {
    title: "First Next project",
    // description: "Описание"
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  
}) {

  

  return (
    <html lang="en">
      <body>
        <header>My Header</header>
        <main>{children}</main>
        <footer>My Footer</footer>
      </body>
    </html>
  );
}
