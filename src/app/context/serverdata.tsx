import {AppWrapper} from './index'
import { FetchImages } from '../api/FetchData'

interface ServerDataProps {
    children: any
}

const ServerData:React.FC<ServerDataProps> = async ({children}) =>{
const data = await FetchImages()

return (
    <AppWrapper value={data}>
        {children}
    </AppWrapper>
)
}

export default ServerData