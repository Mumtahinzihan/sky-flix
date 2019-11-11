import React from 'react';
import Places from './Places.js';
import alps from './images/Alps.jpg';
import annapurna from './images/Annapurna.jpg';
import mountainUk from './images/Mountain-England.jpg';
import mountainAmerica from './images/Mountain-America.jpg';
import k2 from './images/K2.jpg';
import keokradong from './images/Keokradong.jpg';
import killimanjaro from './images/Killimanjaro.jpg';
import mtEverest from './images/Mt-Everest.jpg';
export default function Mountain(props) {
  return (
    <div className='container'>
      <Places id='mt-Everest' name='Mt Everest' photo={mtEverest} />
      <Places id='killimanzaro' name='Killimanzaro' photo={killimanjaro} />
      <Places id='alps' name='Alps' photo={alps} />
      <Places id='keokaradong' name='Keokaradong' photo={keokradong} />
      <Places id='annapurna' name='Annapurna' photo={annapurna} />
      <Places id='Highest-Mountain-in-Uk' name='Highest Mountain in Uk' photo={mountainUk} />
      <Places id='highest-Mountain-in-North-America' name='Highest Mountain in North-America' photo={mountainAmerica} />
      <Places id='k2' name='K2' photo={k2} />
      <Places id='chimanimani' name='Chimanimani' photo={mtEverest} />
    </div>
  )
}