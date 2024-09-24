import { ContactDetailsData } from "@/static-data/ContactDetails";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";
import { MdLocationOn, MdEmail } from "react-icons/md";

export default function ContactDetails() {
  return (
    <div
      className="md:container-fluid flex items-center justify-between text-white p-2"
      style={{
        backgroundImage: "url('/HomePageImages/plain-background.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {ContactDetailsData.map((contact, index) => (
        <div key={index} className="md:container md:w-4/5 md:mx-auto md:flex items-center md:space-x-4">
          <div className="flex mb-1 items-center space-x-2">
            <MdLocationOn />
            <span>{contact.address}</span>
          </div>
          <div className="flex md:mb-1 mb-3 items-center space-x-2">
            <MdEmail />
            <span>{contact.mail}</span>
          </div>
          <div className="flex space-x-4" style={{ marginLeft: "auto" }}>
            {contact.facebookIcon && (
              <div className="bg-white rounded-full">
                <a href={contact.facebookIcon} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                  <FaFacebookF className="p-1 w-5 h-5" />
                </a>
              </div>
            )}
            {contact.twitterIcon && (
              <div className="bg-white rounded-full">
                <a href={contact.twitterIcon} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                  <FaTwitter className="p-1 w-5 h-5" />
                </a>
              </div>
            )}
            {contact.instagramIcon && (
              <div className="bg-white rounded-full">
                <a href={contact.instagramIcon} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                  <FaInstagram className="p-1 w-5 h-5" />
                </a>
              </div>
            )}
            {contact.pinterestIcon && (
              <div className="bg-white rounded-full">
                <a href={contact.pinterestIcon} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                  <FaPinterestP className="p-1 w-5 h-5 font-bold" />
                </a>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
