<template>
  <div class="scenario container">
    <h1>Scenario</h1>
    <div class="divider"></div>
    <div class="section">
      <div class="row">
        <div class="col s12">
          <img src="@/assets/Logic Tree_COVID vaccine.png" class="responsive-img">
        </div>
      </div>
    </div>
      <div class="start-button">
          <router-link to="/scenario">
            <a class="waves-effect waves-light btn-large">
                Prioritize hypotheses
                <i class="material-icons right">thumb_up</i> 
            </a>
          </router-link>
        </div>
  </div>
</template>

<script>
export default {
  name: "scenario"
  
}
</script>

<style scoped>

</style>