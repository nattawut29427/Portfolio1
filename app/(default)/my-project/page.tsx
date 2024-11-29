import React from "react";
import Image from "next/image";
import Navbar from '@/app/Components/Navbar'
import Footer from "@/app/Components/Footer";

function Project() {
  const projectItems = [
    {
      id: 1,
      imageUrl:
        "https://i.pinimg.com/736x/64/91/6f/64916f52037c018a3b99c186827490ef.jpg",
    },
    {
      id: 2,
      imageUrl:
        "https://i.pinimg.com/736x/d9/03/0a/d9030a5696d2507a1dfb38a686ac93c2.jpg",
    },
    {
      id: 3,
      imageUrl:
        "https://i.pinimg.com/736x/15/46/2f/15462f494584c8a84a99d3998b7f1119.jpg",
    },
  ];

  return (
    <div className="font-body min-h-screen flex flex-col justify-between text-white">
      <Navbar/>
      {/* Main Content */}
      <main className="flex flex-col items-center gap-16">
        <h1 className="text-2xl font-bold mt-40">PROJECT</h1>
        <div className="flex flex-wrap gap-10 justify-center">
          {projectItems.map((project) => (
            <div
              key={project.id}
              className="relative w-[90%] max-w-[700px] h-[450px] md:w-[500px] md:h-[500px] cursor-pointer rounded-lg overflow-hidden hover:w-[550px] hover:h-[550px] duration-300"
            >
              {/* พื้นหลังแบบโปร่งใส */}
              <div className="absolute inset-0 bg-white opacity-5"></div>

              {/* รูปภาพ */}
              <div className="relative z-10 flex justify-center items-center h-full">
                <Image
                  src={project.imageUrl}
                  alt={`Project ${project.id}`}
                  fill
                  className="object-contain p-10"
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
                  priority={project.id === 1} // ให้โหลดภาพแรกเร็วที่สุด
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
        <Footer/>
      </main>
    </div>
  );
}

export default Project;
