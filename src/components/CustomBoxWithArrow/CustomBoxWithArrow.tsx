import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";

interface CustomBoxWithArrowProps {
  children: React.ReactNode;
  backgroundColor?: string;
  contentAlignment?: "start" | "center" | "end";
  style?: React.CSSProperties;
  anchorRef?: React.RefObject<HTMLElement | null>;
}

const CustomBoxWithArrow: React.FC<CustomBoxWithArrowProps> = ({
  children,
  backgroundColor = "#E7ECEE",
  contentAlignment = "center",
  style = {},
  anchorRef,
}) => {
  const boxRef = useRef<HTMLDivElement>(null);
  const [arrowLeft, setArrowLeft] = useState("50%");

  const justifyContentMap = {
    start: "flex-start",
    center: "center",
    end: "flex-end",
  };

  useEffect(() => {
    if (anchorRef?.current && boxRef.current) {
      const anchorRect = anchorRef.current.getBoundingClientRect();
      const boxRect = boxRef.current.getBoundingClientRect();

      const positionRelativeToBox =
        anchorRect.left - boxRect.left + anchorRect.width / 2;

      setArrowLeft(`${positionRelativeToBox}px`);
    }
  }, [anchorRef?.current]);

  return (
    <Box
      ref={boxRef}
      sx={{
        mt: "10px",
        background: backgroundColor,
        padding: "20px",
        borderRadius: "5px",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: justifyContentMap[contentAlignment],
        alignItems: justifyContentMap[contentAlignment],
        ...style,
      }}
    >
      {/* Triângulo */}
      <Box
        sx={{
          position: "absolute",
          top: "-10px",
          left: arrowLeft,
          transform: "translateX(-50%)",
          width: 0,
          height: 0,
          borderLeft: "10px solid transparent",
          borderRight: "10px solid transparent",
          borderBottom: `10px solid ${backgroundColor}`,
        }}
      />
      {children}
    </Box>
  );
};

export default CustomBoxWithArrow;


// import { Box } from "@mui/material";
// import React from "react";

// interface CustomBoxWithArrowProps {
//   children: React.ReactNode;
//   arrowPosition?: string;
//   backgroundColor?: string;
//   contentAlignment?: "start" | "center" | "end";
//   style?: React.CSSProperties;
// }

// const CustomBoxWithArrow: React.FC<CustomBoxWithArrowProps> = ({
//   children,
//   arrowPosition = "50%",
//   backgroundColor = "#E7ECEE",
//   contentAlignment = "center",
//   style = {},
// }) => {
//   const justifyContentMap = {
//     start: "flex-start",
//     center: "center",
//     end: "flex-end",
//   };

//   return (
//     <Box
//       sx={{
//         mt:"10px",
//         background: backgroundColor,
//         padding: "20px",
//         borderRadius: "5px",
//         position: "relative",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: justifyContentMap[contentAlignment],
//         alignItems: justifyContentMap[contentAlignment],
//         ...style,
//       }}
//     >
//       {/* Indicador Visual (Triângulo) */}
//       <div
//         style={{
//           position: "absolute",
//           top: "-10px",
//           left: arrowPosition,
//           transform: "translateX(-50%)",
//           width: "0",
//           height: "0",
//           borderLeft: "10px solid transparent",
//           borderRight: "10px solid transparent",
//           borderBottom: `10px solid ${backgroundColor}`,
//         }}
//       ></div>

//       {/* Conteúdo */}
//       {children}
//     </Box>
//   );
// };

// export default CustomBoxWithArrow;