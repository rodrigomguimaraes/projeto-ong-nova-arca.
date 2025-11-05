// ===============================
// FUNÇÃO: ROLAGEM SUAVE
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// ===============================
// FUNÇÃO: MENU ATIVO (DESTACA PÁGINA ATUAL)
// ===============================
const menuLinks = document.querySelectorAll(".Menu a");

menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    menuLinks.forEach(l => l.classList.remove("ativo"));
    link.classList.add("ativo");
  });
});

// ===============================
// BOTÃO: VOLTAR AO TOPO
// ===============================
const botaoTopo = document.createElement("button");
botaoTopo.innerText = "⬆";
botaoTopo.id = "btnTopo";
document.body.appendChild(botaoTopo);

Object.assign(botaoTopo.style, {
  position: "fixed",
  bottom: "25px",
  right: "25px",
  background: "#b9f6ca",
  color: "#1b5e20",
  border: "none",
  borderRadius: "50%",
  width: "45px",
  height: "45px",
  fontSize: "1.2rem",
  cursor: "pointer",
  display: "none",
  boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
  transition: "all 0.3s"
});

botaoTopo.addEventListener("mouseenter", () => {
  botaoTopo.style.transform = "scale(1.1)";
});
botaoTopo.addEventListener("mouseleave", () => {
  botaoTopo.style.transform = "scale(1)";
});
botaoTopo.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  botaoTopo.style.display = window.scrollY > 300 ? "block" : "none";
});

// ===============================
// EFEITO: APARECER SUAVEMENTE AO ROLAR
// ===============================
const elementos = document.querySelectorAll("section, .hero, footer");

function aparecerScroll() {
  const posicaoTela = window.innerHeight * 0.9;
  elementos.forEach(el => {
    const topo = el.getBoundingClientRect().top;
    if (topo < posicaoTela) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
}

elementos.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(50px)";
  el.style.transition = "opacity 1s ease, transform 1s ease";
});

// Garante que o conteúdo apareça mesmo sem rolar
window.addEventListener("load", aparecerScroll);
window.addEventListener("scroll", aparecerScroll);
