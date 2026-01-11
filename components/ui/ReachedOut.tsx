type Props = {
  textColor: string
  bgColor: string
}

export default function ReachedOut({ textColor, bgColor }: Props) {
  const fieldStyle = {
    backgroundColor: bgColor,
    border: `2px solid ${textColor}`,
    '--placeholder-color': textColor,
  } as React.CSSProperties

  return (
    <div style={{ color: textColor }}>

      <div className="flex lg:flex-row flex-col text-sm">
        <input
          type="text"
          placeholder="FULL NAME"
          style={fieldStyle}
          className="lg:w-[21vw] w-[80vw] h-[3rem] font-semibold p-2 rounded-lg outline-none m-2 custom-input"
        />

        <input
          type="email"
          placeholder="EMAIL"
          style={fieldStyle}
          className="lg:w-[21vw] w-[80vw] h-[3rem] font-semibold p-2 rounded-lg outline-none m-2 custom-input"
        />
      </div>

      <div className="flex flex-col items-center">
        <textarea
          placeholder="MESSAGE"
          style={fieldStyle}
          className="lg:w-[43vw] w-[80vw] h-[10rem] font-semibold p-2 rounded-lg outline-none m-2 custom-textarea"
        />

        <button className="group bg-red-500 rounded-lg px-6 py-3 overflow-hidden lg:w-[43vw] w-[80vw]">
          <span className="inline-block text-2xl font-black tracking-wider text-[#eae7d4] transition-transform duration-300 group-hover:scale-150">
            SEND
          </span>
        </button>
      </div>

    </div>
  )
}
