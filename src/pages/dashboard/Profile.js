import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Layout from '../../components/dashboard/Layout'
import { BASE_URL } from '../../utils/config'

const Profile = () => {

    const userToken = localStorage.getItem('user_token')
    const { reset, register, handleSubmit, formState: { errors } } = useForm()
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        const getProfile = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/api/user/getProfile`, {
                    headers: {
                        Authorization: userToken
                    }
                })
                const inputForm = {
                    username: response.data.result.username,
                    email: response.data.result.email,
                    name: response.data.result.name,
                    interest: response.data.result.interest,
                    portfolio_link: response.data.result.portfolio_link,
                    phone: response.data.result.phone,
                    address: response.data.result.address,
                    birthday: response.data.result.birthday,
                    description: response.data.result.description
                }
                reset({ ...inputForm })
            } catch (error) {
                console.log(error)
            }
        }
        getProfile()
    }, [userToken, reset])

    const onSubmit = async (data) => {
        console.log(data)
        setLoading(true)

        try {
            const response = await axios.post(`${BASE_URL}/api/user/updateProfile`, data, {
                headers: {
                    Authorization: userToken
                }
            })
            console.log(response)
            setSuccess(true)
            window.scrollTo({ top: 0, behavior: 'smooth' })
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Layout>
            <div className="mb-4">Profil</div>

            {
                success && (
                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                        <FontAwesomeIcon icon={faCheckCircle} />
                        <span className="ms-2">Data profil berhasil diupdate</span>
                        <button onClick={() => setSuccess(false)} type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                )
            }

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group mb-3">
                    <label htmlFor="namaLengkap" className="form-label">Nama Lengkap</label>
                    <input {...register('name', { required: true })} type="text" className="form-control" placeholder="Masukan nama lengkap" id="namaLengkap" />
                    {errors.name && errors.name.type === 'required' && <small className="text-danger">Nama lengkap harus diisi</small>}
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input {...register('username')} type="text" className="form-control" id="username" disabled />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input {...register('email')} type="email" className="form-control" id="email" disabled />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="nomorHP" className="form-label">Nomor HP</label>
                    <input {...register('phone', { required: false })} type="text" className="form-control" placeholder="Masukan nomor HP" id="phone" />
                    {errors.phone && errors.phone.type === 'required' && <small className="text-danger">Nomor HP harus diisi</small>}
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="alamat" className="form-label">Alamat</label>
                    <input {...register('address', { required: false })} type="text" className="form-control" placeholder="Masukan alamat" id="alamat" />
                    {errors.address && errors.address.type === 'required' && <small className="text-danger">Alamat harus diisi</small>}
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="birthday" className="form-label">Tanggal Lahir</label>
                    <input {...register('birthday', { required: false })} type="date" className="form-control" placeholder="Masukan alamat" id="alamat" />
                    {errors.birthday && errors.birthday.type === 'required' && <small className="text-danger">Tanggal lahir harus diisi</small>}
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="interest" className="form-label">Interest</label>
                    <input {...register('interest', { required: false })} type="text" className="form-control" placeholder="Masukan interest" id="interest" />
                    {errors.interest && errors.interest.type === 'required' && <small className="text-danger">Interest harus diisi</small>}
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="deskripsi" className="form-label">Deskripsi</label>
                    <input {...register('description', { required: false })} type="text" className="form-control" placeholder="Masukan deskripsi" id="deskripsi" />
                    {errors.description && errors.description.type === 'required' && <small className="text-danger">Deskripsi harus diisi</small>}
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="portfolioLink" className="form-label">Link Portofolio</label>
                    <input {...register('portfolio_link', { required: false })} type="text" className="form-control" placeholder="Masukan link portofolio" id="portfolioLink" />
                    {errors.portfolio_link && errors.portfolio_link.type === 'required' && <small className="text-danger">Link portofolio harus diisi</small>}
                </div>
                <div className="form-group text-end">
                    <button className="btn btn-primary">
                        {loading ? (<div class="spinner-border spinner-border-sm" role="status"></div>) : 'simpan'}
                    </button>
                </div>
            </form>
        </Layout>
    )
}

export default Profile