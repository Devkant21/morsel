const Footer = () => {
    return (
        <div className="bg-slate-500 w-full">
            <ul className="flex justify-between">
                <li className="cursor-pointer font-bold p-6 m-5 text-white text-4xl">Logo</li>
                <li className="cursor-pointer font-extralight p-6 m-5 text-white text-4xl">Follow us on:</li>
                <ul className="flex justify-between space-x-5 text-3xl text-white p-6 m-5">
                    <li className="cursor-pointer font-extralight">@2023 All Right reserved</li>
                </ul>
            </ul>
        </div>
    )
}

export default Footer