import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import React from "react";

function Contrack() {
  const textItem = [
    { id: 1, social: "EMAIL", hoverText: "NATTAWUTDONOVAN@GMAIL.COM", color: "#FFFFFF", hoverColor: "#EF5A6F",  link: "mailto:Nattawutdonovan@gmail.com"}, 
    { id: 2, social: "GIT HUB", hoverText: "NATTAWUT_IN", color: "#FFFFFF", hoverColor: "#A594F9", link: "https://github.com/nattawut29427"}, 
    { id: 3, social: "LINK IN", 
      hoverText: "NATTAWUT INTARAPANICH", 
      color: "#FFFFFF", 
      hoverColor: "#4379F2", 
      link: "https:linkedin.com/in/nattawut-intarapanich-39b68b323.com" }, 
    { id: 4, social: "INTRAGRAM", hoverText: "LIST_XD", color: "#FFFFFF", hoverColor: "#D91656",  link: "https://www.instagram.com/list_xd/" },
  ];

  return (
    <div className="font-body min-h-screen flex flex-col justify-between text-white">
      <Navbar/>
      <main className="flex flex-col items-center gap-16">
        <h1 className="text-3xl font-bold mt-40">CONTACT</h1>
        <div className="text-center text-3xl gap-y-10 flex flex-col">
          {textItem.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative cursor-pointer"
            >
              
              <span
                className="block group-hover:opacity-0 group-hover:translate-y-[-10px] transition-all duration-500 ease-in-out"
                style={{ color: item.color }}
              >
                {item.social}
              </span>
              
              <span
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out"
                style={{ color: item.hoverColor }}
              >
                {item.hoverText}
              </span>
            </a>
          ))}
        </div>
        <Footer/>
      </main>
    </div>
  );
}

export default Contrack;
