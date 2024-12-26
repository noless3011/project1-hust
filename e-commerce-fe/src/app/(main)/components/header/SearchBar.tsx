import Link from "next/link";
const SearchBar = () => {
    const categories: string[] = [
        "Electronics",
        "Clothing",
        "Home Appliances",
        "Books",
        "Beauty & Health",
        "Sports & Outdoors",
        "Toys & Games",
        "Groceries",
        "Furniture",
        "Automotive"
    ];
    return (
        <div className="w-full h-[50px] flex flew-row justify-center text-black">
            <table className="bg-transparent w-2/5 h-full table-fixed">
                <tbody>
                    <tr>
                        <td className="p-0">
                            <div className="h-full bg-slate-100 rounded-tl-full rounded-bl-full border-solid border-2 border-black p-2 flex flex-row items-center">
                                <input type="text" className="w-full border-transparent focus:border-transparent focus:outline-none bg-slate-100 ml-2"></input>
                            </div>

                        </td>
                        <td className="p-0 w-[150px]">
                            <select className="w-full h-full bg-slate-100 rounded-tr-full rounded-br-full border-solid border-y-2 border-r-2 border-black p-2 flex flex-row">
                                {categories.map((category, index) => {
                                    return (
                                        <option key={index}>{category}</option>
                                    )
                                })}
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>

            <button className="ml-10 rounded-full w-40 h-full text-white font-bold text-xl bg-darkgreen hover:bg-green">
                Search
            </button>

            <Link href="/advance-search" className="my-auto ml-10 underline hover:text-darkgreen">Advance Search</Link>
        </div>
    )
}

export default SearchBar