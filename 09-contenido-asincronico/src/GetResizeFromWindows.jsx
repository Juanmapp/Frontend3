import { useEffect } from "react";

const GetResizeFromWindow = () => {
useEffect(() => {
function handleResize() {
console.log(
"Redimensionar: ",
window.innerWidth,
"x",
window.innerHeight
);
}

window.addEventListener("resize", handleResize);


});

return <div />;
};

export default GetResizeFromWindow;