// components/ShortcutList.tsx
import { Shortcut } from "@/app/types/Shortcut";
interface ShortcutListProps {
    title: string;
    shortcuts: Shortcut[];
}

const ShortcutList: React.FC<ShortcutListProps> = ({ title, shortcuts }) => (
    <div>
        <h4>{title}</h4>
        <ul>
            {shortcuts.map((shortcut) => (
                <li key={shortcut.name}>
                    <a href={shortcut.url}>{shortcut.name}</a>
                </li>
            ))}
        </ul>
    </div>
);

export default ShortcutList;
