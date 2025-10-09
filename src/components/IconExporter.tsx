import { useRef, useState, ChangeEvent } from "react";
import * as htmlToImage from "html-to-image";
// @ts-ignore
import IconComponent from "../IconComponent/IconComponent";

const IconExporter = () => {
  const iconRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(512);
  const [height, setHeight] = useState<number>(512);

  const downloadIcon = async (): Promise<void> => {
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

  const handleWidthChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setWidth(parseInt(e.target.value) || 512);
  };

  const handleHeightChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setHeight(parseInt(e.target.value) || 512);
  };

  return (
    <>
      <div style={{ marginBottom: "20px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>
          Width:
          <input
            type="number"
            value={width}
            onChange={handleWidthChange}
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
            onChange={handleHeightChange}
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
