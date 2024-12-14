const Header = ({ bannerImage, title }) => {
    return (
        <header>
            <h1>{title}</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/kids-eyeglasses">Kids Eyeglasses</a></li>
                    <li><a href="/accessories">Accessories</a></li>
                    <li><a href="/sunglasses-men">Men's Sunglasses</a></li>
                    <li><a href="/color-rotator">Color Rotator</a></li>
                </ul>
            </nav>
            <img
                src={bannerImage}
                alt="Stylish Glasses Banner"
                className="banner-image"
            />
        </header>
    );
}

export default Header;