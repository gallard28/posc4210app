<template>
  <div class="scenario container">
    <h1>Scenario - Logic Tree</h1>
    <div class="divider"></div>
    <div class="section">
      <div class="row">
        <div class="col s12">
          <img src="@/assets/Logic Tree_COVID vaccine.png" class="responsive-img">
        </div>
      </div>
    </div>
      <div class="start-button">
          <router-link to="/prioritize">
            <a class="waves-effect waves-light btn-large">
                Prioritize hypotheses
                <i class="material-icons right">thumb_up</i> 
            </a>
          </router-link>
        </div> <br><br>
    <div class="divider"></div>
    <div class="section"></div>
  </div>
</template>

<script>
export default {
  name: "scenario"
  
}
</script>

<style scoped>

</style>