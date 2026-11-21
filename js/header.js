const HEADER = `
<header class="sticky top-0 z-40 border-b border-white/10 bg-[#101012]/95 text-white shadow-sm backdrop-blur-xl">
  <div class="navbar mx-auto min-h-16 max-w-[1600px] px-4 sm:px-6 lg:px-8">
    <div class="navbar-start flex-1 lg:flex-none">
      <div class="dropdown dropdown-bottom dropdown-start">
        <button tabindex="0" class="btn btn-ghost gap-2 px-2 text-white" aria-label="Frokyte products">
          <span class="text-lg font-black tracking-tight">FROKYTE</span>
          <i class="fa-solid fa-chevron-down text-xs text-white/60"></i>
        </button>
        <div tabindex="-1" class="dropdown-content z-50 mt-3 w-80 rounded-lg border border-white/10 bg-[#191a1d] p-4 text-white shadow-2xl">
          <p class="px-2 text-xs font-bold uppercase tracking-widest text-white/40">Frokyte</p>
          <h3 class="mb-3 mt-1 px-2 text-lg font-bold">Our projects</h3>
          <ul class="menu w-full">
            <li><a href="#waitlist" class="gap-3"><span class="flex h-10 w-10 items-center justify-center rounded-md bg-white/10 font-black">F</span><span><span class="block font-semibold">FADE Engine</span><span class="block text-xs text-white/45">Our upcoming creation engine</span></span></a></li>
            <li><a href="https://rebase.js.org/" class="gap-3"><span class="flex h-10 w-10 items-center justify-center rounded-md bg-white/10 font-black">R</span><span><span class="block font-semibold">RebaseJS</span><span class="block text-xs text-white/45">Lightweight JavaScript toolkit</span></span></a></li>
          </ul>
          <div class="divider before:bg-white/10 after:bg-white/10"></div>
          <a href="#about" class="btn btn-ghost btn-sm w-full justify-between">About Frokyte <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
      <span class="mx-3 h-7 w-px bg-white/20"></span>
      <a href="/" class="text-sm font-bold tracking-tight">FADE ENGINE</a>
    </div>

    <div class="navbar-center hidden flex-1 lg:flex">
      <ul class="menu menu-horizontal items-center gap-1 px-2 text-sm font-medium text-white/75">
        <li><a href="#about">About</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#products">Projects</a></li>
        <li><a href="#waitlist">Waitlist</a></li>
      </ul>
    </div>

    <div class="navbar-end hidden flex-1 gap-2 lg:flex">
      <a href="https://rebase.js.org/" class="btn btn-ghost btn-sm text-white">RebaseJS</a>
      <a href="#waitlist" class="btn btn-primary btn-sm rounded-md px-5">Join Waitlist</a>
      <div class="dropdown dropdown-end">
        <button tabindex="0" class="btn btn-ghost btn-square btn-sm text-white" aria-label="Open navigation">
          <i class="fa-solid fa-bars text-lg"></i>
        </button>
        <div tabindex="-1" class="dropdown-content z-50 mt-4 w-[min(760px,95vw)] rounded-lg border border-white/10 bg-[#191a1d] p-8 text-white shadow-2xl">
          <div class="grid grid-cols-3 gap-8">
            <div>
              <h3 class="mb-4 text-xs font-bold uppercase tracking-widest text-white/40">Discover</h3>
              <ul class="menu p-0">
                <li><a href="#about">About Frokyte</a></li>
                <li><a href="#features">FADE Engine</a></li>
                <li><a href="#products">Our projects</a></li>
              </ul>
            </div>
            <div>
              <h3 class="mb-4 text-xs font-bold uppercase tracking-widest text-white/40">Products</h3>
              <ul class="menu p-0">
                <li><a href="#waitlist">FADE Engine</a></li>
                <li><a href="https://rebase.js.org/">RebaseJS</a></li>
              </ul>
            </div>
            <div>
              <h3 class="mb-4 text-xs font-bold uppercase tracking-widest text-white/40">Connect</h3>
              <ul class="menu p-0">
                <li><a href="https://www.instagram.com/frokyte/">Instagram</a></li>
                <li><a href="mailto:hello@frokyte.com">Contact</a></li>
                <li><a href="#waitlist">Join the waitlist</a></li>
              </ul>
            </div>
          </div>
          <div class="divider before:bg-white/10 after:bg-white/10"></div>
          <div class="flex items-center justify-between">
            <div><p class="font-bold">Frokyte</p><p class="text-sm text-white/45">Building what's next.</p></div>
            <a href="#waitlist" class="btn btn-primary btn-sm">Get started</a>
          </div>
        </div>
      </div>
    </div>

    <div class="navbar-end flex flex-1 gap-2 lg:hidden">
      <a href="#waitlist" class="btn btn-primary btn-sm rounded-md">Waitlist</a>
      <label for="mobile-navigation" class="btn btn-ghost btn-square text-white" aria-label="Open navigation">
        <i class="fa-solid fa-bars text-lg"></i>
      </label>
    </div>
  </div>
</header>

<input id="mobile-navigation" type="checkbox" class="modal-toggle">
<div class="modal z-[100] items-start bg-[#101012] text-white" role="dialog" aria-label="Mobile navigation">
  <div class="min-h-screen w-full max-w-none overflow-y-auto rounded-none bg-[#101012] p-0 text-white">
    <div class="flex min-h-20 items-center justify-between border-b border-white/10 px-6">
      <a href="/" class="flex items-center gap-3"><span class="text-2xl font-black">FROKYTE</span><span class="h-7 w-px bg-white/20"></span><span class="text-sm font-bold">FADE ENGINE</span></a>
      <label for="mobile-navigation" class="btn btn-ghost btn-square btn-lg text-white" aria-label="Close navigation"><i class="fa-solid fa-xmark text-xl"></i></label>
    </div>

    <div class="mx-auto max-w-2xl px-6 py-10">
      <div id="mobile-main-page">
        <p class="mb-5 text-xs font-bold uppercase tracking-[.2em] text-white/40">Navigation</p>
        <ul class="menu menu-lg w-full gap-2 p-0 text-xl font-semibold">
          <li><a href="#about" data-mobile-close>About</a></li>
          <li><a href="#features" data-mobile-close>FADE Engine</a></li>
          <li><a href="#products" data-mobile-close>Projects</a></li>
          <li><a href="#waitlist" data-mobile-close>Waitlist</a></li>
          <li><button type="button" onclick="showMobilePage('resources')">Resources <i class="fa-solid fa-arrow-right ml-auto text-sm text-white/40"></i></button></li>
          <li><button type="button" onclick="showMobilePage('company')">Company <i class="fa-solid fa-arrow-right ml-auto text-sm text-white/40"></i></button></li>
        </ul>

        <div class="divider my-8 before:bg-white/10 after:bg-white/10"></div>
        <p class="mb-5 text-xs font-bold uppercase tracking-[.2em] text-white/40">Frokyte projects</p>
        <ul class="menu menu-lg w-full gap-2 p-0 text-xl font-semibold">
          <li><a href="#waitlist" data-mobile-close>FADE Engine</a></li>
          <li><a href="https://rebase.js.org/">RebaseJS</a></li>
        </ul>
        <div class="divider my-8 before:bg-white/10 after:bg-white/10"></div>
        <div class="flex flex-col gap-3">
          <a href="#waitlist" data-mobile-close class="btn btn-primary btn-lg w-full">Join the Waitlist</a>
          <a href="mailto:hello@frokyte.com" class="btn btn-outline btn-lg w-full border-white/25 text-white">Contact</a>
        </div>
      </div>

      <div id="mobile-resources-page" class="hidden">
        <button type="button" onclick="showMobilePage('main')" class="btn btn-ghost btn-lg -ml-3 mb-8 text-white"><i class="fa-solid fa-arrow-left"></i> Back</button>
        <p class="text-xs font-bold uppercase tracking-[.2em] text-white/40">Explore</p>
        <h2 class="mb-8 mt-4 text-4xl font-bold">Resources</h2>
        <ul class="menu menu-lg w-full gap-3 p-0 text-xl font-semibold">
          <li><a href="#features" data-mobile-close>FADE Engine overview</a></li>
          <li><a href="https://rebase.js.org/">RebaseJS documentation</a></li>
          <li><a href="https://www.instagram.com/frokyte/">Instagram</a></li>
        </ul>
      </div>

      <div id="mobile-company-page" class="hidden">
        <button type="button" onclick="showMobilePage('main')" class="btn btn-ghost btn-lg -ml-3 mb-8 text-white"><i class="fa-solid fa-arrow-left"></i> Back</button>
        <p class="text-xs font-bold uppercase tracking-[.2em] text-white/40">Frokyte</p>
        <h2 class="mb-8 mt-4 text-4xl font-bold">Company</h2>
        <ul class="menu menu-lg w-full gap-3 p-0 text-xl font-semibold">
          <li><a href="#about" data-mobile-close>About us</a></li>
          <li><a href="mailto:hello@frokyte.com">Contact</a></li>
          <li><a href="https://www.instagram.com/frokyte/">Instagram</a></li>
        </ul>
      </div>
    </div>
  </div>
  <label class="modal-backdrop" for="mobile-navigation">Close</label>
</div>
`;

export function showMobilePage(page) {
  const pages = ["main", "resources", "company"];
  pages.forEach((name) => {
    const element = document.getElementById(`mobile-${name}-page`);
    if (element) element.classList.toggle("hidden", name !== page);
  });
}

window.showMobilePage = showMobilePage;

export function loadHeader() {
  const headerEl = document.getElementById("header");
  if (!headerEl) return;

  headerEl.outerHTML = HEADER;

  document.querySelectorAll("[data-mobile-close]").forEach((link) => {
    link.addEventListener("click", () => {
      const toggle = document.getElementById("mobile-navigation");
      if (toggle) toggle.checked = false;
      showMobilePage("main");
    });
  });

  console.log("Header loaded.");
}
