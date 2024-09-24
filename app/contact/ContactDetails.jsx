import { TiMessages } from "react-icons/ti";
import { TfiEmail } from "react-icons/tfi";
import { MdLocationOn } from "react-icons/md";

export default function ContactDetails() {
    return (
        <>
            <div className="md:container md:mx-auto md:w-4/5 md:flex justify-between w-4/5 mx-auto mt-12 mb-12 grid grid-cols-1">
                <div className="flex h-16 rounded-xl p-10 pt-2 hover:bg-blue-500 hover:text-white hover:border-transparent transition-all duration-300">
                    <div className="group-hover:bg-white h-10 w-10 ps-2 pb-2 me-3 transition-all duration-300 rounded-full bg-white">
                        <TiMessages className="text-blue-500 w-6 h-6 mt-3 me-3 " />
                    </div>
                    <div>
                        <p className="font-bold group-hover:text-white transition-all duration-300">0 1234567890</p>
                        <p className=" group-hover:text-white transition-all duration-300">Call Anytime</p>
                    </div>
                </div>
                <div className="flex h-16 rounded-xl p-10 pt-2 hover:bg-blue-500 hover:text-white hover:border-transparent transition-all duration-300">
                    <div className="group-hover:bg-white h-10 w-10 ps-2 pb-2 me-3 transition-all duration-300 rounded-full bg-white">
                        <TfiEmail className="text-blue-500 w-6 h-6 mt-3 me-3 group-hover:text-white transition-all duration-300" />
                    </div>
                    <div>
                        <p className="font-bold group-hover:text-white transition-all duration-300">info@website.com</p>
                        <p className=" group-hover:text-white transition-all duration-300">Send Email</p>
                    </div>
                </div>
                <div className="flex md:h-16 h-20 rounded-xl p-10 pt-2 hover:bg-blue-500 hover:text-white hover:border-transparent transition-all duration-300">
                    <div className="group-hover:bg-white h-10 w-10 ps-2 pb-2 me-3 transition-all duration-300 rounded-full bg-white">
                        <MdLocationOn className="text-blue-500 w-6 h-6 mt-3 me-3 group-hover:text-white transition-all duration-300" />
                    </div>
                    <div>
                        <p className="font-bold group-hover:text-white transition-all duration-300">Lorem Ipsum</p>
                        <p className="group-hover:text-white transition-all duration-300">Dummy text of the printing</p>
                    </div>
                </div>
            </div>
        </>
    )
}
