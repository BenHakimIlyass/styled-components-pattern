import styled from "styled-components";

const object = {
  largeText: "font-size:32px;",
  smallText: "font-size:18px;",
  mediumText: "font-size:24px;",
  isBold: "font-weight:900;",
  isSmall: "width:200px;",
  isLarge: "width:280px;"
};
const wrappObject = (object, vars) => {
  let arr = [];
  Object.keys(object).map(
    (key, _) => vars.includes(key) && arr.push(object[key])
  );
  return arr;
};
const polished = component => style => vars => {
  return styled(component)`
    ${wrappObject(object, vars)}
    ${style}
  `;
};
export default polished;
