import Logo from "@/app/modules/Header/Logo/Logo";
import Navbar from "@/app/modules/Header/Navbar/Navbar";
import ContactDetails from "@/app/modules/Header/Components/ContactDetails";

export default function Header() {
  return (
    <>
      <ContactDetails />

      <nav className="bg-white border-gray-200 w-full md:w-4/5 mx-auto">
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Logo />
          </a>
          <Navbar />
        </div>
      </nav>
    </>
  );
}