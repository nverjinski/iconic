import styled from "styled-components";
import { BuildingLibraryIcon } from "@heroicons/react/24/solid";

// This wrapper creates the 512x512 canvas for the image export.
const DownloadWrapper = styled.div`
  width: 512px;
  height: 512px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MarkerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Pill = styled.div`
  padding: 30px; /* 3px * 10 */
  background-color: #000000;
  border-radius: 50%;
  color: #ffffff;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3); /* (2px, 5px) * 10 */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  min-height: 240px; /* 24px * 10 */
  min-width: 240px; /* 24px * 10 */
`;

const PinLine = styled.div`
  width: 20px; /* 2px * 10 */
  height: 200px; /* 20px * 10 */
  background-color: #000000;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3); /* (2px, 5px) * 10 */
`;

const IconWrapper = styled.div`
  width: 220px; /* 22px * 10 */
  height: 220px; /* 22px * 10 */
  color: #ffffff;
`;

const IconComponent = () => {
  return (
    <DownloadWrapper>
      <MarkerContainer>
        <Pill>
          <IconWrapper>
            <BuildingLibraryIcon />
          </IconWrapper>
        </Pill>
        <PinLine />
      </MarkerContainer>
    </DownloadWrapper>
  );
};

export default IconComponent;
