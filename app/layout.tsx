import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";

import { Footer, Legal } from "@/components/footer";
import { Header } from "@/components/header";
import { profile } from "@/lib/content/profile";
import { cn } from "@/lib/utils";
import "./globals.css";

const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: `${profile.name} (${profile.handle}) · ${profile.role}`,
  description: profile.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" id="top" className={cn("h-full antialiased", comfortaa.variable)}>
      <body className="flex min-h-full flex-col pb-20">
        <div className="mx-auto flex w-full max-w-frame flex-1 flex-col border-border lg:border lg:border-t-0">
          <Header />
          {children}
          <Footer />
        </div>
        <Legal />
      </body>
    </html>
  );
}
