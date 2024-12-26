import { UserResponseDto } from "@/api";
import { RootState } from "@/app/redux/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

interface AccountInfoProps {
    account: UserResponseDto | undefined
}

const AccountInfo: React.FC<AccountInfoProps> = () => {
    const [username, setUsername] = useState<string>();
    const authInfo = useSelector((state: RootState) => state.auth);
    useEffect(() => {
        setUsername(authInfo.user?.username);
    }, [authInfo])
    return (<div className="flex flex-row items-center gap-2">
        <div className="h-10 aspect-square rounded-full overflow-hidden">
            <img
                src="https://picsum.photos/300/300"
                alt="avatar"
                className="w-full h-full object-contain rounded-t-lg "
            />
        </div>
        <div className="w-fit">
            {username}
        </div>
    </div>)
}

export default AccountInfo;

