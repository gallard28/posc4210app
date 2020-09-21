<template>
  <div class="home container">
    <div class="col s12">
      <h2>Welcome to the POSC-4210 Analysis Planning Game!</h2>
    </div>
    <!-- Description -->
    <div class="divider"></div>
    <div class="section">
      <div class="row">
        <div class="cols s12">
          <!-- Card -->
          <div class="card grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">Policy Analysis Exercise 4</span>
              <p class="left-align">The goal of this PAE is to practice our group and collaboration skills while gaining experience in prioritizing anlyses, choosing anaytical techniques, and interpreting analytical results. We will be conducting an interactive, simulation in the form of   a game. In this game, you and your group will create-your-own-analytic adventure for solving a policy problem.  <br><br>
              The point of our game will be to correctly prioritize the hypotheses we will investigate, to manage our scarce analytical resources by applying the best analytical techniques to arrive at the answer, and synthesizing results to arrive at accurate conclusions. 
              </p>
            </div>
          </div>
        </div>
    </div>
    </div>
    <!-- Insturctions -->
    <div class="divider"></div>
    <div class="section">
      <div class="headline">
        <h2>Instructions</h2>
      </div>
      <div class="row">
        <!-- Card 1 -->
        <div class="col s12">
          <div class="card teal darken-2">
            <div class="card-content">
              <p class="left-align white-text">
                <ol>
                  <li>Log into your g.clemson.edu account and access the following link: <a href="https://docs.google.com/document/d/16TZA8md0masyjI_Gi1CXw8bq0G-gOx4zrA84iQO_Zkk/edit?usp=sharing">Google Docs PAE4 Workbook</a>. </li>
                  <li>Familiarize yourself with the Google docs PAE Submission form. As a group, you will collaboratively contribute to this form to unlock the answers.</li>
                  <li>Visit the <router-link to="/About">About the Game</router-link> page to see an overview of what you will be doing. </li>
                  <li>Start the game by going to the <router-link to="/Start">Start Our Game</router-link> page.</li>
                  <li>Play the game.</li>
                  <li>Complete Part 2 of the PAE submission form individually and submit via Canvas.</li>
                </ol>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  }
}
</script>
