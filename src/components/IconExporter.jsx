import React, { useRef, useState } from "react";
import * as htmlToImage from "html-to-image";
import IconComponent from "../IconComponent/IconComponent";

const IconExporter = () => {
  const iconRef = useRef(null);
  const [width, setWidth] = useState(512);
  const [height, setHeight] = useState(512);

  const downloadIcon = async () => {
    if (iconRef.current === null) return;

    try {
      // Temporarily remove border for export
      const originalBorder = iconRef.current.style.border;
      iconRef.current.style.border = "none";

      const dataUrl = await htmlToImage.toPng(iconRef.current, {
        // Set the pixel dimensions for the exported PNG
        width: width,
        height: height,
        pixelRatio: 1,
      });

      // Restore the original border
      iconRef.current.style.border = originalBorder;

      const link = document.createElement("a");
      link.download = `custom_icon_${width}x${height}.png`;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error("oops, something went wrong!", error);
    }
  };

  return (
    <>
      <div style={{ marginBottom: "20px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>
          Width:
          <input
            type="number"
            value={width}
            onChange={(e) => setWidth(parseInt(e.target.value) || 512)}
            min="1"
            max="2048"
            style={{ marginLeft: "10px", padding: "5px" }}
          />
        </label>
        <label style={{ display: "block", marginBottom: "10px" }}>
          Height:
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(parseInt(e.target.value) || 512)}
            min="1"
            max="2048"
            style={{ marginLeft: "10px", padding: "5px" }}
          />
        </label>
      </div>
      <div
        ref={iconRef}
        style={{
          width: width,
          height: height,
          background: "transparent",
          border: "2px dashed #ccc",
        }}
      >
        <IconComponent />
      </div>
      <div style={{ marginTop: "20px" }}>
        <button onClick={downloadIcon}>Export PNG for Atlas</button>
      </div>
    </>
  );
};
export default IconExporter;
