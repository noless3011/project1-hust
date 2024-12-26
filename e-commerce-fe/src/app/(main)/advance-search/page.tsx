"use client"
import FindItems from "./FindItems"
import { useState } from "react"
import Sidebar from "./Sidebar"
import FindStores from "./FindStores";
import Header from "./Header";

const AdvancedSearchPage = () => {
    const [activeTab] = useState("search");
    const [activeSubPage, setActiveSubPage] = useState("findItems");
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <Header />
            <div className="flex flex-1">
                {/* Sidebar */}
                {activeTab === "search" && (
                    <aside className="w-1/4">
                        <Sidebar
                            activeSubPage={activeSubPage}
                            setActiveSubPage={setActiveSubPage}
                        />
                    </aside>
                )}

                <main className="flex-1 p-8 bg-white">
                    {activeTab === "search" && activeSubPage === "findItems" && <FindItems />}
                    {activeTab === "search" && activeSubPage === "findStores" && <FindStores />}
                </main>
            </div>
        </div>
    );
};

export default AdvancedSearchPage;

