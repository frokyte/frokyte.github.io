const HEADER = `
<div class="navbar bg-base-100 shadow-sm">
  <div class="flex-1">
    <details class="dropdown">
      <summary class="m-1"><i class="fa-solid fa-hashtag"></i></summary>
      <ul class="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
        <li>This feature is comming soon.</li>
        <li>Please come back later.</li>
      </ul>
    </details>
    Home
  </div>
  <div class="flex-none">
    <details class="dropdown">
      <summary class="m-1"><i class="fa-solid fa-hamburger"></i></summary>
      <ul class="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
        <li>This feature is comming soon.</li>
        <li>Please come back later.</li>
      </ul>
    </details>
  </div>
</div>
`;

export function loadHeader() {
  const header_el = document.getElementById("header");

  header_el.outerHTML = HEADER;

  console.log("Header loaded.");
}
