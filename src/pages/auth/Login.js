import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom'
import Layout from '../../components/global/Layout'
import { BASE_URL } from '../../utils/config/'

const Login = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const { resetField, register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        setLoading(true)
        const payload = JSON.stringify(data)

        try {
            const response = await axios.post(`${BASE_URL}/api/user/login`, payload)

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
                                    <input {...register('password', { required: true })} type="password" className="form-control" placeholder="Masukan kata sandi" />
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