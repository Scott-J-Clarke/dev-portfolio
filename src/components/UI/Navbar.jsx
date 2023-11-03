export default function Nav({ links }) {
    return (
        <nav className='navbar'>
            <div className='container'>
                <div className='collapse'>
                    <ul className='navbar'>
                        {links.map((link) => (
                            <li key={link.id}>{link}</li>
                            )
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}