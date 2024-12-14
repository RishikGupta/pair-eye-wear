import React from "react";
import bannerImage from "../assets/eyeglasses_home_banner.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomePage = () => {
    return (
        <div>
            <Header bannerImage={bannerImage} title={"Stylish Glasses for Every Occasion"} />
            <main>
                <section>
                    <h2>The Benefits of Stylish Glasses</h2>
                    <p>
                        Glasses have transcended their role as mere vision aids to become
                        essential fashion accessories. Stylish glasses are the perfect
                        blend of functionality and aesthetics, making them a must-have for
                        everyone. From affordable options to premium designs, modern
                        eyewear caters to diverse tastes and needs.
                    </p>
                    <p>
                        Whether you’re working from home or stepping out, your eyewear
                        speaks volumes about your personality. Stylish glasses not only
                        enhance your appearance but also boost confidence. With advanced
                        technologies, today’s eyewear options are lightweight, durable, and
                        customizable to fit any face shape or size.
                    </p>
                </section>
                <section>
                    <h2>Affordability Without Compromise</h2>
                    <p>
                        Finding stylish yet affordable glasses is easier than ever. Online
                        retailers provide a wide range of options to suit every budget.
                        From simple frames to trendy designs, you can find glasses that
                        match your style without breaking the bank.
                    </p>
                    <p>
                        Shopping for glasses online in Canada is convenient and often more
                        affordable compared to traditional stores. Many websites offer
                        virtual try-on features, allowing you to see how different frames
                        look on your face before purchasing. This saves time, money, and
                        effort while ensuring you pick the perfect pair.
                    </p>
                </section>
                <section>
                    <h2>Protect Your Eyes with Blue Light Glasses</h2>
                    <p>
                        With increasing screen time, blue light glasses have become
                        essential. These glasses are designed to block harmful blue light
                        emitted by digital devices, reducing eye strain and improving sleep
                        quality. Stylish blue light glasses combine fashion and function,
                        giving you the best of both worlds.
                    </p>
                    <p>
                        Whether you’re working on a computer or binge-watching your
                        favorite shows, blue light glasses ensure comfort and protect your
                        eyes. Many brands offer stylish designs, so you don’t have to
                        sacrifice your look for practicality.
                    </p>
                </section>
                <section>
                    <h2>Tips for Choosing the Right Eyewear</h2>
                    <ul>
                        <li>
                            <strong>Face Shape:</strong> Consider your face shape to choose
                            frames that complement your features. Round faces look great with
                            angular frames, while square faces benefit from rounder designs.
                        </li>
                        <li>
                            <strong>Skin Tone:</strong> Pick frame colors that match your skin
                            tone. Warm tones pair well with gold and earthy hues, while cool
                            tones suit silver and bold shades.
                        </li>
                        <li>
                            <strong>Lifestyle:</strong> For active lifestyles, opt for
                            durable materials like acetate or titanium. For a professional
                            look, choose sleek, minimalistic designs.
                        </li>
                    </ul>
                </section>
                <section>
                    <h2>Convenience of Shopping in Canada</h2>
                    <p>
                        Shopping for glasses in Canada is seamless thanks to the numerous
                        online and in-store options available. Canadian retailers provide
                        competitive pricing, quick delivery, and excellent customer
                        service. Many offer free shipping, easy returns, and warranty
                        coverage, making the experience hassle-free.
                    </p>
                    <p>
                        Online stores also feature advanced search filters, enabling you to
                        find glasses based on frame shape, material, and price range.
                        Whether you’re searching for “glasses near me” or browsing online
                        stores, you’re sure to find stylish glasses tailored to your needs.
                    </p>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;
