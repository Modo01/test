import "./Invitation.css"; // External CSS for styling
import hi from "../../../public/Assets/hi.jpg"; // Image path

const Invitation = () => {
  return (
    <div
      className="invitation-container"
      style={{
        backgroundImage: `url(${hi})`, // Correct syntax for backgroundImage
        backgroundSize: "cover", // CamelCase for inline styles
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "20px 10px",
        boxSizing: "border-box",
      }}
    >
      <div className="invitation-content">
        <h2>Хайрт Урангүнж танаа!</h2>
        <p>
          Хамтдаа нэгэн оройг онцгой байлгахыг хүсээд өөрсдөдөө зориулж нэгэн
          үдшийг төлөвлөлөө. Энэ бол бидний хамтдаа шинэ, сайхан дурсамж бүтээх
          үдэш байх болно. Тиймээс таныг албан ёсоор болзоонд урьж байна.
        </p>
        <p className="info">
          <strong>Огноо:</strong> 2024 оны 12-р сарын 26 <br />
          <strong>Цаг:</strong> 19:00 <br />
          <strong>Байршил:</strong> Таныг очиж авах болохоор бэлэн болоод хүлээж
          байна уу❤️
        </p>
        <p className="jich">
          <strong>Жич:</strong>
          <br />
          Өөрийгөө хамгийн гайхалтайгаар мэдрэхэд туслах хувцсаа өмсөөрэй, учир
          нь чи миний нүдэнд үргэлж төгс харагддаг.
        </p>
        <div className="modo">
          <p>Зөвхөн чиний,</p>
          <p>
            <strong>[Мөнхдөлгөөн]</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Invitation;
