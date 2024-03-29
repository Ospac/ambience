import Link from "next/link"
import Search from "./Search";

export default function Header(){
    const isSearch = true;
    return <div>
    {
        isSearch? <Search /> 
        :
        <nav className="flex flex-row justify-between items-center max-h-48 text-sm py-8 backdrop-blur-md text-stone-800">
            <h1 className="font-normal text-lg"><Link href={'/'}>AMBIENCE</Link></h1>
            <div className="flex flex-row justify-between px-12 gap-3">
                <ul className="flex flex-row justify-between gap-4 text-xl">
                    <li><Link href='music'>music</Link></li>
                    <li><Link href='movie'>movie</Link></li>
                    <li><Link href='book'>book</Link></li>
                </ul>
            </div>
        </nav>
    }
    </div>
}