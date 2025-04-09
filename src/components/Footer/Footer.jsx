import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#00355E] text-white py-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.skyscanner.co.in/in/en-us/inr/hotels/directory"
                  id="hotels-cities"
                  className="hover:underline"
                >
                  Hotels directory
                </a>
              </li>
              <li>
                <a
                  className="hover:underline"
                  href="https://www.skyscanner.co.in/in/en-us/inr/flights"
                  id="flights-home"
                >
                  Flights
                </a>
              </li>
              <li>
                <a
                  className="hover:underline"
                  href="https://www.skyscanner.co.in/in/en-us/inr/hotels"
                  id="hotels-home"
                >
                  Hotels Deals in Popular Cities
                </a>
              </li>
              <li>
                <a
                  className="hover:underline"
                  href="https://www.skyscanner.co.in/in/en-us/inr/car-rental"
                  id="car-hire-home"
                >
                  Car rental
                </a>
              </li>
              <li>
                <a
                  className="hover:underline"
                  href="https://www.skyscanner.co.in/in/en-us/inr/travel-insurance"
                  id="travel-insurance"
                >
                  Travel insurance
                </a>
              </li>
              <li>
                <a
                  className="hover:underline"
                  href="https://www.skyscanner.co.in/in/en-us/inr/mobile.html"
                  id="mobile-apps"
                >
                  App
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Partners</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.partners.skyscanner.net/"
                  id="work-with-us"
                  className="hover:underline"
                >
                  Work with us
                </a>
              </li>
              <li>
                <a
                  href="https://www.partners.skyscanner.net/advertising/advertise-with-skyscanner"
                  id="advertising"
                  className="hover:underline"
                >
                  Advertise with us
                </a>
              </li>
              <li>
                <a
                  href="https://www.partners.skyscanner.net/insights/travel-insight"
                  id="travel-insight"
                  className="hover:underline"
                >
                  Travel Insight
                </a>
              </li>
              <li>
                <a
                  href="https://www.partners.skyscanner.net/affiliates/affiliate-products"
                  id="affiliates"
                  className="hover:underline"
                >
                  Affiliates
                </a>
              </li>
              <li>
                <a
                  className="hover:underline"
                  href="https://www.partners.skyscanner.net/affiliates/travel-apis"
                  id="api"
                >
                  Travel APIs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.skyscanner.co.in/in/en-us/inr/about-us"
                  id="about-skyscanner"
                  className="hover:underline"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="https://www.skyscanner.co.in/in/en-us/inr/about-us/why-skyscanner"
                  id="customer-charter"
                  className="hover:underline"
                >
                  Why Skyscanner?
                </a>
              </li>
              <li>
                <a
                  href="https://www.skyscanner.co.in/in/en-us/inr/media"
                  id="media-index"
                  className="hover:underline"
                >
                  Media
                </a>
              </li>
              <li>
                <a
                  href="https://www.skyscanner.co.in/in/en-us/inr/about-us/our-people"
                  id="meet-the-team"
                  className="hover:underline"
                >
                  Our people
                </a>
              </li>
              <li>
                <a
                  href="https://www.skyscanner.co.in/in/en-us/inr/about-us/accessibility"
                  id="accessibility"
                  className="hover:underline"
                >
                  Accessibility
                </a>
              </li>
              <li>
                <a
                  href="https://www.skyscanner.co.in/in/en-us/inr/about-us/sustainable"
                  id="sustainability"
                  className="hover:underline"
                >
                  Sustainability
                </a>
              </li>
              <li>
                <a
                  href="https://www.skyscanner.co.in/in/en-us/inr/about-us/brand"
                  id="brand"
                  className="hover:underline"
                >
                  Brand story
                </a>
              </li>
              <li>
                <a href="/company-details" id="company-details" className="hover:underline">
                  Company Details
                </a>
              </li>
              <li>
                <a href="https://www.skyscanner.net/jobs" id="jobs" className="hover:underline">
                  Jobs
                </a>
              </li>
              <li>
                <a
                  href="https://www.skyscanner.co.in/in/en-us/inr/media/cookie-policy"
                  rel="nofollow"
                  id="cookie-policy"
                  className="hover:underline"
                >
                  Cookie policy
                </a>
              </li>
              <li>
                <a
                  href="https://www.skyscanner.co.in/in/en-us/inr/media/privacy-policy"
                  rel="nofollow"
                  id="privacy-policy"
                  className="hover:underline"
                >
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="/terms-of-service" id="terms-of-service" className="hover:underline">
                  Terms of service
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://hotelshelp.skyscanner.net/hc/en-us?skyCurrency=currency_gbp&amp;skyLanguage=lang_en&amp;skyMarket=in_skyscanner"
                  className="hover:underline"
                >
                  Help
                </a>
              </li>
              <li>
                <a
                  href="/privacy-settings"
                  target="_blank"
                  rel="nofollow"
                  id="ss-footer-links-privacy-settings"
                  className="hover:underline"
                >
                  Privacy settings
                </a>
              </li>
              <li>
                <a
                  href="/security"
                  target="_blank"
                  id="ss-footer-links-security-page"
                  className="hover:underline"
                >
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="py-4 border-t border-gray-700 text-center text-sm">
          <p>Compare and book cheap flights with Skyscanner</p>
          <p>© Skyscanner Ltd 2002 - {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;