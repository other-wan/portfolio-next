
import Footer from "components/views/Footer";
import Header from "components/views/Header";


const Layout = ({ main }) => {

    return ( 
        <div id='App'>
            <Header/>
            <main>{main}</main>
            <Footer />
        </div>
     );
}
 
export default Layout;
