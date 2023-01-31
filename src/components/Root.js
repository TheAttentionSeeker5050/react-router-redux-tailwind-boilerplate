import { Outlet } from "react-router-dom";

// import common layout elements
import Footer from "./Footer";
import Header from "./Header";

export default function Root() {
    return (<>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    </>)
}