/**
 * Page-specific navigation configuration.
 *
 * Add or edit an entry to customize the desktop navbar and mobile hamburger
 * menu for a page. Keys are normalized URL paths ("/", "/fadeengine").
 */
export const NAVBAR_CONFIG = {
  "/": {
    brandLabel: "CREATIVE STUDIO",
    desktopLinks: [
      { label: "Studio", href: "#studio" },
      { label: "Our work", href: "#work" },
      { label: "What we do", href: "#values" },
      { label: "Contact", href: "#contact" }
    ],
    desktopAction: { label: "Get in touch", href: "#contact" },
    mobileGroups: [
      {
        title: "Explore",
        items: [
          { label: "Studio", href: "#studio" },
          { label: "Our work", href: "#work" },
          { label: "What we do", href: "#values" },
          { label: "Contact", href: "#contact" }
        ]
      },
      {
        title: "Projects",
        items: [
          { label: "FADE Engine", href: "https://frokyte.github.io/fadeengine/" },
          { label: "RebaseJS", href: "https://rebase.js.org/", external: true }
        ]
      }
    ],
    mobileAction: { label: "Get in touch", href: "#contact" }
  },

  "/fadeengine": {
    brandLabel: "FADE ENGINE",
    desktopLinks: [
      { label: "Overview", href: "#overview" },
      { label: "Features", href: "#features" },
      { label: "Waitlist", href: "#waitlist" },
      { label: "Studio", href: "https://frokyte.github.io/#studio" }
    ],
    desktopAction: { label: "Join Waitlist", href: "#waitlist" },
    mobileGroups: [
      {
        title: "FADE Engine",
        items: [
          { label: "Overview", href: "#overview" },
          { label: "Features", href: "#features" },
          { label: "Waitlist", href: "#waitlist" }
        ]
      },
      {
        title: "Frokyte",
        items: [
          { label: "Frokyte Studio", href: "https://frokyte.github.io/#studio" },
          { label: "RebaseJS", href: "https://rebase.js.org/", external: true }
        ]
      }
    ],
    mobileAction: { label: "Join Waitlist", href: "#waitlist" }
  }
};

const DEFAULT_NAVBAR = {
  brandLabel: "FROKYTE",
  desktopLinks: [],
  desktopAction: null,
  mobileGroups: [{ title: "Navigation", items: [{ label: "Frokyte Studio", href: "https://frokyte.github.io/" }] }],
  mobileAction: null
};

function currentPagePath() {
  const path = window.location.pathname.replace(/\\/+$/, "") || "/";
  return path;
}

function getPageConfig() {
  return NAVBAR_CONFIG[currentPagePath()] || DEFAULT_NAVBAR;
}

function renderLink(item, className = "") {
  const external = item.external ? ' target="_blank" rel="noopener noreferrer"' : "";
  return `<li><a class="${className}" href="${item.href}"${external}>${item.label}${item.external ? ' <i class="fa-solid fa-arrow-up-right-from-square ml-auto text-xs opacity-40"></i>' : ""}</a></li>`;
}

function renderLinks(items, className = "") {
  return items.map(item => renderLink(item, className)).join("");
}

function renderMobileGroups(groups) {
  return groups.map(group => `
    <section class="mb-9">
      <h3 class="mb-3 px-3 text-xs font-bold uppercase tracking-[.2em] text-white/40">${group.title}</h3>
      <ul class="menu menu-lg w-full gap-1 p-0 text-xl font-semibold">
        ${renderLinks(group.items)}
      </ul>
    </section>
  `).join("");
}

function renderDesktopMegaMenu(config) {
  return `
    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      ${config.mobileGroups.map(group => `
        <section>
          <h3 class="mb-4 text-xs font-bold uppercase tracking-widest text-white/40">${group.title}</h3>
          <ul class="menu p-0">${renderLinks(group.items)}</ul>
        </section>
      `).join("")}
    </div>
    ${config.desktopAction ? `<div class="mt-7 border-t border-white/10 pt-5"><a href="${config.desktopAction.href}" class="btn btn-primary btn-sm rounded-md">${config.desktopAction.label}</a></div>` : ""}
  `;
}

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
            <li><a href="https://frokyte.github.io/fadeengine/" class="gap-3"><span class="flex h-10 w-10 items-center justify-center rounded-md bg-white/10 font-black">F</span><span><span class="block font-semibold">FADE Engine</span><span class="block text-xs text-white/45">Our upcoming creation engine</span></span></a></li>
            <li><a href="https://rebase.js.org/" class="gap-3"><span class="flex h-10 w-10 items-center justify-center rounded-md bg-white/10 font-black">R</span><span><span class="block font-semibold">RebaseJS</span><span class="block text-xs text-white/45">Lightweight JavaScript toolkit</span></span></a></li>
          </ul>
          <div class="divider before:bg-white/10 after:bg-white/10"></div>
          <a href="https://frokyte.github.io/#studio" class="btn btn-ghost btn-sm w-full justify-between">About Frokyte <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
      <span class="mx-3 h-7 w-px bg-white/20"></span>
      <a data-brand-label href="https://frokyte.github.io/" class="text-sm font-bold tracking-tight">CREATIVE STUDIO</a>
    </div>

    <nav class="navbar-center hidden flex-1 lg:flex" aria-label="Main navigation">
      <ul data-desktop-links class="menu menu-horizontal items-center gap-1 px-2 text-sm font-medium text-white/75"></ul>
    </nav>

    <div class="navbar-end hidden flex-1 items-center justify-end gap-2 lg:flex">
      <a data-desktop-action class="btn btn-primary btn-sm rounded-md px-5"></a>
      <div class="relative" data-desktop-menu>
        <button type="button" data-desktop-trigger aria-expanded="false" aria-controls="desktop-menu-panel" class="btn btn-ghost btn-square btn-sm text-white" aria-label="Open navigation"><i class="fa-solid fa-bars text-lg"></i></button>
        <div id="desktop-menu-panel" data-desktop-panel class="absolute right-0 top-full z-[70] mt-4 hidden w-[min(680px,95vw)] rounded-lg border border-white/10 bg-[#191a1d] p-8 text-white shadow-2xl"></div>
      </div>
    </div>

    <div class="navbar-end flex flex-1 justify-end lg:hidden">
      <button type="button" data-mobile-open class="btn btn-ghost btn-square text-white" aria-label="Open navigation"><i class="fa-solid fa-bars text-lg"></i></button>
    </div>
  </div>
