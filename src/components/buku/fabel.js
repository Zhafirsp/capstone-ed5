import React from 'react';
import './fabel.css';

function Fabel() {
  return (
    <div className="fabel">
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="images/buku/siKancil/kancil-1.jpg" className="carousel-img" />
            <p className='description-story text-center mt-3'>
            Kancil adalah satwa hutan yang terkenal dengan kecerdikannya. Ia sering membantu memecahkan masalah kawan-kawannya
            <br/>Suatu hari, Kancil yang cerdik dan ramah, sedang berjalan-jalan di pinggir hutan 
            <br/>Ia ingin mencari udara segar dan matahari yang cerah.
            <br/>Kancil pun berjemur di bawah terik matahari. 
            <br/>Ia duduk di bawah pohon, tepatnya di dekat sungai. 
            <br/>Setelah minum air sungai, Kancil mendengar suara perutnya. 
            <br/>Ia merasa lelah dan sangat lapar.
            </p>
          </div>
          <div className="carousel-item">
          <img src="images/buku/siKancil/kancil-2.jpg" className="carousel-img" />
            <p className='description-story text-center mt-3'>
            Kancil melihat pohon buah-buahan di seberang sungai 
            <br/>Ia pun membayangkan betapa nikmatnya buah-buahan, terutama mentimun kesukaannya
            <br/>Ia ingin menyeberangi sungai itu untuk mengenyangkannya. 
            <br/>Namun, ia tidak bisa menyeberangi sungai itu karena arusnya cukup deras 
            <br/>Kancil pun memutar otak untuk bisa menyeberang tanpa bahaya.
            <br/>Tiba-tiba, ia mendapat ide cemerlang
            </p>
          </div>
          <div className="carousel-item">
          <img src="images/buku/siKancil/kancil-3.jpg" className="carousel-img" />
            <p className='description-story text-center mt-3'>
            Kancil mendapatkan ide untuk memanggil buaya dan membantunya menyeberangi sungai
            <br/>Saat melihat seekor buaya keluar ke tepi sungai, Kancil mendatanginya dan berteriak.
            <br/>"Buaya, buaya, keluar! Aku punya makanan untukmu." teriak Kancil.
            <br/>Para buaya pun keluar dan bertanya balik.
            <br/>"Hei, Kancil! Ada apa kamu ke sungai? Apa kamu mau menjadi santapan kami?" tanya seekor buaya.
            <br/>Buaya lain bertanya sambil menguap, "Siapa yang teriak siang-siang begini? Mengganggu tidurku saja!" kata buaya lainnya.
            </p>
          </div>
          <div className="carousel-item">
          <img src="images/buku/siKancil/kancil-4.jpg" className="carousel-img" />
            <p className='description-story text-center mt-3'>
            Kancil pun menjawab pertanyaan buaya dengan senang hati, “Aku mempunyai berita baik untuk kalian semua
            <br/>Aku membawa daging segar dari raja dan diperintahkan untuk menghitung jumlah buaya yang ada di sungai
            <br/>Kalian cukup berjajar di sungai dan nanti akan aku hitung.”
            <br/>Para buaya pun senang mendengar kabar dari Kancil.
            <br/>Mereka segera berjajar, seperti membentuk jembatan.
            <br/>Setelah siap, Kancil melompati buaya itu dan sampai ke seberang.
            </p>
          </div>
          <div className="carousel-item">
          <img src="images/buku/siKancil/kancil-5.jpg" className="carousel-img" />
            <p className='description-story text-center mt-3'>
            Begitu sampai seberang sungai, Kancil mengatakan yang sebenarnya kepada buaya.
            <br/>"Hai, buaya-buaya bodoh! Sebetulnya, tidak ada daging segar yang akan aku bagikan.
            <br/>Tidakkah kau lihat bahwa aku tidak membawa sepotong daging pun?” teriaknya.
            <br/>Kancil kemudian berkata lagi, “Sebenarnya aku hanya ingin menyeberangi sungai ini dan aku butuh jembatan untuk lewat.
            <br/>Kalau begitu, kuucapkan terima kasih pada kalian dan mohon maaf kalau aku mengerjai kalian,” kata si Kancil.
            <br/>Buaya pun geram karena merasa dibohongi dan memusuhi Kancil. Namun, Kancil sudah lari menuju pohon buah-buahan itu.
            </p>
          </div>
          <div className="carousel-item">
            <img src="images/the-end.gif" className="carousel-img"/>
            <p className='description-story text-center mt-3'>
            Pesan dari kisah ini adalah gunakan kecerdikanmu bahkan dalam situasi sulit sekalipun karena semua masalah pasti ada jalan keluarnya.
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

export default Fabel;