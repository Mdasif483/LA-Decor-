
import React from "react";

function TeamSection() {
  const teamMembers = [
    {
      id: 1,
      name: "Yousuf",
      role: "Lead Designer",
      desc: "John has over 10 years of experience creating elegant and functional interior designs.",
      img: "/images/44f73cdc-851c-48a3-a2a3-72bee4e34d06.jpeg", // apni image ka path
    },
    {
      id: 2,
      name: "Rahbar",
      role: "Project Manager",
      desc: "Jane ensures every project is delivered on time with the highest quality standards.",
      img: "/images/d1865d2a-e308-433f-b177-b338c3c9879b.jpeg",
    },
    {
        id: 3,
        name: "Danish",
        role: "Architect",
        desc: "Mike specializes in modern architecture and sustainable designs for residential spaces.",
        img: "/images/e5f4869f-51e2-4960-84ee-3ffa772b9276.jpeg",
    },
    {
        id: 4,
        name: "Arman",
        role: "Interior Stylist",
        desc: "Emily creates personalized interiors with a perfect blend of style and comfort.",
        img: "/images/a28a48d3-5973-4782-89dd-3b729845ba79.jpeg",
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Meet Our Team
        </h2>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-64 object-cover transform hover:scale-105 transition duration-300"
                />
              </div>

              {/* Text Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500 italic">{member.role}</p>
                <p className="text-gray-600 mt-2">{member.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
