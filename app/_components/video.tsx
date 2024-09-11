import React from 'react';

const Video = () => {
  return (
    <div className='flex justify-center'>
      <iframe
        width="600"
        height="400"
        src="https://www.youtube.com/embed/8PO6_ljVsjo"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video"
      ></iframe>
    </div>
  );
}

export default Video;
