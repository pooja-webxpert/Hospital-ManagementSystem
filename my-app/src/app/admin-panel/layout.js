"use client";
import MiniDrawer from "@/component/drawer/drawer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function RootLayout({ children }) {
  return (
    <>
      <MiniDrawer>{children}</MiniDrawer>
      <ToastContainer />
    </>
  );
}
