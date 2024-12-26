
type SidebarProps = {
  activeSubPage: string;
  setActiveSubPage: (subPage: string) => void;
};

const Sidebar = ({ activeSubPage, setActiveSubPage }: SidebarProps) => {
  return (
    <div className="w-full h-full bg-white border-r border-gray-300 p-6">
      <ul className="space-y-4 p-4 ml-24">
        <li>
          <button
            onClick={() => setActiveSubPage("findItems")}
            className={`text-lg ${activeSubPage === "findItems"
                ? "font-semibold underline text-black"
                : "text-gray-700 hover:underline"
              }`}
          >
            Find Items
          </button>
        </li>

        <li>
          <button
            onClick={() => setActiveSubPage("findStores")}
            className={`text-lg ${activeSubPage === "findStores"
                ? "font-semibold underline text-black"
                : "text-gray-700 hover:underline"
              }`}
          >
            Find Stores
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
