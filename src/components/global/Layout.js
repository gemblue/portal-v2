import Footer from '../footer/Footer'
import Navbar from '../navbar'

const Layout = ({ children, guide }) => {

    // Handle night mode in navbar
    let nightMode = false
    let hours = (new Date()).getHours();
    hours >= 18 && (nightMode = true)

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