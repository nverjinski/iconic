import { useRef, useState, ChangeEvent } from "react";
import * as htmlToImage from "html-to-image";
// @ts-ignore
import IconComponent from "../IconComponent/IconComponent";
import styled from "styled-components";

const Controls = styled.div`
  margin-bottom: 20px;
`;

const FieldLabel = styled.label`
  display: block;
  margin-bottom: 10px;

  &:first-child {
    margin-bottom: 5px;
  }
`;

const NumberInput = styled.input`
  margin-left: 10px;
  padding: 5px;
`;

const IconCanvas = styled.div<{ widthPx: number; heightPx: number }>`
  width: ${({ widthPx }) => `${widthPx}px`};
  height: ${({ heightPx }) => `${heightPx}px`};
  background: transparent;
  border: 2px dashed #ccc;
`;

const Actions = styled.div`
  margin-top: 20px;
`;

const ExportButton = styled.button`
  border: 1px solid #888;
  padding: 8px 12px;
  background: #f3f4f6; /* light gray */
  color: #333;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 120ms ease, border-color 120ms ease;

  &:hover {
    background: #e5e7eb; /* slightly darker on hover */
    border-color: #666;
  }
`;

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
      <Controls>
        <FieldLabel>
          Width:
          <NumberInput
            type="number"
            value={width}
            onChange={handleWidthChange}
            min="1"
            max="2048"
          />
        </FieldLabel>
        <FieldLabel>
          Height:
          <NumberInput
            type="number"
            value={height}
            onChange={handleHeightChange}
            min="1"
            max="2048"
          />
        </FieldLabel>
      </Controls>
      <IconCanvas ref={iconRef} widthPx={width} heightPx={height}>
        <IconComponent />
      </IconCanvas>
      <Actions>
        <ExportButton onClick={downloadIcon}>Export as PNG</ExportButton>
      </Actions>
    </>
  );
};

export default IconExporter;
