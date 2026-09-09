import type { Metadata } from "next"; import "./globals.css";
export const metadata:Metadata={title:"Edin Čajo | IT Manager",description:"IT leadership, cloud infrastructure, cybersecurity and digital transformation."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}