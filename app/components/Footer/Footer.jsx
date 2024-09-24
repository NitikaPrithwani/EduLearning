import "../../assets/Footer.css";
import Form from "../../modules/Footer/ContactForm/Form";
import ContactUs from "./ContactUs";
import Course from "./Course";
import NewsAndBlogs from "./NewsAndBlogs";

export default function Footer() {
  return (
    <footer
      className="text-white py-8"
      style={{
        backgroundImage: "url('/HomePageImages/plain-background.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Form />

      <div className="md:container md:mx-auto md:w-4/5 w-4/5 mx-auto mt-8">
        <div className="grid md:grid-cols-3">
          <ContactUs />
          <Course />
          <NewsAndBlogs />
        </div>
      </div>
      <hr className="mt-10 w-full" />
      <div className="mt-5 text-center">
        <p>Copyright 2021 by EduLearning</p>
      </div>

    </footer>
  );
}
