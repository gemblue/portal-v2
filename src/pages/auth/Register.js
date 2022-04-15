import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom'
import Layout from '../../components/global/Layout'
import { BASE_URL } from '../../utils/config'

const Register = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const { resetField, register, getValues, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        setLoading(true)
        const payload = JSON.stringify(data)

        try {
            const response = await axios.post(`${BASE_URL}/api/user/register`, payload)

            if (response.data.status == 'failed') {
                setMessage(response.data.message)
            } else {
                setMessage('')
                navigate(`/login?register=success&email=${getValues('email')}`)
                resetField('email')
            }
            resetField('password')
            resetField('confirm_password')
        } catch (error) {
            return error.message
        } finally {
            setLoading(false)
            setTimeout(() => {
                window.scrollTo({ top: '0', behavior: 'smooth' })
            }, 500)
        }
    }
    return (
        <Layout>
            <section className="row justify-content-center pt-2 pt-md-5 p-3 p-md-0" id="register">
                <div className="col-lg-5">
                    <h2 className="text-blue mt-4 mt-md-0">Registrasi</h2>
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
                                <div className="form-group mb-3">
                                    <label className="form-label fw-bold">NAMA LENGKAP</label>
                                    <input {...register('name', { required: true })} type="text" className="form-control" placeholder="Masukan nama lengkap" />
                                    {errors.name && errors.name.type === 'required' && <small className="text-danger">Nama lengkap harus diisi</small>}
                                </div>
                                <div className="form-group mb-3">
                                    <label className="form-label fw-bold">USERNAME</label>
                                    <input {...register('username', { required: true })} type="text" className="form-control" placeholder="Masukan username" />
                                    {errors.username && errors.username.type === 'required' && <small className="text-danger">Username harus diisi</small>}
                                </div>
                                <div className="form-group mb-3">
                                    <label className="form-label fw-bold">ALAMAT EMAIL</label>
                                    <input {...register('email', { required: true })} type="text" className="form-control" placeholder="Masukan alamat email" />
                                    {errors.email && errors.email.type === 'required' && <small className="text-danger">Email harus diisi</small>}
                                </div>
                                <div className="form-group mb-3">
                                    <label className="form-label fw-bold">NOMOR TELEPON</label>
                                    <input {...register('phone', { required: true })} type="text" className="form-control" placeholder="Masukan nomor telepon" />
                                    {errors.phone && errors.phone.type === 'required' && <small className="text-danger">Nomor telepon harus diisi</small>}
                                </div>
                                <div className="form-group mb-3">
                                    <label className="form-label fw-bold">DAFTAR SEBAGAI</label>
                                    <select {...register('role_id', { required: true })} className="form-select">
                                        <option value="4">Siswa</option>
                                        <option value="6">Guru</option>
                                        <option value="3">Umum</option>
                                    </select>
                                    {errors.role_id && errors.role_id.type === 'required' && <small className="text-danger">Role harus diisi</small>}
                                </div>
                                <div className="form-group my-4">
                                    <div>
                                        <label className="form-label fw-bold float-start">KATA SANDI</label>
                                        <label className="form-label float-end"><Link to="/forgot-password" className="text-blue text-decoration-none">LUPA KATA SANDI?</Link></label>
                                    </div>
                                    <input {...register('password', { required: true })} type="password" className="form-control" placeholder="Masukan kata sandi" />
                                    {errors.password && errors.password.type == "required" && <small className="text-danger">Kata sandi wajib diisi</small>}
                                </div>
                                <div className="form-group my-4">
                                    <div>
                                        <label className="form-label fw-bold">ULANGI KATA SANDI</label>
                                    </div>
                                    <input {...register('confirm_password', { required: true })} type="password" className="form-control" placeholder="Masukan ulang kata sandi" />
                                    {errors.confirm_password && errors.confirm_password.type === 'required' && <small className="text-danger">Konfirmasi kata sandi harus diisi</small>}
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
                                <p>Sudah punya akun? <Link to="/login" className="text-decoration-none text-blue"> Masuk disini</Link> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Register