import { Children, useState,useEffect } from 'react'
import './App.css'
import Description from './components/Description/Description';
import Options
      from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';

import Notification from './components/Notification/Notification';


const App = () => {
	
 const [feed, setFeed] = useState(() => {
    const savedFeed = window.localStorage.getItem("saved-feed");

    if (savedFeed !== null) {
      return JSON.parse(savedFeed);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem("saved-feed", JSON.stringify(feed));
  }, [feed]);

  const totalFeedback = feed.good + feed.neutral + feed.bad;
  const PositiveFeedback = Math.round((feed.good / totalFeedback) * 100);

  function updateFeedback(feedbackType) {
    switch (feedbackType) {
      case "good":
        setFeed({
          ...feed,
          good: feed.good + 1,
        });
        break;

      case "neutral":
        setFeed({
          ...feed,
          neutral: feed.neutral + 1,
        });
        break;

      case "bad":
        setFeed({
          ...feed,
          bad: feed.bad + 1,
        });
        break;
    }
  }

  function resetState() {
    setFeed({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }


  return (
    <>
              <Description/>
			<Options
			 info={updateFeedback}
        clear={resetState}
        total={totalFeedback}></Options>
			  {totalFeedback === 0 && <Notification />}
			{totalFeedback !== 0 && (
				<Feedback feedback={feed}
					total={totalFeedback}
					positive={PositiveFeedback} ></Feedback>)}
    </>
  );
};


export default App
