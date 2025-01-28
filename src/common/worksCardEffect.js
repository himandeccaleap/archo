import getSiblings from "./getSiblings";

const worksCardEffect = () => {
  let workColumns = document.querySelectorAll(".full-bg .cluom"),
    glryTabsImages = document.querySelectorAll(".glry-img .tab-img");
  if (workColumns) {
    workColumns.forEach((cluom) => {
      cluom.addEventListener("mouseenter", (e) => {
        var tab_id = e.target.getAttribute("data-tab");
        cluom.classList.remove("current");
        e.target.classList.add("current");
        glryTabsImages.forEach((tabImg) => {
          tabImg.classList.remove("current");
        });
        document.getElementById(tab_id).classList.add("current");
      });
      cluom.addEventListener("mouseleave", (e) => {
        if (e.target.classList.contains("current")) {
          getSiblings(e.target).forEach((item) =>
            item.classList.remove("current")
          );
          return false;
        }
      });
    });
  }
};

export default worksCardEffect;
