const isFadePage = window.location.pathname.startsWith("/fadeengine");
const root = isFadePage ? "../" : "./";
const fadePath = isFadePage ? "./" : "./fadeengine/";

const HEADER = `
<header class="sticky top-0 z-50 border-b border-white/10 bg-[#101012]/95 text-white shadow-sm backdrop-blur-xl">
  <div class="navbar mx-auto min-h-16 max-w-[1600px] px-4 sm:px-6 lg:px-8">
    <div class="navbar-start flex-1 lg:flex-none">
      <div class="relative" data-product-menu>
        <button type="button" data-product-trigger aria-expanded="false" aria-controls="product-menu-panel" class="btn btn-ghost gap-2 px-2 text-white">
          <span class="text-lg font-black tracking-tight">FROKYTE</span>
          <i data-product-arrow class="fa-solid fa-chevron-down text-xs text-white/60 transition-transform duration-200"></i>
        </button>
        <div id="product-menu-panel" data-product-panel class="absolute left-0 top-full z-[70] mt-3 hidden w-[min(340px,calc(100vw-2rem))] rounded-lg border border-white/10 bg-[#191a1d] p-4 text-white shadow-2xl">
          <p class="px-2 text-xs font-bold uppercase tracking-widest text-white/40">Frokyte</p>
          <h3 class="mb-3 mt-1 px-2 text-lg font-bold">Our projects</h3>
          <ul class="menu w-full">
            <li><a href="${fadePath}" class="gap-3"><span class="flex h-10 w-10 items-center justify-center rounded-md bg-white/10 font-black">F</span><span><span class="block font-semibold">FADE Engine</span><span class="block text-xs text-white/45">Our upcoming creation engine</span></span></a></li>
            <li><a href="https://rebase.js.org/" class="gap-3"><span class="flex h-10 w-10 items-center justify-center rounded-md bg-white/10 font-black">R</span><span><span class="block font-semibold">RebaseJS</span><span class="block text-xs text-white/45">Lightweight JavaScript toolkit</span></span></a></li>
          </ul>
          <div class="divider before:bg-white/10 after:bg-white/10"></div>
          <a href="${root}#studio" class="btn btn-ghost btn-sm w-full justify-between">About Frokyte <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
      <span class="mx-3 h-7 w-px bg-white/20"></span>
      <a href="${isFadePage ? "./" : "./"}" class="text-sm font-bold tracking-tight">${isFadePage ? "FADE ENGINE" : "CREATIVE STUDIO"}</a>
    </div>

    <nav class="navbar-center hidden flex-1 lg:flex">
      <ul class="menu menu-horizontal items-center gap-1 px-2 text-sm font-medium text-white/75">
        ${isFadePage
          ? '<li><a href="#overview">Overview</a></li><li><a href="#features">Features</a></li><li><a href="#waitlist">Waitlist</a></li><li><a href="../#studio">Studio</a></li>'
          : '<li><a href="#studio">Studio</a></li><li><a href="#work">Our work</a></li><li><a href="#values">What we do</a></li><li><a href="#contact">Contact</a></li>'}
      </ul>
    </nav>

    <div class="navbar-end hidden flex-1 gap-2 lg:flex">
      ${isFadePage
        ? '<a href="../" class="btn btn-ghost btn-sm text-white">Frokyte Studio</a><a href="#waitlist" class="btn btn-primary btn-sm rounded-md px-5">Join Waitlist</a>'
        : '<a href="./fadeengine/" class="btn btn-ghost btn-sm text-white">FADE Engine</a><a href="#contact" class="btn btn-primary btn-sm rounded-md px-5">Get in touch</a>'}
      <div class="relative" data-desktop-menu>
        <button type="button" data-desktop-trigger aria-expanded="false" aria-controls="desktop-menu-panel" class="btn btn-ghost btn-square btn-sm text-white" aria-label="Open navigation"><i class="fa-solid fa-bars text-lg"></i></button>
        <div id="desktop-menu-panel" data-desktop-panel class="absolute right-0 top-full z-[70] mt-4 hidden w-[min(680px,95vw)] rounded-lg border border-white/10 bg-[#191a1d] p-8 text-white shadow-2xl">
          <div class="grid grid-cols-3 gap-8">
            <div><h3 class="mb-4 text-xs font-bold uppercase tracking-widest text-white/40">Discover</h3><ul class="menu p-0"><li><a href="${root}#studio">About Frokyte</a></li><li><a href="${root}#work">Our work</a></li><li><a href="${root}#contact">Contact</a></li></ul></div>
            <div><h3 class="mb-4 text-xs font-bold uppercase tracking-widest text-white/40">Products</h3><ul class="menu p-0"><li><a href="${fadePath}">FADE Engine</a></li><li><a href="https://rebase.js.org/">RebaseJS</a></li></ul></div>
            <div><h3 class="mb-4 text-xs font-bold uppercase tracking-widest text-white/40">Connect</h3><ul class="menu p-0"><li><a href="https://www.instagram.com/frokyte/">Instagram</a></li><li><a href="mailto:hello@frokyte.com">Contact</a></li></ul></div>
          </div>
        </div>
      </div>
    </div>

    <div class="navbar-end flex flex-1 gap-2 lg:hidden">
      ${isFadePage ? '<a href="#waitlist" class="btn btn-primary btn-sm rounded-md">Waitlist</a>' : '<a href="#contact" class="btn btn-primary btn-sm rounded-md">Contact</a>'}
      <button type="button" data-mobile-open class="btn btn-ghost btn-square text-white" aria-label="Open navigation"><i class="fa-solid fa-bars text-lg"></i></button>
    </div>
  </div>
</header>

<div data-mobile-menu class="mobile-nav fixed inset-0 z-[100] hidden overflow-y-auto overscroll-contain bg-[#101012] text-white" role="dialog" aria-modal="true" aria-label="Mobile navigation">
  <div class="flex min-h-20 items-center justify-between border-b border-white/10 px-6">
    <a href="${root}" class="flex items-center gap-3"><span class="text-2xl font-black">FROKYTE</span><span class="h-7 w-px bg-white/20"></span><span class="text-sm font-bold">${isFadePage ? "FADE ENGINE" : "STUDIO"}</span></a>
    <button type="button" data-mobile-close class="btn btn-ghost btn-square btn-lg text-white" aria-label="Close navigation"><i class="fa-solid fa-xmark text-xl"></i></button>
  </div>
  <div class="mx-auto max-w-2xl px-6 py-10">
    <p class="mb-5 text-xs font-bold uppercase tracking-[.2em] text-white/40">Navigation</p>
    <ul class="menu menu-lg w-full gap-2 p-0 text-xl font-semibold">
      ${isFadePage
        ? '<li><a href="#overview" data-mobile-link>Overview</a></li><li><a href="#features" data-mobile-link>Features</a></li><li><a href="#waitlist" data-mobile-link>Waitlist</a></li><li><a href="../#studio">Frokyte Studio</a></li>'
        : '<li><a href="#studio" data-mobile-link>Studio</a></li><li><a href="#work" data-mobile-link>Our work</a></li><li><a href="#values" data-mobile-link>What we do</a></li><li><a href="#contact" data-mobile-link>Contact</a></li>'}
      <li><a href="${fadePath}">FADE Engine <i class="fa-solid fa-arrow-up-right-from-square ml-auto text-sm text-white/40"></i></a></li>
      <li><a href="https://rebase.js.org/">RebaseJS <i class="fa-solid fa-arrow-up-right-from-square ml-auto text-sm text-white/40"></i></a></li>
    </ul>
    <div class="divider my-8 before:bg-white/10 after:bg-white/10"></div>
    <div class="flex flex-col gap-3"><a href="mailto:hello@frokyte.com" class="btn btn-outline btn-lg w-full border-white/25 text-white">Contact</a><a href="https://www.instagram.com/frokyte/" class="btn btn-ghost btn-lg w-full">Instagram</a></div>
  </div>
</div>
`;

