import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"
import Header from "../components/common/Header";

const PrivatRoutes = () => {
    const { auth } = useAuth();

    return (
        <>
            {
                auth.user ? (<main className="mx-auto max-w-[1020px] py-8">
                    <div className='mb-6 space-y-2.5'>
                        <Header></Header>
                        <Outlet></Outlet>
                    </div>
                </main>) : (<Navigate to="/login"></Navigate>)
            }
        </>
    )
}

export default PrivatRoutes