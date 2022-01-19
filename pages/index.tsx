import Head from 'next/head';
import { FC, useEffect, useState } from 'react';

const imageLink =
  'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';

const bgStyle = {
  backgroundImage: `url(${imageLink});`
};

const TimeBox: FC<{ title: string }> = ({ children, title }) => {
  return (
    <span className="relative center flex-col border border-gray-300 shadow-lg p-4 w-40 h-40 mt-4 text-gray-100 text-4xl text-bold bg-opacity-20 bg-gray-900 rounded-lg m-2">
      {title && (
        <>
          <span className="absolute top-2 capitalize text-2xl">{title}</span>
        </>
      )}
      {children}
    </span>
  );
};

const useTimer = () => {
  const countDownDate = new Date('Mar 31, 2022 23:59:59').getTime();
  const [time, setTimer] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timerId = setInterval(function () {
      // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now and the count down date
      const distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      return setTimer({ days, hours, minutes, seconds });
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return time;
};
// Set the date we're counting down to

const Home: FC = () => {
  const { days, hours, minutes, seconds } = useTimer();

  return (
    <div className="h-screen center flex-col bg-gray-900 bg-no-repeat bg-cover" style={bgStyle}>
      <Head>
        <title>Codeation.io</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Potta+One&display=swap"
          rel="stylesheet"></link>
      </Head>
      <h1 className="text-4xl text-center text-gray-100 uppercase mb-10 bg-gray-900 p-2 bg-opacity-10 rounded-lg">
        Under Construction
      </h1>
      <div className="center flex-wrap">
        <TimeBox title="Days">{days}</TimeBox>
        <TimeBox title="Hours">{hours}</TimeBox>
        <TimeBox title="Minutes">{minutes}</TimeBox>
        <TimeBox title="Seconds">{seconds}</TimeBox>
      </div>
    </div>
  );
};

export default Home;
