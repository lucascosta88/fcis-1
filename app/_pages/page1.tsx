import Video from "../_components/video";

const Page1 = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/01/BACKGROUND.png')", // Correct path to the image
        height: '1000px',
        backgroundSize: 'cover',  
        backgroundPosition: 'center' 
      }}
    >
      <Video />
    </div>
  );
}

export default Page1;
