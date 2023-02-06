// window.addEventListener("load", () => {
//   alert("assine nosso termo de uso");
// });

window.addEventListener("beforeunload", (e) => {
  e.returnValue = null;
});
