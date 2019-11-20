import React from 'react';
import './App.css';
import NewsBar from './components/NewsBar';
import imageCat from './images/cat.jpg';
import imageEclipse from './images/eclipse.jpg'
import imageOrange from './images/oranges.jpg'
import imageShadow from './images/silhouette.gif'
import imageSnow from './images/snow.jpg'

function App() {
  return (
    <div className="App">
      <NewsBar headerStart="Long Reads" headerEnd="See All"
        story1="Do cats really exist? One expert tells all" image1={imageCat}
        story2="Sun eclipse could be the end of us" image2={imageEclipse}
        story3="One weird trick about oranges" image3={imageOrange}
        story4="'Anonymity became my life and love'" image4={imageShadow}
        story5="New type of snow risks millions of lives" image5={imageSnow} />

      <NewsBar headerStart="Long Reads" headerEnd="See All"
        story1="No more snow for 100 years" image1={imageSnow}
        story2="Oranges proved to cause cancer" image2={imageOrange}
        story3="'Cats were the death of me, figuratively'" image3={imageCat}
        story4="'One day the sun disappeared'" image4={imageEclipse}
        story5="Anonymous cause some problem or other" image5={imageShadow} />
    </div>
  );
}

export default App;
