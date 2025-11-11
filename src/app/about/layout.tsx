export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <nav className="fixed right-0 top-10 z-10 h-screen w-64 bg-gray-800 p-5 text-white">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Profile</li>
                </ul>
            </nav>
            <div>{children}</div>
        </div>
    );
}