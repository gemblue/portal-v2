import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/dashboard/Layout'
import { BASE_URL } from '../../utils/config'

const DownloadHistory = () => {

    const userToken = localStorage.getItem('user_token')
    const [downloads, setDownloads] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getDownloadHistory = async () => {
            setLoading(true)
            try {
                const response = await axios.get(`${BASE_URL}/api/statistic/getDownloadHistories?limit=10&offset=0`, {
                    headers: {
                        Authorization: userToken
                    }
                })
                setDownloads(response.data.results)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        getDownloadHistory()
    }, [userToken])

    return (
        <Layout>
            <div className="mb-3">Riwayat Unduh</div>

            {
                loading
                    ? (
                        <div className="text-center">
                            <div className="spinner-border" role="status"></div>
                            <div>Sedang memuat data</div>
                        </div>
                    )
                    : downloads.length === 0
                        ? (
                            <div className="text-center my-5">
                                <img
                                    width="60"
                                    src="/assets/image/catalog/not-found.png"
                                    className="img-fluid"
                                    alt="Not found"
                                />
                                <div className="text-center mt-2">Belum ada histori unduh buku</div>
                            </div>
                        )
                        : (
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>Nama Buku</th>
                                            <th>Tipe Buku</th>
                                            <th>Jenjang</th>
                                            <th>Cover</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            downloads.map((book, index) => {
                                                return (
                                                    <tr>
                                                        <td>{index + 1}</td>
                                                        <td>{book.title}</td>
                                                        <td>{book.book_type}</td>
                                                        <td>{book.level}</td>
                                                        <td>
                                                            <Link to={`/katalog/${book.slug}`}><img src={book.image} width={100} alt={book.title} /></Link>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        )
            }
        </Layout>
    )
}

export default DownloadHistory