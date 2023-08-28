import '../styles/Album.scss';

function Album() {
  return (
    <div className="album-container">
      <div className="youtube-video">
        <iframe width="800" height="450" src="https://www.youtube.com/embed/322wQTwVYwM?si=cPI-7C4ji0Sz6QKX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div className="youtube-video">
        <iframe width="800" height="450" src="https://www.youtube.com/embed/CpURgXug9vk?si=0FMUesdsMbQzbRSE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div className="youtube-video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/MZdxy7_lc8U?si=kk-tXIPKh1I0eNzU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div className="youtube-video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/fD0IIMRHpAQ?si=SzLyo0jfH5yJeKyJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
  );
}

export default Album;
