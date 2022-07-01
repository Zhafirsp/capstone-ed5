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
              src='images/kancil-1.jpg'
              text='Kancil dan Buaya'
              label='Fabel'
              path='/fabel'
              description='Dikisahkan pada suatu hari yang terik kancil merasa haus dan kelaparan, tubuhnya terasa lemah setelah seharian tak menemukan makanan, hingga ia tiba di suatu sungai yang airnya cukup....'
            />
            <CardItem
              src='images/kancil-1.jpg'
              text='Kancil dan Buaya'
              label='Fabel'
              path='/fabel'
              description='Dikisahkan pada suatu hari yang terik kancil merasa haus dan kelaparan, tubuhnya terasa lemah setelah seharian tak menemukan makanan, hingga ia tiba di suatu sungai yang airnya cukup....'
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src='images/kancil-1.jpg'
              text='Kancil dan Buaya'
              label='Fabel'
              path='/fabel'
              description='Dikisahkan pada suatu hari yang terik kancil merasa haus dan kelaparan, tubuhnya terasa lemah setelah seharian tak menemukan makanan, hingga ia tiba di suatu sungai yang airnya cukup....'
            />
            <CardItem
              src='images/kancil-1.jpg'
              text='Kancil dan Buaya'
              label='Fabel'
              path='/fabel'
              description='Dikisahkan pada suatu hari yang terik kancil merasa haus dan kelaparan, tubuhnya terasa lemah setelah seharian tak menemukan makanan, hingga ia tiba di suatu sungai yang airnya cukup....'
            />
            <CardItem
              src='images/kancil-1.jpg'
              text='Kancil dan Buaya'
              label='Fabel'
              path='/fabel'
              description='Dikisahkan pada suatu hari yang terik kancil merasa haus dan kelaparan, tubuhnya terasa lemah setelah seharian tak menemukan makanan, hingga ia tiba di suatu sungai yang airnya cukup....'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
