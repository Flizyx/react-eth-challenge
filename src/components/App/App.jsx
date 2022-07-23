// Styles
import '../../styles/components/App.styl';
import React from 'react';

// Components
import Loading from '../../shared/Loading/Loading';
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
      {!data && <Loading />}
      <div className ="MainContainer">
        <Header data={data}>
          <About data={data}/> 
        </Header>
        <Profile data={data}/>
        <Experience experience={data.experience}/>
        <div className ="sectionContainer">
          <Academic data={data}/>
          <Skills data={data}/>
        </div>
        <div className ="sectionContainer">
          <Interest data={data}/>
          <Languages data={data}/>
        </div>
      </div>
    </React.Fragment>
  )
};

export default App;
