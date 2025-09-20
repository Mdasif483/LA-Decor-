import React from "react";
import VideoHero from "./SubComponent/VideoHero";

function Video() {
    
  const videos = [
    {
      id: 1,
      src: "public/video/7578541-uhd_3840_2160_30fps.mp4", // yahan apna video link daalna
      title: "front Elivation",
      desc: "Explore our elegant living room interior designs crafted for comfort and luxury.",
    },
    {
      id: 2,
      src: "public/video/4307518-hd_1920_1080_30fps.mp4",
      title: "Stylish Bedroom",
      desc: "Bedroom ideas that blend relaxation with modern aesthetics perfectly.",
    },
    {
      id: 3,
      src: "/video/8581127-hd_1920_1080_30fps.mp4",
      title: "Kitchen Spaces",
      desc: "Smart and sleek kitchen interiors that maximize both space and style.",
    },
    {
      id: 4,
      src: "public/video/7578546-uhd_3840_2160_30fps.mp4",
      title: "Tuffan Glass",
      desc: "Creative workspace solutions designed for productivity and elegance.",
    },
  ];

  return (
    <section className="py-12 bg-gray-100 mt-20.5" >
        <VideoHero/>
      <div className="max-w-7xl mx-auto px-6 mt-10" id="video">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Our Latest Videos
        </h2>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={video.src}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-t-xl"
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {video.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{video.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Video;
