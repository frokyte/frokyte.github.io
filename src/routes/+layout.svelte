<script>
  export const prerender = true;
  export const trailingSlash = 'always';

  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import '../../css/index.css';
</script>

<svelte:head>
  <meta name="theme-color" content="#101012" />
</svelte:head>

<div data-theme="x-unreal-dark" class="min-h-screen bg-base-200 text-base-content">
  <Header />
  <slot />
  <Footer />
</div>
