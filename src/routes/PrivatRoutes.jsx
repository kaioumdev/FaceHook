import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"
import Header from "../components/common/Header";

const PrivatRoutes = () => {
    const { auth } = useAuth();

    return (
        <>
            {
                auth.user ? (
                    <>
                        <Header></Header>
                        <main className="mx-auto max-w-[1020px] py-8">
                            <div className='mb-6 space-y-2.5'>
                                <Outlet></Outlet>
                            </div>
                        </main>
                    </>
                ) : (<Navigate to="/login"></Navigate>)
            }
        </>
    )
}

export default PrivatRoutes