import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DrawerAppBar from "@/component/navbar/navbar";
import Provider from "@/component/Provider";
import UserContextProvider from "@/context/UserContextProvider";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <UserContextProvider>
          <Provider>
            <DrawerAppBar />
            <div className="mt-16">{children}</div>
          </Provider>
        </UserContextProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
