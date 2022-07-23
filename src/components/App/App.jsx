// Styles
import '../../styles/components/App.styl';
import React from 'react';

// Components
import Header from '../../components/Header';
import About from '../../components/About';

import Profile from '../../components/Profile';
import Experience from '../../components/Experience';
import Academic from '../../components/Academic';
import Skills from '../../components/Skills';
import Interest from '../../components/Interest';
import Languages from '../../components/Languages';

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
        <div className ="MainContainer">
          <Header data={data}>
            <About data={data}/> 
          </Header>
          <Profile data={data}/>
          <Experience experience={data.experience}/>
          <div className ="sectionContainer">
            <Academic academic={data.Academic}/>
            <Skills skills={data.skills}/>
          </div>
          <div className ="sectionContainer">
            <Interest interests={data.interest}/>
            <Languages languages={data.languages}/>
          </div>
      </div>
    </React.Fragment>
  )
};

export default App;
