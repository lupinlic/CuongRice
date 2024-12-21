import Header from "./Header";
import Footer from "./Footer";
function User({ children }) {
    return (
        <div >
            <Header />
            <div className="" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>{children}</div>
            <Footer />
        </div>
    );
}
export default User;