import Footer from '../footer/Footer'
import Navbar from '../navbar'
import Sidebar from './sections/Sidebar/Sidebar';

const Layout = ({ children, guide }) => {

    // Handle night mode in navbar
    let nightMode = false
    let hours = (new Date()).getHours();
    hours >= 18 || hours <= 6 ? (nightMode = true) : (nightMode = false)

    return (
        <>
            <Navbar nightMode={nightMode} />
            <div style={{ background: '#F0F0F0' }}>
                <div className="container p-4">
                    <div className="row">
                        <div className="col-lg-4">
                            <Sidebar />
                        </div>
                        <div className="col-lg-8 my-3 my-lg-0">
                            <main className="bg-white shadow-sm p-3">
                                {children}
                            </main>
                        </div>
                    </div>

                </div>

            </div>
            <Footer guide={guide} />
        </>
    )
}

export default Layout