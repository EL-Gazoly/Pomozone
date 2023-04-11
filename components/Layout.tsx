import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <>
        
        <div className="container">
            {children}

            <div className="footer flex flex-col items-center">
                <Footer/>
            </div>

            
        </div>
        </>
      );
}
 
export default Layout;