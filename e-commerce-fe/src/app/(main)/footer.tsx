import { useState } from "react";
import ShortcutList from "./components/footer/ShortcutList";
import { Shortcut } from "../types/Shortcut";

const Footer: React.FC = () => {
    const [currency, setCurrency] = useState("USD");
    const [language, setLanguage] = useState("en");

    const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCurrency(e.target.value);
    };

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLanguage(e.target.value);
    };

    const shortcuts: Shortcut[] = [
        { name: "Home", url: "/" },
        { name: "About Us", url: "/about" },
        { name: "Contact", url: "/contact" },
    ];

    return (
        <footer className="bg-gray-100 py-8 px-4 mt-12">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">

                <div className="flex flex-col space-y-4 mb-8 md:mb-0">
                    <div className="flex items-center space-x-2">
                        <label className="text-gray-600">Currency:</label>
                        <select
                            value={currency}
                            onChange={handleCurrencyChange}
                            className="border border-gray-300 rounded-md px-2 py-1"
                        >
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                            <option value="JPY">JPY</option>
                            <option value="GBP">GBP</option>
                        </select>
                    </div>
                    <div className="flex items-center space-x-2">
                        <label className="text-gray-600">Language:</label>
                        <select
                            value={language}
                            onChange={handleLanguageChange}
                            className="border border-gray-300 rounded-md px-2 py-1"
                        >
                            <option value="en">English</option>
                            <option value="es">Spanish</option>
                            <option value="fr">French</option>
                            <option value="de">German</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ShortcutList title="Quick Links" shortcuts={shortcuts} />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
