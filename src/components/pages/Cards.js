import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Daftar Cerita</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/siKancil/kancil-cover.jpg'
              text='Kancil dan Buaya'
              label='Fabel'
              path='/fabel'
              description='Dikisahkan pada suatu hari yang terik kancil merasa haus dan kelaparan, tubuhnya terasa lemah setelah seharian tak menemukan makanan, hingga ia tiba di suatu sungai yang airnya cukup....'
            />
            <CardItem
              src='images/malinKundang/malin-cover.jpg'
              text='Kisah Malin Kundang, Anak yang Durhaka'
              label='Legenda'
              path='/legenda'
              description='Zaman dahulu kala ada sebuah cerita di sebuah perkampungan nelayan Pantai Air Manis di Padang, Sumatera Barat. Ada seorang janda bernama Mande Rubayah yang hidup bersama anak laki-lakinya yang bernama Malin Kundang.....'
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src='images/abuNawas/nawas-cover.jpg'
              text='Abu Nawas Memenjarakan Angin'
              label='Jenaka'
              path='/jenaka'
              description='suatu hari di istana yang megah tempat baginda raja tinggal, sang baginda mengalami kesakitan di area perutnya sang pengawal mencari tabib untuk mengetahui penyakit sang raja....'
            />
            <CardItem
              src='images/siKancil/kancil-cover.jpg'
              text='Kancil dan Buaya'
              label='Fabel'
              path='/fabel'
              description='Dikisahkan pada suatu hari yang terik kancil merasa haus dan kelaparan, tubuhnya terasa lemah setelah seharian tak menemukan makanan, hingga ia tiba di suatu sungai yang airnya cukup....'
            />
            <CardItem
              src='images/malinKundang/malin-cover.jpg'
              text='Kisah Malin Kundang, Anak yang Durhaka'
              label='Legenda'
              path='/legenda'
              description='Zaman dahulu kala ada sebuah cerita di sebuah perkampungan nelayan Pantai Air Manis di Padang, Sumatera Barat. Ada seorang janda bernama Mande Rubayah yang hidup bersama anak laki-lakinya yang bernama Malin Kundang.....'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
