import Footer from '../footer/Footer'
import Navbar from '../navbar'

const Layout = ({ children, guide }) => {
    return (
        <>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer guide={guide} />
        </>
    )
}

export default Layout