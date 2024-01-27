import React from "react";
import Navbar from "@/components/modules/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="background-light900_dark100 relative text-white ">
      <Navbar />
      <div className="flex ">
        LeftSidebar
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
        RightSidebar
      </div>
      Toaster
    </main>
  );
}
