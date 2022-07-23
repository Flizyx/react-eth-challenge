import React from 'react';
import '../../styles/components/App.styl';
import Header from '../../components/Header';
import About from '../../components/About';
// import Profile from '../components/Profile';
// import Experience from '../components/Experience';
// import Academic from '../components/Academic';
// import Skills from '../components/Skills';
// import Interest from '../components/Interest';
// import Languages from '../components/Languages';

import {getData} from '../../middleware/get-data.js';

const App = () => {
  const [data, setData] = React.useState({});
  
  const featchData = async () => {
    let data = await getData();
    setData(data);
  };

  React.useEffect(()=> {
    featchData();
  }, []);
  
  return (
    <React.Fragment>
      <Header data={data}>
        <About data={data}/> 
      </Header>
      {/* <Profile />
      <Experience />
      <Academic />
      <Skills />
      <Interest />
      <Languages /> */}
    </React.Fragment>
  )
};

export default App;
