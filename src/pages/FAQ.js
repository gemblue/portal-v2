import React from 'react'
import Layout from '../components/global/Layout'

const FAQ = () => {
    return (
        <Layout>
            <section className="py-5">
                <div className="container">
                    <h3>Sering Ditanyakan</h3>

                    Berikut adalah daftar pertanyaan yang sering ditanyakan <br /><br />

                    <span className="fw-bold">Apa itu buku Kemendikbudristek?</span> <br />

                    Buku-buku yang dikembangkan dan diterbitkan oleh unit-unit kerja di Kementerian Pendidikan, Kebudayaan, Riset dan Teknologi untuk kebutuhan siswa, guru, atau masyarakat Indonesia. <br /><br />

                    <span className="fw-bold">Bagaimana cara mendaftar di SIBI?</span> <br />

                    Silahkan klik Daftar di bagian pojok kanan atas, lalu isi formulir dengan lengkap menggunakan data sebenarnya. Lalu klik tombol Daftar di bagian bawah. Proses pendaftaran selesai. <br /><br />

                    <span className="fw-bold">Siapakah Pelaku Perbukuan?</span> <br />

                    Pelaku perbukuan terdiri atas Penulis, Penerjemah, Penyadur, Editor, Desainer, Ilustrator, Pencetak, Pengembang Buku Elektronik, Penerbit, dan Toko Buku. <br /><br />

                    <span className="fw-bold">Mengapa saya tidak menerima email konfirmasi setelah mendaftar?</span> <br />

                    Karena mungkin email kamu tidak aktif, salah memasukan email ketika mendaftar, atau mungkin masuk ke folder promosi atau spam di email kamu. <br /><br />

                    <span className="fw-bold">Apakah boleh mencetak buku yang ada di SIBI?</span> <br />

                    Buku yang diunggah di SIBI merupakan buku yang diterbitkan oleh Pemerintah Indonesia, sehingga masyarakat Indonesia diizinkan memanfaatkan buku ini termasuk mengunduh dan mencetaknya. Namun, jika akan diperjual belikan, dilarang menjual lebih dari harga eceran tertinggi (HET) yang tertera di sampul belakang buku. <br /><br />

                    <span className="fw-bold">Bagaimana caranya agar buku saya dapat dinilai?</span> <br />

                    Daftar ke sistem penilaian pada tautan berikut http://penilaian.buku.kemdikbud.go.id/ pada jadwal yang sudah ditentukan. Kemudian tunggu konfirmasi selanjutnya dari pihak penilaian. <br /><br />

                    <span className="fw-bold">Apa itu buku teks dan buku non teks?</span> <br />

                    Buku teks merupakan buku yang dapat digunakan dalam pembelajaran di sekolah. Sedangkan buku non teks adalah buku umum dengan berbagai tema pembahasan.
                </div>
            </section>
        </Layout>
    )
}

export default FAQ