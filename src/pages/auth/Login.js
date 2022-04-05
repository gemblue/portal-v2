import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/global/Layout'

const Login = () => {
    return (
        <Layout>
            <section className="row justify-content-center pt-2 pt-md-5 p-3 p-md-0" id="login">
                <div className="col-lg-5">
                    <h2 className="text-blue mt-5 mt-md-0">Masuk</h2>
                    <div className="card mt-2 shadow">
                        <div className="card-body p-4">
                            <div className="form-group">
                                <label className="form-label">ALAMAT EMAIL</label>
                                <input type="email" className="form-control" placeholder="Masukan alamat email" />
                            </div>
                            <div className="form-group my-4">
                                <div>
                                    <label className="form-label float-start">KATA SANDI</label>
                                    <label className="form-label float-end"><Link to="/forgot-password" className="text-blue text-decoration-none">LUPA KATA SANDI?</Link></label>
                                </div>
                                <input type="password" className="form-control" placeholder="Masukan kata sandi" />
                            </div>
                            <div className="form-group d-grid gap-2">
                                <button className="btn btn-orange py-2">Masuk</button>
                            </div>
                            <div className="form-group text-center mt-4">
                                <p>Belum punya akun? <Link to="/register" className="text-decoration-none text-blue"> Daftar disini</Link> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Login