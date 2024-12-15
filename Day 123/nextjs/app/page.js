import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div>
      I'm home
      <div className="container">
        {/* in normal html img tag was used to import images with same file size in all devices, 1mb in all devices but do we need 1mb image files to show on our small devices like phone, all 480p, 360p quality is enough for it */}

        <Image 
        src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/01/death-note.jpg?q=50&fit=crop&w=825&dpr=1.5" width={300} height={300} className="mx-auto"
        />
      </div>
    </div>
  );
};

export default page;
