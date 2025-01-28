const loadingPace = () => {
    let preloader = document.querySelector("#preloader"),
      loadingText = document.querySelector(".loading-text");
    const addDoneClass = () => {
      preloader.classList.add("isdone");
      loadingText.classList.add("isdone");
    };
    Pace.on("start", function () {
      preloader.classList.remove("isdone");
      loadingText.classList.remove("isdone");
    });
    Pace.on("done", function () {
      addDoneClass();
    });
    if (document.querySelector("body").classList.contains("pace-done")) {
      addDoneClass();
    }
    document.addEventListener("load", () => {
      addDoneClass();
    });
}

export default loadingPace