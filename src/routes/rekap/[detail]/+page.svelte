<script>
  import { date1 } from "../../../lib/js/date";
  //   import { API_ENDPOINT } from "$env/dynamic/private";

  const API_ENDPOINT = "http://192.168.211.107:5010";
  export let data;
  const activity = data.data.data.length > 0 ? data.data.data : [];
  console.log(activity)
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
      {#each activity as pic}
        <div class="mt-3"><img src={`${API_ENDPOINT}/static/img/${pic.foto}`} class="img-fluid rounded-4" alt="" /></div>
      {/each}
    </div>
  </div>
</section>
