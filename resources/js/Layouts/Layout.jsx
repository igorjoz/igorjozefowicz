import React from 'react';

// Layout component for Inertia.js
export default function Layout({ children }) {
    const currentYear = new Date().getFullYear();
    
    return (
        <>
            {children}
            
            <footer className="text-white py-16 mt-20">
                <div className="container mx-auto px-4 text-center">
                    <p className="mb-5 text-3xl font-semibold">&copy; {currentYear} Igor Józefowicz</p>
                    <p className="mb-4 text-2xl">
                        Email: <a href="mailto:igor@jozefowicz.pl" className="text-pink-300 hover:text-pink-200 transition-colors underline font-medium">igor@jozefowicz.pl</a>
                    </p>
                    <p className="text-2xl">
                        Phone: <a href="tel:+48535743042" className="text-pink-300 hover:text-pink-200 transition-colors underline font-medium">+48 535 743 042</a>
                    </p>
                </div>
            </footer>
        </>
    );
}
