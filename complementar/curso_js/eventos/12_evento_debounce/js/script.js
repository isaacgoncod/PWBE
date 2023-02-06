let timeout;

window.addEventListener("mousemove", (e) => {
  clearTimeout(timeout);

  timeout = setTimeout(() => {
    console.log(e.x);
  }, 500);
});
