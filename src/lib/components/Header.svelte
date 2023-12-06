<script>
	import ModalInput from './ModalInput.svelte';
	import { page } from '$app/stores';

	$: path = $page.url.pathname;
</script>

<nav class="navbar bg-dark shadow">
	<div class="container-fluid">
		{#if path === '/'}
			<a href="/" class="navbar-brand">Daily Activity</a>

			<div>
				<a href="/detail" class="btn btn-outline-info me-1">Detail</a>
				<button
					class="btn btn-info"
					data-bs-toggle="modal"
					data-bs-target="#exampleModal">Input</button
				>
				<ModalInput />
			</div>
		{:else}
			<a href="/" class="btn btn-outline-light me-1">Back</a>
			<h6 href="/" class="navbar-brand">Daily Activity</h6>
		{/if}
	</div>
</nav>

<style>
    .navbar{
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
