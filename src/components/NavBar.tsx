export default function NavBar() {
  const bar = ['WORK', 'NEWS', 'ABOUT', 'CONTACT'];
  return (
    <nav className="flex border-2 border-[#eae7d4] rounded-sm p-2 justify-between text-[#eae7d4]">
      <p>Cars</p>
      <ul className="flex gap-12 mr-8 font-black text-xl">
        {bar.map(word => (
          <li key={word} className="cursor-pointer">{word}</li>
        ))}
      </ul>
    </nav>
  );
}
