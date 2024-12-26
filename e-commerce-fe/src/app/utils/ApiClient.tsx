import { Configuration, RatingApiFp } from '@/api';
import { BaseAPI } from '@/api/base';
import { AuthApiFp } from '@/api';
import { ProductApiFp } from '@/api';
import { UserApiFp } from '@/api';
import { HealthCheckApiFp } from '@/api';
import { ChatApiFp } from '@/api';
import { OrderApiFp } from '@/api';
import { FileUploadApiFp } from '@/api';


const configuration = new Configuration({
    basePath: 'https://lucas-digital-market-dev.nysm.work',//,'http://localhost:3001'
    baseOptions: {
        withCredentials: true,
    },
});

const Base = new BaseAPI(configuration); // Initialize the API client
export const AuthApi = AuthApiFp(configuration);
export const ProductApi = ProductApiFp(configuration);
export const UserApi = UserApiFp(configuration);
export const HealthCheckApi = HealthCheckApiFp(configuration);
export const ChatApi = ChatApiFp(configuration);
export const OrderApi = OrderApiFp(configuration);
export const FileUploadApi = FileUploadApiFp(configuration);
export const RatingApi = RatingApiFp(configuration);
export default Base;