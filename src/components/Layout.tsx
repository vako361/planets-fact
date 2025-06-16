import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useParams } from "react-router-dom";
export default function Layout(){
    const params = useParams()
return(
    <div>
        <Header />
        <Outlet />
    </div>
)
}