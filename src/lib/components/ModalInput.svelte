<script>
	import { names } from '../js/names';
</script>

<div
	class="modal fade"
	id="exampleModal"
	tabindex="-1"
	aria-labelledby="exampleModalLabel"
	aria-hidden="true"
>
	<div class="modal-dialog modal-dialog-centered">
		<div class="modal-content">
			<div class="modal-header">
				<h1 class="modal-title fs-5" id="exampleModalLabel">Input Data</h1>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
			</div>
			<form method="POST">
				<div class="modal-body mx-3">
					<div class="mb-3 mx-1 d-flex justify-content-evenly">
						<div class="form-check">
							<input
								class="form-check-input"
								type="radio"
								name="status"
								id="flexRadioDefault1"
								value="pinjam"
							/>
							<label class="form-check-label" for="flexRadioDefault1">Pinjam</label>
						</div>
						<div class="form-check">
							<input
								class="form-check-input"
								type="radio"
								name="status"
								id="flexRadioDefault1"
								value="bayar"
							/>
							<label class="form-check-label" for="flexRadioDefault1">Bayar</label>
						</div>
					</div>
					<div class="mb-3">
						<label for="exampleFormControlInput1" class="form-label">Tanggal</label>
						<input type="date" name="tanggal" class="form-control" id="exampleFormControlInput1" />
					</div>
					<div class="mb-3">
						<label for="exampleFormControlInput1" class="form-label">Nama</label>
						<select class="form-select" aria-label="Default select example" name="nama">
							<option selected>Open this select menu</option>
							{#each names as name}
								<option value={name}>{name}</option>
							{/each}
						</select>
					</div>
					<div class="mb-3">
						<label for="exampleFormControlInput1" class="form-label">Nilai</label>
						<input type="number" name="nilai" class="form-control" id="exampleFormControlInput1" />
					</div>
				</div>
				<div class="modal-footer">
					<button type="submit" class="btn btn-warning">Submit</button>
				</div>
			</form>
		</div>
	</div>
</div>
