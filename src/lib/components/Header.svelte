<script>
  import { page } from "$app/stores";

  $: path = $page.url.pathname;
</script>

<nav class="navbar bg-dark shadow">
  <div class="container-fluid">
    {#if path === "/"}
      <a href="/" class="navbar-brand">DAILY ACTIVITY</a>

      <div>
        <a href="/rekap" class="btn btn-outline-info me-1"><i class="bi-list"></i></a>
      </div>
    {:else}
      <a href="/" class="btn btn-outline-info me-1">Back</a>
      <h6 href="/" class="navbar-brand me-3">DAILY ACTIVITY</h6>
    {/if}
  </div>
</nav>

<style>
  .navbar {
    height: 80px;
  }
  .navbar-brand {
    color: #ffffff;
    font-weight: 700;
    font-size: 23px;
  }
  h6 {
    color: #ffffff;
    font-weight: 700;
    font-size: 18px;
    margin: 0;
  }
</style>
