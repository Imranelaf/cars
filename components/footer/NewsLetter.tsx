export default function NewsLetters() {
    return (
        <section className="flex w-full gap-4 mt-auto">
            {/* Empty decorative divs - hidden on small screens, match input height */}
            <div className="hidden md:block w-2/12 h-14 bg-gray-700 rounded-lg self-end" />
            <div className="hidden md:block w-1/12 h-14 bg-gray-700 rounded-lg self-end" />
            <div className="hidden md:block w-2/12 h-14 bg-gray-700 rounded-lg self-end" />

            {/* Form section - full width on mobile, remaining space on desktop */}
            <div className="flex flex-col flex-1 mx-1">
                <label className="uppercase text-[#eae7d4] font-bold mb-2">
                    Sign up for updates
                </label>
                <div className="flex flex-col sm:flex-row gap-4">
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="YOUR EMAIL"
                        className="bg-gray-700 text-[#eae7d4] placeholder:text-[#eae7d4] flex-1 placeholder:text-lg p-4 border-none rounded-lg outline-none focus:ring-2 focus:ring-[#eae7d4]"
                    />
                    <button className="p-3 text-[#eae7d4] chunko-bold text-xl tracking-widest bg-gray-700 rounded-lg hover:scale-105 duration-300 cursor-pointer whitespace-nowrap">
                        GO
                    </button>
                </div>
            </div>
        </section>
    )
}