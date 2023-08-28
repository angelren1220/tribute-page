import "../styles/profile.scss";

import Footer from "./Footer";

function Profile() {
  const title = "Ms.";
  const firstName = "Coco";
  const lastName = "Lee";
  const avatar = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbTcnLwi2tLrgzktoSxBuGjRzdiX-iyaA9iQ&usqp=CAU";
  const about = "Born on January 17, 1975, in Hong Kong, China, Coco Lee, whose birth name was Li Meilin, was a luminary in the realm of Mandarin pop music and a versatile entertainer. She left an indelible mark on both the music and film industries, enchanting audiences with her ethereal voice and charismatic performances. Tragically, on July 5, 2023, Coco Lee passed away at the age of 48 due to unsuccessful treatment for depression, leaving behind a legacy that resonates deeply within the hearts of her fans.";

  return (
    <aside className="profile">
      <div className="profile__name">
        <h2>{title} <span className="profile--bold">{firstName}</span> {lastName}</h2>
      </div>
      <p>{about}</p>
      <img className="profie_image" src={avatar} alt="Coco" />
      <Footer />
    </aside>
  );
}

export default Profile;