import React from 'react';

import './Footer.scss';

export default function Footer() {
    return (
        <div>
        <div className="footer-dev">
            <ul>
                <li>Account</li>
                <li>Manage Account</li>
                <li>Saved Items</li>
                <li>Orders & Returns</li>
                <li>Redeem a Gift card</li>

            </ul>

            <ul>
                <li>Company</li>
                <li>About</li>
                <li>Factoires</li>
                <li>Careers</li>
                <li>International</li>
                <li>Accessibility</li>


            </ul>

            <ul>
                <li>Connect</li>
                <li>Contact & FAQ</li>
                <li className="inta">Instagram</li>
                <li className="twit">Twitter</li>
                <li className="face">Facebook</li>
                <li>Bulk Orders</li>
            </ul>

            <ul>
                <li>Vist us</li>
                <li>Find a location nearest</li>
                <li>you. See Our Stores</li>
            </ul>

            <div>
                <span>Exceptional quality. Ethical factories. Radical Transparency. Sign up to enjoy free U.S. 
                shipping and returns on your first order.</span>

                <input type="text" placeholder="Email Address"/>
            </div>



        </div>

        <div className="double-footer">
            <ul>
                <li>2020 All Rights Reserved</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>CA Supply Chain Transparency</li>
                <li>Vendor Code of Conduct</li>
                <li>Sitemap Pages</li>
                <li>Sitemap Products</li>

            </ul>

        </div>
        </div>
    )
}
