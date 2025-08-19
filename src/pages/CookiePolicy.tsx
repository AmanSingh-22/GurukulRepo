import React, { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CookiePolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-20 pb-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-8">Cookie Policy</h1>
        
        <div className="prose prose-lg max-w-none text-foreground/80 space-y-6">
          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-6">
            <p className="font-semibold text-orange-800">
              BY CONTINUING TO USE THIS SITE AND SERVICES, YOU ARE AGREEING TO THE USE OF COOKIES AND SIMILAR TECHNOLOGIES FOR THE PURPOSES WE DESCRIBE IN THIS COOKIE POLICY. IF YOU DO NOT ACCEPT THE USE OF COOKIES AND SIMILAR TECHNOLOGIES, DO NOT USE THIS SITE.
            </p>
          </div>

          <p>
            This Site uses cookies to better the users experience while visiting the Site. Where applicable this Site uses a cookie control system allowing the user on their first visit to the Site to allow or disallow the use of cookies on their computer / device. This complies with recent legislation requirements for Sites to obtain explicit consent from users before leaving behind or reading files such as cookies on a user's computer / device.
          </p>

          <p>
            This Cookie Policy sets out how we, use cookies and similar technologies on this Site. We may update this Cookie Policy from time to time in order to keep you fully informed about our latest practices involving cookies and similar technologies on this Site. You should check this Cookie Policy each time you visit our Site in order to find out whether our use of cookies and similar technologies has changed.
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">ABOUT COOKIES</h2>
            <p>
              Cookies are data files that are sent between web servers and web browsers, processor memory or hard drives (clients) to recognize a particular user's device when the user accesses a website. They are used for a range of different purposes, such as customizing a website for a particular user, helping a user navigate a website, improving that user's website experience, and storing that user's preferences and login information.
            </p>
            
            <p>
              Cookies can be classified as either 'session' or 'persistent' cookies. Session cookies are placed on your browser when you access a website and last for as long as you keep your browser open. They expire when you close your browser.
            </p>
            
            <p>
              Persistent cookies are placed on your computer when you access a website and expire at a fixed point in time or if you manually delete them from your browser, whichever occurs first.
            </p>
            
            <p>
              Cookies will be set either by our Site domain or by third party domains on our behalf. Cookies set by us on our Site domain are referred to as 'first party' cookies. Cookies set by third party domains, or set on or via our domain on behalf of third parties, are referred to as 'third party' cookies.
            </p>
            
            <p>
              Cookies do not usually contain personal information. Cookies may, however, be used in combination with other information to identify you.
            </p>
            
            <p>
              We use first party and third party cookies on our Site, and both session and persistent cookies If you require further information about cookies in general, please visit www.allaboutcookies.org
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">OTHER TRACKING TECHNOLOGIES</h2>
            <p>
              In addition to cookies, we may use web beacons, pixel tags, and other tracking technologies on the Site to help customize the Site and improve your experience. A "web beacon" or "pixel tag" is tiny object or image embedded in a web page or email. They are used to track the number of users who have visited particular pages and viewed emails, and acquire other statistical data. They collect only a limited set of data, such as a cookie number, time and date of page or email view, and a description of the page or email on which they reside. Web beacons and pixel tags cannot be declined. However, you can limit their use by controlling the cookies that interact with them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">CONTROL OF COOKIES</h2>
            <p>
              Most browsers are set to accept cookies by default. However, you can remove or reject cookies in your browser's settings. Please be aware that such action could affect the availability and functionality of the Site.
            </p>
            
            <p>
              For more information on how to control cookies, check your browser or device's settings for how you can control or reject cookies, or visit the following links:
            </p>
            
            <ul className="list-disc ml-6 space-y-2">
              <li>Google Chrome</li>
              <li>Microsoft Edge</li>
              <li>Mozilla Firefox</li>
              <li>Microsoft Internet Explorer</li>
              <li>Opera</li>
              <li>Apple Safari</li>
            </ul>
            
            <p>
              To find information relating to other browsers, visit the browser developer's Site.
            </p>
            
            <p>
              To opt out of being tracked by Google Analytics across all websites, visit http://tools.google.com/dlpage/gaoptout.
            </p>
            
            <p>
              In addition, you may opt-out from cookies by visiting the following websites and selecting which company cookies you would like to opt-out through the Digital Advertising Alliance in the US, the Digital Advertising Alliance of Canada in Canada or the European Interactive Digital Advertising Alliance in Europe. Please note that ad blockers and tools that restrict our cookie use may interfere with these controls.
            </p>
            
            <p>
              If you disable the cookies that we use, this may impact your experience while on our site, for example you may not be able to visit certain areas of our site or you may not receive personalized information when you visit our site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">PRIVACY POLICY</h2>
            <p>
              For more information about how we use information collected by cookies and other tracking technologies, please refer to our Privacy Policy posted on the Site. This Cookie Policy is part of and is incorporated into our Privacy Policy. By using the Site, you agree to be bound by this Cookie Policy and our Privacy Policy.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
