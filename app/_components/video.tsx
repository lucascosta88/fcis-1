import React from 'react';

const Video = () => {
  return (
    <div className='flex py-2 justify-center'>
      <iframe className='rounded-xl' 
      style={{ boxShadow: '6px 6px 0px 0px rgba(233, 153, 12, 1)' }}
        width="700"
        height="400"
        src="https://www.youtube.com/embed/HehOc4jzHXo"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video"
      ></iframe>
    </div>
  );
}

export default Video;
