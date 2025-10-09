import styled from "styled-components";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";

const MarkerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Pill = styled.div`
  padding: 30px; /* 3px * 10 */
  background-color: #dc0206;
  border-radius: 50%;
  color: #000000;
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
  background-color: #dc0206;
`;

const IconWrapper = styled.div`
  width: 220px; /* 22px * 10 */
  height: 220px; /* 22px * 10 */
  color: #ffffff;
`;

const IconComponent = () => {
  return (
    <MarkerContainer>
      <Pill>
        <IconWrapper>
          <ExclamationTriangleIcon />
        </IconWrapper>
      </Pill>
      <PinLine />
    </MarkerContainer>
  );
};

export default IconComponent;
