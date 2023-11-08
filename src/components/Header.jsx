import Nav from './Nav';

function Header(props) {
    const { currentTab, handleTabChange } = props;

    return (
        <div>
            <section>
                <header className='Navbar'>
                    <div>
                        <Nav
                            currentTab={currentTab}
                            handleTabChange={handleTabChange}
                        ></Nav>
                    </div>
                </header>
            </section>
        </div>
    );
}

export default Header;