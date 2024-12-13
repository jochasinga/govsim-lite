export const NavBar = () => (
    <div className="navbar bg-base-100">
        <div className="flex-1">
            <a className="btn btn-ghost text-xl">govsim v0.1</a>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
            <li><a>Tech FIP</a></li>
            <li><a>Community</a></li>
            <li><a>Security</a></li>
            <li>
                <details>
                <summary>More</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                    <li><a>Link 1</a></li>
                    <li><a>Link 2</a></li>
                </ul>
                </details>
            </li>
            </ul>
        </div>
    </div>
);