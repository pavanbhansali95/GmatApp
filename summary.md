-----Instructions for running the application------

1. Do npm install.This will install all the dependencies.If any dependency is still remaining please install using npm install dependency name
2. Do npm start.This will start the application on port 3000.
3. Run localhost:3000 on browser.

-----Approach For Problem------
I decided to use react for the given assignment.Since react uses the concept of components, I have to break the ui  in diffferent components. I divided the ui in three components, one is the landing page(ScoreDashboard) , other is to take qaunt and verbal inputs(ScoreInput) and last is the ScoreCard component which was used to display the scores.
I decided to reuse ScoreCard component for all the three cards(total,quant and verbal) and successfully reused it.Since on every submit view has to be changed , I used the concept of state in react so that with change in state the view should re render.
For graphs I decided to use simple div with position and z-index and applied proper css to give proper color and styles.
For managing the different conditions on basis of scores. I decided to take two variables one for current score and other for target score. on Comparing these values,I gave the appropriate view and the appropriate css styles