import React from 'react'
import { FileText } from "lucide-react";
function Certificate() {
      const certificates = [
    {
      title: "Interior Design Excellence Certificate",
      description: "Awarded for outstanding creativity and innovation in interior design solutions.",
      file: "/images/AA090625083968D_RC23062025.pdf",
    },
    {
      title: "Quality & Service Recognition",
      description: "Certified for premium quality standards and customer satisfaction in design projects.",
      file: "/images/la decor.pdf",
    },
  ];
  return (
    <div className='mt-5'>
     <div className="bg-gray-50 py-16 px-6 lg:px-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Our Certificates</h2>
        <p className="mt-4 text-lg text-gray-600">
          At <span className="font-semibold">LA Decor</span>, we are proud of our journey
          and achievements. These certificates reflect our commitment to quality,
          creativity, and customer trust in delivering premium interior solutions.
        </p>
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow p-6 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-8 h-8 text-yellow-600" />
              <h3 className="text-xl font-semibold text-gray-800">{cert.title}</h3>
            </div>
            <p className="text-gray-600 mb-4">{cert.description}</p>
            
            {/* PDF Embed */}
            <div className="w-full h-80 border rounded-lg overflow-hidden shadow-inner">
              <iframe
                src={cert.file}
                title={cert.title}
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Download Button */}
            <a
              href={cert.file}
              download
              className="mt-4 inline-block px-5 py-2 bg-yellow-600 text-white font-medium rounded-lg shadow hover:bg-yellow-700 transition"
            >
              Download PDF
            </a>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Certificate
