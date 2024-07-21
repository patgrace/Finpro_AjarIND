import Link from 'next/link';
import { FaBook } from 'react-icons/fa';

type NavItem = {
    href: string;
    label: string;
    subItems?: NavItem[];
};

function Header() {
    const navItems: NavItem[] = [
        { href: "/learningcenter", label: "Learning Center" },
        { href: "/mission", label: "Mission" },
        { href: "/studygoals", label: "Study Goals" },
        { href: "/tuti", label: "TUTI" },
    ];

    return (
         <header className="flex justify-between items-center bg-gradient-to-r from-blue-500 to-teal-500 p-4">
                <div className="text-white text-2xl">
                    <div className="flex items-center">
                        <FaBook className="text-2xl mr-2" />
                        <span>AjarIND</span>
                    </div>
                </div>
                <nav className="flex space-x-4">
                    {navItems.map((item) => (
                        <div key={item.href} className="relative group ">
                            <Link href={item.href} legacyBehavior>
                                <a className="text-black p-6">{item.label}</a>
                            </Link>
                            {item.subItems && (
                                <div className="absolute hidden group-hover:block bg-white text-black mt-1 rounded shadow-lg">
                                    {item.subItems.map((subItem) => (
                                        <Link key={subItem.href} href={subItem.href} legacyBehavior>
                                            <a className="block px-4 py-2 hover:bg-gray-200">{subItem.label}</a>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>
                <div className="text-black">
                    <Link href="/login" legacyBehavior>
                        <a className="mr-2">Login</a>
                    </Link>
                    /
                    <Link href="/register" legacyBehavior>
                        <a className="ml-2">Register</a>
                    </Link>
                </div>
            </header>
    );
}
export { Header };

export default Header;