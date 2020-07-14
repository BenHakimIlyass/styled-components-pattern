import styled from "styled-components";

const polished = component => wrappedStyle => vars => {
  const add = s => vars.some(e => e === s);
  return styled(component ? component : "div")`
    ${vars.isBold && "font-weight:900;"}
    ${vars.H100 && "font-size:32px;"}
    ${add("H400") && "font-size:32px;"}
    ${vars.H200 && "font-size:26px;"}
    ${vars.H300 && "font-size:22px;"}
    ${vars.SMALL && "font-size:14px;"}
    ${add("isLarge") && "width:280px;"}
    ${vars.isMedium && "width:240px;"}
    ${vars.isSmall && "width:200px;"}
    ${wrappedStyle}
  `;
};
export default polished;
