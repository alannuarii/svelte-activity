<script>
  import { date1, date3 } from "../../../lib/js/date";

  export let data;

  const activity = data.data.data.length > 0 ? data.data.data : [];
  const endpoint = data.endpoint;

  let isFileSelected = false;

  const handleSubmit = (event) => {
    isFileSelected = !!event.target.files.length;
  };
</script>

<section>
  <div class="px-3 pb-4">
    <div class="form-floating mb-3">
      <input type="text" class="form-control bg-white" id="floatingInput" value={date1(activity[0].tanggal)} disabled />
      <label for="floatingInput">Tanggal Pekerjaan</label>
    </div>

    {#if activity[0].jenis === "eksternal"}
      <div class="form-floating mb-3">
        <input type="text" class="form-control bg-white" id="floatingInput" value={activity[0].perusahaan} disabled />
        <label for="floatingInput">Nama Perusahaan</label>
      </div>
    {/if}
    <div class="form-floating mb-3">
      <input type="text" class="form-control bg-white" id="floatingInput" value={activity[0].pekerjaan} disabled />
      <label for="floatingInput">Nama Pekerjaan</label>
    </div>
    <div class="border p-3 rounded-4">
      <h6 class="text-center">Dokumentasi</h6>
      {#if activity[0].foto}
        {#each activity as pic}
          <div class="mt-3 position-relative">
            <img src={`${endpoint}/static/img/${pic.foto}`} class="img-fluid rounded-4" alt="" />
            <div class="dropdown position-absolute top-0 end-0 mt-2">
              <button type="button" class="btn" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi-three-dots-vertical"></i>
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href={`${endpoint}/static/img/${pic.foto}`} download={pic.foto}>Download</a></li>
              </ul>
            </div>
          </div>
        {/each}
      {:else}
        <div>
          <div class="text-center mb-5 mt-4"><span class="badge text-bg-secondary">Tidak ada foto</span></div>
          <form method="POST" enctype="multipart/form-data">
            <input type="file" name="foto" class="form-control" id="exampleFormControlInput1" multiple accept="image/*" on:change={handleSubmit} />
            <input type="hidden" name="tanggal" class="form-control" id="exampleFormControlInput1" value={date3(activity[0].tanggal)} />
            <input type="hidden" name="pekerjaan" class="form-control" id="exampleFormControlInput1" value={activity[0].pekerjaan} />
            {#if isFileSelected}
              <div class="mt-3 text-center">
                <button type="submit" class="btn btn-sm btn-info">Submit</button>
              </div>
            {/if}
          </form>
        </div>
      {/if}
    </div>
  </div>
</section>

<style>
  i {
    font-size: 30px;
  }
  img {
    opacity: 0.8;
  }
  button {
    border: none;
  }
</style>
