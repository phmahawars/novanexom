import { Outlet } from "react-router-dom";
import Header from "../components/includes/Header";
import { Footer } from "../components/includes/Footer";

export default function MainLayout() {
  return (
    <>
      <Header />
      <main >
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
