import { FooterContactDetails } from "@/static-data/FooterContactDetails";

export default function ContactUs() {
    return (
        <>
            {
                FooterContactDetails.map((contact, index) => (
                    <div className="flex mb-5">
                        <div>
                            <div className="w-1 h-7 me-0 mt-1 rounded-lg bg-white"></div>
                            <img
                                src={contact.locatonIcon}
                                alt=""
                                className="w-4 h-4 mt-7 me-3"
                            />
                            <img
                                src={contact.mailIcon}
                                alt=""
                                className="w-4 h-4 mt-9 me-3"
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