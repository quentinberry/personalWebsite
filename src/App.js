import './App.css';
import { Typography, Card, Slider, Divider } from 'antd';
import Meta from 'antd/es/card/Meta';
import LanguageCards from './LanguageCards';

const { Title, Text } = Typography;

function App() {

  

  return (
    <div className="App">
      <div className='landingPage'>
        <Typography>
          <Title level={1}>Quentin Berger</Title>
          <Title level={4}>Greetings, I am Quentin, a Berlin based Software Engineer</Title>
        </Typography>

        <Divider/>

        <Title level={2}>Skills</Title>

        <Divider>Languages</Divider>
        <div className='languageSkills'>
          <Text className='infoTextSkills'>All proficiency levels will be set in a range from <br></br> <b>1 (Novice) to 5 (Expert)</b></Text>

          <LanguageCards/>
        </div>

      </div>
    </div >
  );
}

export default App;
