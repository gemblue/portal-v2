import Footer from '../footer/Footer'
import Navbar from '../navbar'

const Layout = ({ children, guide, nightMode }) => {
    return (
        <>
            <Navbar nightMode={nightMode} />
            <main>
                {children}
            </main>
            <Footer guide={guide} />
        </>
    )
}

export default Layout