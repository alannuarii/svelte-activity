<script>
  let selected = "internal";
</script>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header d-flex justify-content-center">
        <h1 class="modal-title fs-5 text-info" id="exampleModalLabel">INPUT DATA</h1>
      </div>
      <form method="POST">
        <div class="modal-body mx-3">
          <div class="mb-3 mx-1 d-flex justify-content-evenly">
            <div class="form-check">
              <input class="form-check-input" type="radio" name="status" id="flexRadioDefault1" value="internal" bind:group={selected} checked />
              <label class="form-check-label" for="flexRadioDefault1">Internal</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="status" id="flexRadioDefault1" value="eksternal" bind:group={selected} />
              <label class="form-check-label" for="flexRadioDefault1">Eksternal</label>
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Tanggal</label>
            <input type="date" name="tanggal" class="form-control" id="exampleFormControlInput1" />
          </div>
          {#if selected === "eksternal"}
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Nama Perusahaan</label>
              <input type="text" name="perusahaan" class="form-control" id="exampleFormControlInput1" />
            </div>
          {/if}
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Nama Pekerjaan</label>
            <input type="text" name="pekerjaan" class="form-control" id="exampleFormControlInput1" />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Dokumentasi</label>
            <input type="file" name="foto" class="form-control" id="exampleFormControlInput1" multiple />
          </div>
        </div>
        <div class="modal-footer">
          <button type="submit" class="btn btn-info">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>

<style>
	h1{
		font-weight: 700;
	}
</style>