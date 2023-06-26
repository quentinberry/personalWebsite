import React from 'react'
import { Typography, Card, Slider, Divider } from 'antd';
import Meta from 'antd/es/card/Meta';

function LanguageCards() {

  const proficiencyMarks = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
  };

  return (
    <div className='languageCards'>
      <Card cover={<img alt='react' src={require('./images/react.png')}/>}
        style={{ 
          width: 200, 
          borderRadius: 12 
          }}
      >
        <Meta title="React"/>
        <Slider marks={proficiencyMarks} min={1} max={5} defaultValue={3} disabled></Slider>
      </Card>
    </div>
  )
}

export default LanguageCards