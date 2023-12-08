<script>
  import { date2 } from "../../lib/js/date";
  export let data;
  const activities = data.data.data.length > 0 ? data.data.data : [];
</script>

<section>
  <h3 class="text-center mb-4 text-info">REKAP DATA</h3>
  <div class="table-responsive">
    <table class="table table-bordered">
      <thead class="table-secondary">
        <tr>
          <th scope="col" class="text-center align-middle">No</th>
          <th scope="col" class="text-center align-middle">Tanggal</th>
          <th scope="col" class="text-center align-middle">Nama Pekerjaan</th>
        </tr>
      </thead>
      <tbody>
        {#each activities as act, i}
          <tr>
            <td class="text-center align-middle">{i + 1}</td>
            <td class="text-center align-middle">{date2(act.tanggal)}</td>
            <td class="align-middle"><a href="/rekap/{act.kode}" class="text-info text-decoration-none">{act.pekerjaan}</a></td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</section>

<style>
  table {
    font-size: 13px;
  }
  h3{
    font-weight: 700;
  }
</style>
