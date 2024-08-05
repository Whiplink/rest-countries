import "./globals.css";
import { Nunito } from "next/font/google";
import Header from "../components/Header";
import { cookies } from "next/headers";

const nunito = Nunito({ subsets: ["cyrillic"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const cookieStore = cookies();
  const darkTheme = cookieStore.get("darkTheme");
  const bg = darkTheme?.value === "true" ? "bg-[var(--n2)]" : "bg-[var(--n5)]";

  return (
    <html lang="en">
      <body className={nunito.className}>
        <div className={`${bg} w-[100vw] min-h-[100vh]`}>
          <Header />
          <div className="py-6">{children}</div>
        </div>
      </body>
    </html>
  );
}