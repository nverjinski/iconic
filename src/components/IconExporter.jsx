import React, { useRef } from "react";
import * as htmlToImage from "html-to-image";
import IconComponent from "../IconComponent/IconComponent";

const IconExporter = () => {
  const iconRef = useRef(null);
  const size = 512;

  const downloadIcon = async () => {
    if (iconRef.current === null) return;

    try {
      const dataUrl = await htmlToImage.toPng(iconRef.current, {
        // Set the pixel dimensions for the exported PNG
        width: size,
        height: size,
      });

      const link = document.createElement("a");
      link.download = `custom_icon_${size}x${size}.png`;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error("oops, something went wrong!", error);
    }
  };

  return (
    <>
      <div
        ref={iconRef}
        style={{
          width: size,
          height: size,
          background: "transparent",
        }}
      >
        <IconComponent />
      </div>
      <button onClick={downloadIcon}>Export PNG for Atlas</button>
    </>
  );
};
export default IconExporter;
