import Header from "../components/Header"
import Article from "../components/Article"
import Footer from "../components/Footer"
function Home(){
    return(
        <div className="container main-layout">
            <Header className="layout-header"/>
            <Article className="layout-content" />
            <Footer className="layout-footer" />
        </div>
    )
}

export default Home;