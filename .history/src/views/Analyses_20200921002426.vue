<template>
  <div class="analyses container">
    <h1>Analyses</h1>
    <div class="divider"></div>
    <div class="section">
      <div class="card grey darken-2">
        <div class="card-content">
          <h4 class="left-align white-text">Memo from agency deputy director for program analysis.</h4>
          <p class="left-align  white-text">
            I have reviewed your workplan and have made a few revisisons. First, I knocked out a few hypotheses from consideration for analysis based on prior knowledge from other analyses and research we have done about these topics utility for decreasing spread or decreasing severity. Second, I present three analytical workplans from which you may only choose 1 to conduct your analysis. Based on your choice of workplan, my analysts will conduct the analyses and provide you with results. It will then be up to you to synthesize what the results mean.  
          </p>
        </div>
      </div>
    </div>
    <div class="divider"></div>
    <div class="section row">
      <!-- Card 1 -->
      <div class="col s12 m4">
        <div class="card medium teal">
          <div class="card-content">
            <h4 class="white-text">Workplan 1</h4>
            <p class="white-text">This workplan empahsizes being able to consider as many hypotheses as possible and weighs consideration of both branches (reducing spread and reducing severity) relativley equally.</p> <br><br>
            <router-link to="/workplan1">
              <a class="waves-effect waves-light btn-large">
                  Work plan 1
              </a>
            </router-link>
          </div>
        </div>
      </div>
      <!-- Card 2 -->
      <div class="col s12 m4">
        <div class="card medium teal">
          <div class="card-content">
            <h4 class="white-text">Workplan 2</h4>
            <p class="white-text">This workplan empahsizes developing extensive testing of hypotheses relating to reducing severity. It does not test any hypotheses regarding reducing spread.</p> <br><br>
            <div class="card-action">
              <router-link to="/workplan2">
                <a class="waves-effect waves-light btn-large">
                    Work plan 2
                </a>
              </router-link>
            </div>

          </div>
        </div>
      </div>
      <!-- Card 3 -->
      <div class="col s12 m4">
        <div class="card medium teal">
          <div class="card-content">
            <h4 class="white-text">Workplan 3</h4>
            <p class="white-text">This workplan empahsizes rigorously studying the highest priority hypotheses across both branches. No heuristics are used. </p> <br><br>
            <div class="card-action">
              <router-link to="/workplan3 ">
                <a class="waves-effect waves-light btn-large">
                    Work plan 3
                </a>
              </router-link>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Analyses"
}
</script>

<style>

</style>