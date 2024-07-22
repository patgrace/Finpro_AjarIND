import Link from 'next/link';
import { FaBook } from 'react-icons/fa';

type NavItem = {
    href: string;
    label: string;
    subItems?: NavItem[];
};

function Header() {
    const navItems: NavItem[] = [
        { href: "/beranda", label: "Beranda" },
        { href: "/learningcenter", label: "Learning Center" },
        { href: "/studygroups", label: "Study Groups" },
        { href: "/tuti", label: "TUTI" },
    ];

    return (
         <header className="flex justify-between items-center bg-gradient-to-r from-purple-500 to-blue-500 p-4">
                <div className="text-white text-2xl">
                    <div className="flex items-center">
                        <FaBook className="text-2xl mr-2" />
                        <span>AjarIND</span>
                    </div>
                </div>
                <nav className="flex space-x-4">
                    {navItems.map((item) => (
                        <div key={item.href} className="relative group ">
                            <Link href={item.href} className="text-black p-6" >
                               {item.label}
                            </Link>
                            {item.subItems && (
                                <div className="absolute hidden group-hover:block bg-white text-black mt-1 rounded shadow-lg">
                                    {item.subItems.map((subItem) => (
                                        <Link key={subItem.href} href={subItem.href} legacyBehavior>
                                            <span className="block px-4 py-2 hover:bg-gray-200">{subItem.label}</span>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>
                <div className="text-black">
                    <Link href="/login" className="mr-2">Login
                    </Link>
                    /
                    <Link href="/register" className="ml-2">Register
                    </Link>
                </div>
            </header>
    );
}
export { Header };

export default Header;