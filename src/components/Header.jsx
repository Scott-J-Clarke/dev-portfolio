import Nav from './Nav';

function Header(props) {
    const { currentTab, handleTabChange } = props;

    return (
        <div>
            <section>
                <header className='Title'>
                    <div>
                        <h1>Scott Clarke's Portfolio</h1>
                    </div>
                    <div>
                        <Nav
                            currentTab={currentTab}
                            handleTabChange={handleTabChange}
                            ></Nav>
                    </div>
                </header>
            </section>
            
            <section className='Hero'>
                <div className='hero-image'>
                    {/* Insert an image here: */}
                    {/* <img /> */}
                    <h2>Welcome</h2>
                    <p>
                        This is Scott Clarke's portfolio.
                    </p>
                </div>
            </section>

        </div>
    );
}

export default Header;