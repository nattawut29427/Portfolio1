import React from "react";

function Project() {
  const projectItems = [
    { id: 1, imageUrl: "https://i.pinimg.com/736x/64/91/6f/64916f52037c018a3b99c186827490ef.jpg" },
    { id: 2, imageUrl: "https://i.pinimg.com/736x/d9/03/0a/d9030a5696d2507a1dfb38a686ac93c2.jpg" },
    { id: 3, imageUrl: "https://i.pinimg.com/736x/15/46/2f/15462f494584c8a84a99d3998b7f1119.jpg" },
  ];

  return (
    <div className="font-body min-h-screen flex flex-col justify-between text-white">
      {/* Main Content */}
      <main className="flex flex-col items-center gap-16">
        <h1 className="text-2xl font-bold mt-40">PROJECT</h1>
        <div className="flex gap-10">
          {projectItems.map((project) => (
            <div
              key={project.id}
              className="relative w-[700px] h-[450px] md:w-[500px] md:h-[500px] cursor-pointer rounded-lg overflow-hidden hover:w-[550px] 
              hover:h-[550px] duration-100"
            >
              {/* พื้นหลังแบบโปร่งใส */}
              <div className="absolute inset-0 bg-white opacity-5 "></div>
              
              {/* รูปภาพ */}
              <div className="relative z-10 flex justify-center items-center h-full">
                <img
                  src={project.imageUrl}
                  alt={`Project ${project.id}`}
                  className="p-10 h-auto object-contain"
                />
              </div>

              <div className="absolute bottom-4 right-4 z-10">
                <a
                  href="#"
                  className="text-gray-500 text-xl"
                  title={`Open Project ${project.id}`}
                >
                  ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Project;
