function Gallery() {
  const imageUrls = [
    "https://media.gettyimages.com/id/1157532076/photo/singer-coco-lee-performs-onstage-during-her-concert-at-the-taipei-arena-on-june-21-2019-in.jpg?s=612x612&w=0&k=20&c=07IgcKJ9oOCzwevBKbtFNs9_M-Hq3nXWgL6XjqZ4oJw=",
    "https://media.gettyimages.com/id/1517967248/photo/singer-coco-lee-performs-at-her-concert-on-september-23-2017-in-hangzhou-zhejiang-province-of.jpg?s=612x612&w=0&k=20&c=SsyRV9ChPSIPlf-yAEDthrvbDnTZQ5Ag5QS-vZB08f8=",
    "https://media.gettyimages.com/id/567422513/photo/profile-of-singer-coco-lee-who-has-sold-millions-of-albums-in-asia-and-is-now-poised-to-blitz.jpg?s=612x612&w=0&k=20&c=WH2ugi87PNotQ-XzYLr6SbAG_fnu5wcczuHpvkCVUhk=",
    "https://media.gettyimages.com/id/1289568147/photo/singer-coco-lee-arrives-at-the-red-carpet-for-the-opening-ceremony-of-the-3rd-hainan-island.jpg?s=612x612&w=0&k=20&c=Uq-qsGYx7ALdL7eGPPCF-vASzPGLi-ESKzJUG-hGKAk=",
    "https://media.gettyimages.com/id/1517967249/photo/singer-coco-lee-performs-at-her-concert-on-september-23-2017-in-hangzhou-zhejiang-province-of.jpg?s=612x612&w=0&k=20&c=or3M7RJ21OGYaP1PwvMJNWX3iMAovYBYrnwc2T8doI8=",
    "https://media.gettyimages.com/id/1566086093/photo/topshot-pop-singer-coco-lee-performs-during-an-anti-smoking-campaign-at-tungman-elementary.jpg?s=612x612&w=0&k=20&c=LbMG-Djj-u3uBkKlRb0ci5hC0L7X9Q8VQhOO-fuf22k=",
    "https://media.gettyimages.com/id/1170439277/photo/singer-songwriter-coco-lee-attends-taping-of-talent-show-jungle-voice-2-on-august-26-2019-in.jpg?s=612x612&w=0&k=20&c=QRQEPGCitwwmyR9WcZWmou9enuCNsDG5eT1XHF3Lu3U=",
    "https://media.gettyimages.com/id/1151692567/photo/coco-lee-second-time-held-her-world-tour-concert-line-music-2019-coco-lee-you-i-at.jpg?s=612x612&w=0&k=20&c=WL_NftqlKhfg1bnIdLxW2im1pHT6yu05nFQ9CAzuJro=",
    "https://media.gettyimages.com/id/175633826/photo/singer-coco-lee-promotes-her-new-album-on-friday-august-2-2013-in-taipei-china.jpg?s=612x612&w=0&k=20&c=webW2tTZixzYKpuAG5lQB7vbsCfKHAodIHb3BvofuSU="

  ];

  return (
    <div className="gallery">
      {imageUrls.map((url, index) => (
        <img key={url} src={url} alt={`coco${index + 1}`} />
      ))}
    </div>
  );
}

export default Gallery;
