<template>
  <div class="Workplan1 container">
    <h1>Workplan 1</h1>
    <div class="divider"></div>
    <div class="section">
      <div class="col s12">
        <h3>The Workplan</h3>
        <img src="@/assets/Workplan1.png" class="responsive-img">
      </div>
      <br><br>
      <div class="divider"></div>
      <div class="col s12">
        <h3>Analytical Results</h3>
        <img src="@/assets/Workplan1_results.png" class="responsive-img">
      </div>
    </div>
    <br><br>
    <router-link  router-link to="/pyramid">
          <a class="waves-effect waves-light btn-large">
          Prewriting Pyramid
            <i class="material-icons right">thumb_up</i> 
          </a>
      </router-link>
      <br><br>
   
  </div>
</template>

<script>
export default {
  name: 'Workplan1'

}
</script>

<style>

</style>