import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom'
import Layout from '../../components/global/Layout'
import { BASE_URL } from '../../utils/config'

const ForgotPassword = () => {
    // Define login state
    const [loading, setLoading] = useState(false)
    const [messageSuccess, setMessageSuccess] = useState('')
    const [messageFailed, setMessageFailed] = useState('')
    const { resetField, register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        setLoading(true)
        let body = new FormData();
        body.append('email', data.email)
        body.append('source', 'portal')

        axios({
            method: "POST",
            url: BASE_URL + '/api/user/reset_password',
            data: body,
            headers: {
                "Content-type": "multipart/form-data",
            },
        }).then(res => {
            console.log(res);
            resetField('email')
            setMessageFailed('')
            setMessageSuccess(res.data.message)
        }).catch(err => {
            setMessageSuccess('')
            setMessageFailed('Email tidak ditemukan')
        }).finally(() => setLoading(false))
    }
    return (
        <Layout>
            <section className="row justify-content-center pt-2 pt-md-5 p-3 p-md-0" id="login">
                <div className="col-lg-5">
                    <h2 className="text-blue mt-4 mt-md-0">Lupa kata sandi?</h2>
                    <p className="fw-bold">Masukan email yang terdaftar pada situs ini, kami akan mengirimkan tautan untuk memperbaharui kata sandi.</p>
                    <div className="card mt-2 shadow">
                        <div className="card-body p-4">
                            {
                                messageFailed != '' && (
                                    <div className="alert alert-danger alert-dismissible fade show">
                                        {messageFailed}
                                    </div>
                                )
                            }
                            {
                                messageSuccess != '' && (
                                    <div className="alert alert-success alert-dismissible fade show">
                                        {messageSuccess}
                                    </div>
                                )
                            }
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group mb-3">
                                    <label className="form-label fw-bold">ALAMAT EMAIL</label>
                                    <input {...register('email', {
                                        required: true,
                                        pattern: {
                                            value: /\S+@\S+\.\S+/,
                                        }
                                    })} type="text" className="form-control" placeholder="Masukan alamat email" />
                                    {errors.email && errors.email.type === 'required' && <small className="text-danger">Email harus diisi</small>}
                                    {errors.email && errors.email.type === 'pattern' && <small className="text-danger">Email harus valid</small>}
                                </div>
                                <div className="form-group d-grid gap-2">
                                    {loading && (
                                        <button type="submit" className="btn btn-orange py-2 disabled">
                                            <div className="spinner-border" role="status"></div>
                                        </button>
                                    )}
                                    {!loading && <button type="submit" className="btn btn-orange py-2">Kirim</button>}
                                </div>
                            </form>
                            <div className="form-group text-center mt-4">
                                <p className="mb-0">Sudah punya akun? <Link to="/login" className="text-decoration-none text-blue"> Masuk disini</Link> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default ForgotPassword