</header>

<div data-mobile-menu class="mobile-nav fixed inset-0 z-[100] hidden overflow-y-auto overscroll-contain bg-[#101012] text-white" role="dialog" aria-modal="true" aria-label="Mobile navigation">
  <div class="sticky top-0 z-10 flex min-h-20 items-center justify-between border-b border-white/10 bg-[#101012]/95 px-6 backdrop-blur-xl">
    <a href="https://frokyte.github.io/" class="flex items-center gap-3"><span class="text-2xl font-black">FROKYTE</span><span class="h-7 w-px bg-white/20"></span><span data-mobile-brand-label class="text-sm font-bold">STUDIO</span></a>
    <button type="button" data-mobile-close class="btn btn-ghost btn-square btn-lg text-white" aria-label="Close navigation"><i class="fa-solid fa-xmark text-xl"></i></button>
  </div>
  <div class="mx-auto max-w-3xl px-6 py-10">
    <div data-mobile-groups></div>
    <div data-mobile-action-container class="mt-4 hidden border-t border-white/10 pt-7">
      <a data-mobile-action class="btn btn-primary btn-lg w-full rounded-md"></a>
    </div>
    <div class="mt-10 flex flex-wrap gap-6 border-t border-white/10 pt-7 text-sm text-white/55">
      <a href="https://www.instagram.com/frokyte/" aria-label="Instagram" class="text-xl"><i class="fa-brands fa-instagram"></i></a>
      <a href="https://discord.gg/" aria-label="Discord" class="text-xl"><i class="fa-brands fa-discord"></i></a>
    </div>
  </div>
</div>
`;

export function loadHeader() {
  const headerEl = document.getElementById("header");
  if (!headerEl) return;

  const config = getPageConfig();
  headerEl.outerHTML = HEADER;

  const brandLabel = document.querySelector("[data-brand-label]");
  const mobileBrandLabel = document.querySelector("[data-mobile-brand-label]");
  if (brandLabel) brandLabel.textContent = config.brandLabel;
  if (mobileBrandLabel) mobileBrandLabel.textContent = config.brandLabel;

  const desktopLinks = document.querySelector("[data-desktop-links]");
  if (desktopLinks) desktopLinks.innerHTML = renderLinks(config.desktopLinks);

  const desktopPanel = document.querySelector("[data-desktop-panel]");
  if (desktopPanel) desktopPanel.innerHTML = renderDesktopMegaMenu(config);

  const desktopAction = document.querySelector("[data-desktop-action]");
  if (config.desktopAction && desktopAction) {
    desktopAction.href = config.desktopAction.href;
    desktopAction.textContent = config.desktopAction.label;
  } else {
    desktopAction?.remove();
  }

  const mobileGroups = document.querySelector("[data-mobile-groups]");
  if (mobileGroups) mobileGroups.innerHTML = renderMobileGroups(config.mobileGroups);

  const mobileActionContainer = document.querySelector("[data-mobile-action-container]");
  const mobileAction = document.querySelector("[data-mobile-action]");
  if (config.mobileAction && mobileAction && mobileActionContainer) {
    mobileAction.href = config.mobileAction.href;
    mobileAction.textContent = config.mobileAction.label;
    mobileActionContainer.classList.remove("hidden");
  }

  const productMenu = document.querySelector("[data-product-menu]");
  const productTrigger = document.querySelector("[data-product-trigger]");
  const productPanel = document.querySelector("[data-product-panel]");
  const productArrow = document.querySelector("[data-product-arrow]");
  const desktopMenu = document.querySelector("[data-desktop-menu]");
  const desktopTrigger = document.querySelector("[data-desktop-trigger]");
  const mobileMenu = document.querySelector("[data-mobile-menu]");

  const setMenu = (panel, trigger, open) => {
    panel?.classList.toggle("hidden", !open);
    trigger?.setAttribute("aria-expanded", String(open));
  };
  const setProductOpen = (open) => {
    setMenu(productPanel, productTrigger, open);
    productArrow?.classList.toggle("rotate-180", open);
  };
  const closeMobile = () => {
    mobileMenu?.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
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

  document.querySelector("[data-mobile-open]")?.addEventListener("click", () => {
    mobileMenu?.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
    mobileMenu?.scrollTo(0, 0);
  });
  document.querySelectorAll("[data-mobile-close]").forEach(element => element.addEventListener("click", closeMobile));
  mobileMenu?.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", () => {
      const target = document.querySelector(link.getAttribute("href"));
      closeMobile();
      if (target) setTimeout(() => target.scrollIntoView({ behavior: "smooth" }), 0);
    });
  });
  mobileMenu?.querySelectorAll('a[href^="https://"], a[href^="mailto:"]').forEach(link => {
    link.addEventListener("click", closeMobile);
  });
}
