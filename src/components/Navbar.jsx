
const Navbar = () => {
  return (
    <div className="bg-slate-500">
      <ul className="flex justify-between">
        <li className="cursor-pointer font-bold p-6 m-5 text-white text-4xl">Logo</li>
        <li className="cursor-pointer font-bold p-6 m-5 text-white text-4xl">Search</li>
        <ul className="flex justify-between space-x-5 text-3xl text-white p-6 m-5">
          <li className="cursor-pointer font-extralight">Home</li>
          <li className="cursor-pointer font-extralight">About</li>
          <li className="cursor-pointer font-extralight">Services</li>
          <li className="cursor-pointer font-extralight">Contact</li>
        </ul>
      </ul>
    </div>
  )
}

export default Navbar