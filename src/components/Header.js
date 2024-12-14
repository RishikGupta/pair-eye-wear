import { Link } from "react-router-dom";

const Header = ({ bannerImage, title }) => {
    return (
        <header>
            <h1>{title}</h1>
            <nav>
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/kids-eyeglasses">Kids Eyeglasses</Link>
                    <Link to="/accessories">Accessories</Link>
                    <Link to="/sunglasses-men">Men's Sunglasses</Link>
                    <Link to="/color-rotator">Color Rotator</Link>
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