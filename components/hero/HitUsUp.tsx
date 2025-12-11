import { useEffect } from "react";
import HitUsAnimation from "../animations/HitUsAnimation";


export default function HitUsUp() {
        HitUsAnimation();
 
    
    return (
        <section className="min-h-screen hitusup w-full bg-[#eae7d4] p-8 flex flex-col">
            {/* Header Section */}
            <div className="mb-12 Header overflow-hidden">
                <div className="hit">
                    <h6 className="text-7xl md:text-8xl leading-none">HIT US</h6>
                    <h6 className="text-7xl md:text-8xl text-red-500 leading-none">UP</h6>
                </div>
                {/* Horizontal Line under the title */}
                <hr className="horizontal-line border-t-2 border-black mt-6 w-full" />
            </div>

            {/* Content Section - Split in Half */}
            <div className="flex-1 grid md:grid-cols-2 gap-8 md:gap-16 relative content-section">
                {/* Left Side - Contact Info */}
                <div className="space-y-8 border-2 border-black p-6 contact rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 contact-item">CONTACT</h2>
                        <div className="space-y-3 text-lg italic">
                            <h5 className="contact-item">Email: siteweb@Email.com</h5>
                            <h5 className="contact-item">Phone: 00.00.00.00.00</h5>
                            <h5 className="contact-item">Address: Adress city street</h5>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4 contact-item">Social Media</h2>
                        <ul className="space-y-2 text-lg italic">
                            <li className="social-item cursor-pointer">Instagram</li>
                            <li className="social-item cursor-pointer">Facebook</li>
                            <li className="social-item cursor-pointer">Twitter</li>
                        </ul>
                    </div>
                </div>

                {/* Right Side - Reach Us Link */}
                <div className="reach-us flex items-center justify-center border-2 border-black rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <a
                        href="mailto:siteweb@mail.com"
                        className="text-3xl md:text-5xl font-bold text-red-500 underline hover:scale-110 hover:text-black transition-all duration-300 text-center"
                    >
                        REACH US
                    </a>
                </div>

                {/* Vertical Divider for Desktop */}
                <div className="vertical-divider hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-black transform -translate-x-1/2"></div>
            </div>
        </section>
    );
}