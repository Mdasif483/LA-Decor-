import React from 'react'

function Logo() {
  return (
    <div>
      <body class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="w-full max-w-4xl mx-auto">
        <div id="slider" class="flex overflow-x-scroll space-x-4 rounded-lg shadow-lg no-scrollbar">
            <div class="flex-shrink-0 w-full md:w-3/4 lg:w-2/3 scroll-ml-6">
                <img src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722165/AbhirajK/Abhirajk.webp" 
                     alt="Slider Image 1" 
                     class="w-full h-[500px] object-cover rounded-lg"/>
            </div>
            <div class="flex-shrink-0 w-full md:w-3/4 lg:w-2/3 scroll-ml-6">
                <img src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722163/AbhirajK/Abhirajk%20mykare.webp" 
                     alt="Slider Image 2" 
                     class="w-full h-[500px] object-cover rounded-lg"/>
            </div>
            <div class="flex-shrink-0 w-full md:w-3/4 lg:w-2/3 scroll-ml-6">
                <img src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722161/AbhirajK/Abhirajk2.webp" 
                     alt="Slider Image 3" 
                     class="w-full h-[500px] object-cover rounded-lg"/>
            </div>
            <div class="flex-shrink-0 w-full md:w-3/4 lg:w-2/3 scroll-ml-6">
                <img src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722161/AbhirajK/Abhirajk3.webp" 
                     alt="Slider Image 4" 
                     class="w-full h-[500px] object-cover rounded-lg"/>
            </div>
            <div class="flex-shrink-0 w-full md:w-3/4 lg:w-2/3 scroll-ml-6">
                <img src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722160/AbhirajK/Abhirajk4.webp" 
                     alt="Slider Image 5" 
                     class="w-full h-[500px] object-cover rounded-lg"/>
            </div>
        </div>

        <div class="flex justify-center mt-4 space-x-2">
            <a href="#slider" class="w-3 h-3 bg-gray-300 rounded-full"></a>
            <a href="#slider" class="w-3 h-3 bg-gray-300 rounded-full"></a>
            <a href="#slider" class="w-3 h-3 bg-gray-300 rounded-full"></a>
            <a href="#slider" class="w-3 h-3 bg-gray-300 rounded-full"></a>
            <a href="#slider" class="w-3 h-3 bg-gray-300 rounded-full"></a>
        </div>
    </div>
</body>
    </div>
  )
}

export default Logo
