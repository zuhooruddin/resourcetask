import localFont from "next/font/local";
import "./globals.css";
import LeftSidebar from "@/components/LeftSidebar";
import TopNavbar from "@/components/TopNavbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Resourcex Task",
  description: "Done by Zuhoor Uddin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex h-screen">
          <div className="w-1/4 bg-gray-200 h-full"> 
            <LeftSidebar />
          </div>
          <div className="flex flex-col w-full h-full"> 
            <div className="h-29 bg-white shadow"> 
              <TopNavbar />
            </div>
            <div className="flex-grow bg-[#F5F7FA] p-8 overflow-y-auto"> 
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
