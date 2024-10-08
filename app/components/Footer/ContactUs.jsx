import { FooterContactDetails } from "@/static-data/FooterContactDetails";
import Image from "next/image";

export default function ContactUs() {
    return (
        <>
            {
                FooterContactDetails.map((contact, index) => (
                    <div key={index} className="flex mb-5">
                        <div>
                            <div className="w-1 h-7 me-0 mt-1 rounded-lg bg-white"></div>
                            <Image
                                src={contact.locatonIcon}
                                alt=""
                                className="w-4 h-4 mt-7 me-3"
                                width={16}
                                height={16}
                            />
                            <Image
                                src={contact.mailIcon}
                                alt=""
                                className="w-4 h-4 mt-9 me-3"
                                width={16} 
                                height={16}
                            />
                        </div>
                        <div>
                            <h3 className="text-2xl tracking-wider font-bold mb-4">
                                {contact.heading}
                            </h3>
                            <p>
                                {contact.address} <br /> {contact.cityState}
                            </p>
                            <p className="mt-2">{contact.mail}</p>
                            <p className="mt-2">{contact.phoneNo}</p>
                        </div>
                    </div>
                ))
            }
        </>
    )
}