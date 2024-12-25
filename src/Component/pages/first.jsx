import Envelope from "../envelope/envelope"; // Default import
import paperImage from "../../../public/Assets/paper.jpg"; // Image path

const First = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${paperImage})`,
        backgroundSize: "cover", // Ensures the background covers the container
        backgroundPosition: "center", // Centers the image
        height: "100vh", // Full viewport height
        display: "flex", // Flexbox for centering
        alignItems: "center", // Center vertically
        justifyContent: "center", // Center horizontally
      }}
    >
      {" "}
      <div
        style={{
          position: "absolute",
          top: "40px",
          left: "150px",
          color: "white",
          textAlign: "center",
        }}
      >
        Хүүе👀 Би илүү хөөрхөншдээ
        <br /> над дээр дараарай🥰
      </div>
      <Envelope />
      <div
        style={{
          position: "absolute",
          top: "600px",
          left: "180px",
          color: "white",
          textAlign: "center",
        }}
      >
        Заа хэн ч харсан би
        <br /> хөөрхөн байгааздээ, <br />
        Гүнжэээ🥰
      </div>
    </div>
  );
};

export default First;
