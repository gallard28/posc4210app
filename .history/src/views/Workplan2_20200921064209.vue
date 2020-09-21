<template>
  <div class="Workplan2 container">
    <h1>Workplan 2</h1>
    <div class="divider"></div>
    <div class="section">
      <div class="col s12">
        <h3>The Workplan</h3>
        <img src="@/assets/Workplan2.png" class="responsive-img">
      </div>
      <br><br>
      <div class="divider"></div>
      <div class="col s12">
        <h3>Analytical Results</h3>
        <img src="@/assets/Workplan2_results.png" class="responsive-img">
      </div>
      <br><br>
      <div class="divider"></div>
      <div class="col s12">
        <h3>Synthesize Results</h3>
        <p class="left-align">Using Part 1 Question 4, fill out the table asking whether you rejected or did reject each hypothesis. In the implications column, briefly describe the impact of each decision on the overall problem statement.</p>
      </div>
    </div>
    <br><br>
    <router-link  router-link to="/pyramid">
          <a class="waves-effect waves-light btn-large">
          Prewriting Pyramid
            <i class="material-icons right">thumb_up</i> 
          </a>
      <br><br>
  </div>
</template>

<script>
export default {
  name: 'Workplan2'

}
</script>

<style>

</style>