export function loadHeader() {
  const headerEl = document.getElementById("header");
  if (!headerEl) return;
  headerEl.outerHTML = HEADER;

  const productMenu = document.querySelector("[data-product-menu]");
  const productTrigger = document.querySelector("[data-product-trigger]");
  const productPanel = document.querySelector("[data-product-panel]");
  const productArrow = document.querySelector("[data-product-arrow]");
  const desktopMenu = document.querySelector("[data-desktop-menu]");
  const desktopTrigger = document.querySelector("[data-desktop-trigger]");
  const desktopPanel = document.querySelector("[data-desktop-panel]");
  const mobileMenu = document.querySelector("[data-mobile-menu]");

  const setMenu = (panel, trigger, open) => {
    panel?.classList.toggle("hidden", !open);
    trigger?.setAttribute("aria-expanded", String(open));
  };
  const setProductOpen = (open) => {
    setMenu(productPanel, productTrigger, open);
    productArrow?.classList.toggle("rotate-180", open);
  };

  productTrigger?.addEventListener("click", () => setProductOpen(productPanel.classList.contains("hidden")));
  desktopTrigger?.addEventListener("click", () => setMenu(desktopPanel, desktopTrigger, desktopPanel.classList.contains("hidden")));

  document.addEventListener("click", (event) => {
    if (productMenu && !productMenu.contains(event.target)) setProductOpen(false);
    if (desktopMenu && !desktopMenu.contains(event.target)) setMenu(desktopPanel, desktopTrigger, false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setProductOpen(false);
      setMenu(desktopPanel, desktopTrigger, false);
      closeMobile();
    }
  });

  const closeMobile = () => {
    mobileMenu?.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  };
  document.querySelector("[data-mobile-open]")?.addEventListener("click", () => {
    mobileMenu?.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
    mobileMenu?.scrollTo(0, 0);
  });
  document.querySelectorAll("[data-mobile-close], [data-mobile-link]").forEach((element) => {
    element.addEventListener("click", closeMobile);
  });
  mobileMenu?.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", () => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) setTimeout(() => target.scrollIntoView({ behavior: "smooth" }), 0);
    });
  });
}
