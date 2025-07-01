<script>
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import '../styles/global.css';
</script>

<div class="layout-wrapper">
  <Navbar />
  <div class="page-wrapper">
    <slot />
  </div>
  <Footer />
</div>

<style>
  .layout-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    overflow-x: hidden;
  }

  /* Fix the Navbar */
  :global(nav) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 50;
  }

  .page-wrapper {
    flex: 1;
    padding-top: 3rem; 
    width: 100%;
    overflow-x: hidden;
  }
</style>
