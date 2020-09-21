<template>
  <div class="prioritize container">
    <h1>Prioritize Hypotheses</h1>
    <div class="divider"></div>
    <div class="container">
      <div class="card">
        <div class="card-content">
          <h3>Instructions</h3>
          <p class="left-align">
            Using the PAE4 workbook, use Group Voting procedures that we have discussed in class to rank the hypotheses in answer to the question, "How much do you expect this hypothesis to impact the Key Metrics for Success?" For example, if you believe that hypothesis one will have the greatest impact on reducing spread, then you will allocate more of your votes to that hypothesis than to the others. 
          </p>
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
  </div>
</template>

<script>
export default {
  name: "Prioritize"

}
</script>

<style>

</style>