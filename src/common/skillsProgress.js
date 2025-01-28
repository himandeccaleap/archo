const skillsProgress = () => {
    let skillsSection = document.querySelector(".skills-sec");
    if (skillsSection) {
      window.addEventListener("scroll", () => {
        document
          .querySelectorAll(".skill-progress .progres")
          .forEach((item) => {
            var myVal = item.getAttribute("data-value");
            if (window.pageYOffset > skillsSection.offsetTop - 400) {
              item.style.width = myVal;
            }
          });
      });
    }
}

export default skillsProgress;
