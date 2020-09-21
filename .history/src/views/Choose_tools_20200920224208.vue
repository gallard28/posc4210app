<template>
  <div class="Choose container">
    <h1>Choose Analytical Tools</h1>
      <div class="divider"></div>
      <div class="section">
        <div class="row">
          <h3>Background</h3>
          <p class="left-align">Learning to choose the right analytical tool is a vital part of an analyst's role. Non-analysts often forget that our work requires time (to do it) and money (to collect data, run software, and pay ourselves). Therefore, our job is to select the analyses that allow us to appropriately test hypotheses while staying within our time and monetary budgets.</p>
          <br>
          <br>
          <h3>Instructions </h3>
          <p class="left-align">Your group has a budget of 180,000 resource units (RUs). Resource units are a indexed measurement of time and money. Your group must now choose which analytical tools to use for each hypothesis. Each analytical tool costs a different amount of RUs (see below for prices). For example, heuristic-based techniques are less expensive (but also less accurate) than statistically/scientifically-based techniques. <br> <br> 
          <b>TASK:</b> Your job is to select the analytical tools you will use and complete the table in Part 1 Question 2 in which you will justify your decisions. <b>You MUST stay within your budget of 180,000 RUs.</b> <br><br>
          <b>NOTE:</b> There are not enough RUs to analyze all of the hypotheses. Therefore, you will need to use your resources wisely.</p>
          <div class="divider"></div>
          <div class="section">
            <h3>Analytic Tools and their Costs</h3>
            <p> <b>NOTE: You MUST stay within your budget of 180,000 RUs.</b> </p>
            <div class="col s12">
              <img src="@/assets/Analytic_tool_menu.png" class="responsive-img">
            </div>
          </div>
        </div>
          <div class="start-button">
          <router-link to="/analyses">
            <a class="waves-effect waves-light btn-large">
                Conduct Analyses
                <i class="material-icons right">thumb_up</i> 
            </a>
          </router-link>
        </div> 
      </div>
  </div>
</template>

<script>
export default {
  name: 'Choose_tools'
}
</script>

<style scoped>

</style>