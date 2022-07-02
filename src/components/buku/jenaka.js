import React from 'react';
import './fabel.css';

function Jenaka() {
  return (
    <div className="jenaka">
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="images/abuNawas/nawas-1.jpg" className="carousel-img" />
            <p className='description-story text-center mt-3'>
            Suatu hari di istana yang megah tempat baginda raja tinggal, sang baginda mengalami kesakitan di area perutnya
            <br/>sang pengawal mencari tabib untuk mengetahui penyakit sang raja
            <br/>sang tabib berkata "ada angin berlebih yang ada di perut anda"
            <br/>raja pun kesal dengan angin itu, hingga akhirnya sang raja memutuskan untuk memenjarakan angin tersebut
            <br/>semua orang tidak dapat menyanggupi perintah sang raja
            <br/>mereka terheran dan bilang bahwa sangat mustahil untuk memenjarakan angin 
            <br/>hingga akhirnya dipanggil lah abu nawas ke istana
            </p>
          </div>
          <div className="carousel-item">
            <img src="images/abuNawas/nawas-2.jpg" className="carousel-img" />
            <p className='description-story text-center mt-3'>
            Akhir-akhir ini aku sering mendapat gangguan perut.
            <br/>Kata tabib pribadiku, aku kena serangan angin," ucap Baginda Raja memulai pembicaraan.
            <br/>Ampun, Tuanku, apa yang bisa hamba lakukan hingga hamba dipanggil?" tanya Abu Nawas.
            <br/>"Aku hanya menginginkan engkau menangkap angin da memenjarakannya," kata Baginda Raja kali ini menantang Abu Nawas.
            </p>
          </div>
          <div className="carousel-item">
            <img src="images/abuNawas/nawas-3.jpg" className="carousel-img"/>
            <p className='description-story text-center mt-3'>
            Tentu saja Abu Nawas bingung bukan kepalang mendapat tugas menangkap serta memenjarakan angin.
            <br/>Kalaupun berhasil, dia tidak yakin bahwa yang ditangkapnya itu angin, karena tidak kelihatan
            <br/>Tapi bukan Abu Nawas jika tidak mempunyai banyak akal. Setelah diberi waktu tiga hari, Abu Nawas kembali menuju istana.
            </p>
          </div>
          <div className="carousel-item">
            <img src="images/abuNawas/nawas-4.jpg" className="carousel-img"/>
            <p className='description-story text-center mt-3'>
            "Sudahkah engkau berhasil memenjarakan angin, hai Abu Nawas?” tanya Baginda Raja tanpa basa-basi lagi.
            <br/>"Sudah Baginda Raja yang mulia," jawab Abu Nawas membuat orang-orang di istana penasaran.
            <br/>Pria yang dikenal dengan seribu akalnya itu mengeluarkan botol yang sudah disumbat. 
            <br/>Kemudian Abu Nawas menyerahkan botol tersebut.
            <br/>"Mana angin itu, hai Abu Nawas?" tanya Baginda sambil menimbang-nimbang botol tersebut.
            <br/>"Di dalam, Baginda Raja yang mulia," jawab Abu Nawas.
            <br/>"Aku tidak melihat apa-apa," kata Baginda Raja
            </p>
          </div>
          <div className="carousel-item">
            <img src="images/abuNawas/nawas-5.jpg" className="carousel-img"/>
            <p className='description-story text-center mt-3'>
            Setelah tutup botol dibuka, Baginda Raja mencium bau busuk.
            <br/>Bau tersebut tidak asing bagi Raja karena bau yang menyengat hidung itu adalah bau kentut.
            <br/>"Bau apa ini, hai Abu Nawas?" tanya Baginda Raja marah.
            </p>
          </div>
          <div className="carousel-item">
            <img src="images/abuNawas/nawas-6.jpg" className="carousel-img"/>
            <p className='description-story text-center mt-3'>
            "Ampun Tuanku, tadi hamba buang angin dan hamba masukkan ke botol.
            <br/>Karena hamba takut angin yang hamba buang itu keluar,
            <br/>"maka hamba memenjarakannya dengan cara menyumbat mulut botol," pungkas Abu Nawas.
            <br/>tetapi baginda tidak jadi marah karena penjelasan abu nawas masuk akal
            <br/>dan untuk kesekian kalinya abu nawas pun selamat
            </p>
          </div>
          <div className="carousel-item">
            <img src="images/the-end.gif" className="carousel-img"/>
            <p className='description-story text-center mt-3'>
            Pesan dari kisah ini adalah setiap pekerjaan yang mustahil dilakukan adakalanya dikerjakan dengan ide yang diluar kepala.
            </p>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
    </div>
</div>
  );
}

export default Jenaka;