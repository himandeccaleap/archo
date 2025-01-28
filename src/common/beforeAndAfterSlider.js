const beforeAndAfterSlider = () => {
  const slider = document.getElementById("before-after-slider");
  if (slider) {
    const before = document.getElementById("before-image");
    const beforeImage = before.getElementsByTagName("img")[0];
    const resizer = document.getElementById("resizer");
    const overlay = document.querySelector("#before-after-slider .overlay");
    const beforeText = document.querySelector(
      "#before-after-slider .twentytwenty-before-label"
    );
    const afterText = document.querySelector(
      "#before-after-slider .twentytwenty-after-label"
    );

    let active = false;

    let width = slider.offsetWidth;
    beforeImage.style.width = width + "px";

    window.addEventListener("resize", function () {
      let width = slider.offsetWidth;
      beforeImage.style.width = width + "px";
    });

    resizer.addEventListener("mousedown", function () {
      active = true;
      resizer.classList.add("resize");
      overlay.style.opacity = 0;
    });

    resizer.addEventListener("mouseup", function () {
      active = false;
      resizer.classList.remove("resize");
      overlay.style.opacity = 1;
    });

    document.body.addEventListener("mousemove", function (e) {
      if (!active) return;
      let x = e.pageX;
      x -= slider.getBoundingClientRect().left;
      slideIt(x);
      pauseEvent(e);
    });

    slider.addEventListener("mouseenter", () => {
      overlay.style.opacity = 1;
      beforeText.style.opacity = 1;
      afterText.style.opacity = 1;
    });
    slider.addEventListener("mouseleave", () => {
      active = false;
      resizer.classList.remove("resize");
      overlay.style.opacity = 0;
      beforeText.style.opacity = 0;
      afterText.style.opacity = 0;
    });

    resizer.addEventListener("touchstart", function () {
      active = true;
      resizer.classList.add("resize");
    });

    document.body.addEventListener("touchend", function () {
      active = false;
      resizer.classList.remove("resize");
    });

    document.body.addEventListener("touchcancel", function () {
      active = false;
      resizer.classList.remove("resize");
    });

    document.body.addEventListener("touchmove", function (e) {
      if (!active) return;
      let x;

      let i;
      for (i = 0; i < e.changedTouches.length; i++) {
        x = e.changedTouches[i].pageX;
      }

      x -= slider.getBoundingClientRect().left;
      slideIt(x);
      pauseEvent(e);
    });

    function slideIt(x) {
      let transform = Math.max(0, Math.min(x, slider.offsetWidth));
      before.style.width = transform + "px";
      resizer.style.left = transform - 0 + "px";
    }

    function pauseEvent(e) {
      if (e.stopPropagation) e.stopPropagation();
      if (e.preventDefault) e.preventDefault();
      e.cancelBubble = true;
      e.returnValue = false;
      return false;
    }
  }
};

export default beforeAndAfterSlider;
