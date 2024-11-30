import React from "react";

function About() {
  return (
    <div className="font-body w-1/2 h-full text-white overflow-hidden flex justify-center items-center m-auto">
      <div className="flex-col flex pl-96 gap-12 mt-48">
        <div>
          <h1 className="text-4xl">About me</h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            labore eveniet cupiditate veniam dolorem. Enim ducimus libero
            dolorem perferendis eligendi dolores laudantium voluptate rerum. Ut
            accusamus ab ea quos dicta?
          </p>
        </div>
        <div>
          <h1 className="text-4xl">My skill</h1>
          <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            labore eveniet cupiditate veniam dolorem. Enim ducimus libero
            dolorem perferendis eligendi dolores laudantium voluptate rerum. Ut
            accusamus ab ea quos dicta?
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
