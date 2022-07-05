import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import Layout from '../../components/global/Layout'
import { BASE_URL } from '../../utils/config/'
import { GoogleLogin } from 'react-google-login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {

    // Check if success from register
    let search = useLocation().search;
    const [params] = useState(new URLSearchParams(search).get('register'))
    const [email] = useState(new URLSearchParams(search).get('email'))
    const [successRegister, setSuccessRegister] = useState(false)

    // Define login state
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const { resetField, register, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        params === 'success' && (setSuccessRegister(true))
    }, [params])

    const onSubmit = async (data) => {
        setLoading(true)

        const googleLogin = data.tokenId !== undefined
        const endpoint = googleLogin ? 'sync' : 'login'
        const payload = googleLogin ? { id_token: data.tokenId } : data

        try {
            const response = await axios.post(`${BASE_URL}/api/user/${endpoint}`, JSON.stringify(payload))
            if (response.data.status == 'failed') {
                setMessage(response.data.message)
            } else {
                setMessage('')
                resetField('email')
                localStorage.setItem('user_token', response.data.token)
                localStorage.setItem('user_profile', JSON.stringify(response.data.result))
                navigate('/')
            }
            resetField('password')
        } catch (error) {
            return error.message
        } finally {
            setLoading(false)
        }
    }

    return (
        <Layout>
            <section className="row justify-content-center pt-2 pt-md-5 p-3 p-md-0" id="login">
                <div className="col-lg-5">
                    <h2 className="text-blue mt-4 mt-md-0">Masuk</h2>
                    <div className="card mt-2 shadow">
                        <div className="card-body p-4">
                            {
                                successRegister && (
                                    <div className="alert alert-success alert-dismissible fade show">
                                        <div>Berhasil mendaftarkan akun, selanjutnya silahkan cek email <span className="fw-bold">{email}</span> untuk aktivasi. Cek folder spam jika email tidak ada di inbox.</div>
                                    </div>
                                )
                            }
                            {
                                message != '' && (
                                    <div className="alert alert-danger alert-dismissible fade show">
                                        {message}
                                    </div>
                                )
                            }
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <label className="form-label fw-bold">ALAMAT EMAIL</label>
                                    <input {...register('email', { required: true })} type="text" className="form-control" placeholder="Masukan alamat email" />
                                    {errors.email && errors.email.type === 'required' && <small className="text-danger">Email harus diisi</small>}
                                </div>
                                <div className="form-group my-4">
                                    <div>
                                        <label className="form-label fw-bold float-start">KATA SANDI</label>
                                        <label className="form-label float-end"><Link to="/forgot-password" className="text-blue text-decoration-none">LUPA KATA SANDI?</Link></label>
                                    </div>
                                    <div class="input-group">
                                        <input {...register('password', { required: true })} type={showPassword ? 'text' : 'password'} className="form-control border-end-0" placeholder="Masukan kata sandi" />
                                        <span onClick={() => setShowPassword(!showPassword)} class="input-group-text bg-white border-start-0 cursor-pointer">
                                            {showPassword ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
                                        </span>
                                    </div>
                                    {errors.password && <small className="text-danger">Password wajib diisi</small>}
                                </div>
                                <div className="form-group d-grid gap-2">
                                    {loading && (
                                        <button type="submit" className="btn btn-orange py-2 disabled">
                                            <div className="spinner-border" role="status"></div>
                                        </button>
                                    )}
                                    {!loading && <button type="submit" className="btn btn-orange py-2">Masuk</button>}
                                </div>
                            </form>
                            <div className="form-group text-center mt-4">
                                <GoogleLogin
                                    clientId="104944373110-hd7umobu1j3k66fnjm82l8gd32vnefm8.apps.googleusercontent.com"
                                    buttonText="Login With Google"
                                    onSuccess={onSubmit}
                                    onFailure={onSubmit}
                                    cookiePolicy={'single_host_origin'}
                                />
                                <div className="my-2">Atau</div>
                                <p className="mb-0">Belum punya akun? <Link to="/registrasi" className="text-decoration-none text-blue"> Daftar disini</Link> </p>
                                <p>Lupa kata sandi? <Link to="/lupa-sandi" className="text-decoration-none text-blue"> Klik disini</Link> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Login