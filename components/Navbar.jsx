
import Link from 'next/link'
const Navbar = () => {
    return (
        <header className="bg-white border-b">
            <ul className="mx-auto flex h-16 max-w-screen-xl items-center justify-center gap-8 px-4 sm:px-6 lg:px-8">
                <li className='hover:font-medium'>
                    <Link href="/">Home</Link>
                </li>
                <li className='hover:font-medium'>
                    <Link href="/employees">Employees</Link>
                </li>
            </ul>
        </header>

    )
}

export default Navbar