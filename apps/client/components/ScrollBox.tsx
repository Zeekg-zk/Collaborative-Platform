import React from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

const ScrollStyleBox = styled(Box)`
  ::-webkit-scrollbar,
  ::-webkit-scrollbar-thumb {
    width: 16px;
    border-radius: 0 10px 10px 0;
    background-clip: padding-box;
    border: 5px solid white;
    background-color: white;
  }

  ::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 0 10px #eee;
  }
`;

const ScrollBox: React.FC<{ sx?: object; children: React.ReactNode }> = (
  props
) => {
  return (
    <ScrollStyleBox sx={{ height: "100%", overflow: "auto", ...props.sx }}>
      {props.children}
    </ScrollStyleBox>
  );
};

export default ScrollBox;
