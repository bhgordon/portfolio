// general elements
const aboutBtn = document.querySelector("#about-btn");
const aboutSection = document.querySelector('.about-section-hidden');
const backgroundCircle = document.querySelector('.background-circle');

const testsBtn = document.querySelector('#tests-btn');
const testsSection = document.querySelector('.tests-section');
const testItem1 = document.querySelector('.test-item-1');
const testItem2 = document.querySelector('.test-item-2');
const testItem3 = document.querySelector('.test-item-3');

// button/tab elements
const solutionBtn = document.querySelector('#solution-inactive');
const problemBtn = document.querySelector('#problem-active');
const processBtn = document.querySelector('#process-inactive');

const innermileSolutionBtn = document.querySelector('#innermile-solution-inactive');
const innermileProblemBtn = document.querySelector('#innermile-problem-active');
const innermileProcessBtn = document.querySelector('#innermile-process-inactive');

const habitSolutionBtn = document.querySelector('#habit-solution-inactive');
const habitProblemBtn = document.querySelector('#habit-problem-active');
const habitProcessBtn = document.querySelector('#habit-process-inactive');

const whoTab = document.querySelector('#who-tab');
const whatTab = document.querySelector('#what-tab');
const whereTab = document.querySelector('#where-tab');
const whenTab = document.querySelector('#when-tab');
const howTab = document.querySelector('#how-tab');
const whyTab = document.querySelector('#why-tab');

// text elements
const textArea = document.querySelector('.text-area-hidden');
const shadowProblemText = document.querySelector('.shadow-problem-text-visible');
const shadowProcessText = document.querySelector('.shadow-process-text-hidden');
const shadowSolutionText = document.querySelector('.shadow-solution-text-hidden');

const innermileTextArea = document.querySelector('.innermile-text-area-hidden')
const innermileProblemText = document.querySelector('.innermile-problem-text-visible');
const innermileProcessText = document.querySelector('.innermile-process-text-hidden');
const innermileSolutionText = document.querySelector('.innermile-solution-text-hidden');

const habitTextArea = document.querySelector('.habit-text-area-hidden')
const habitProblemText = document.querySelector('.habit-problem-text-visible');
const habitProcessText = document.querySelector('.habit-process-text-hidden');
const habitSolutionText = document.querySelector('.habit-solution-text-hidden');

const whoText = document.querySelector('#who-text');
const whatText = document.querySelector('#what-text');
const whereText = document.querySelector('#where-text');
const whenText = document.querySelector('#when-text');
const howText = document.querySelector('#how-text');
const whyText = document.querySelector('#why-text');

// image elements
const shadowImage = document.querySelector('.shadow-boxing-img');
const innermileImage = document.querySelector('.innermile-img');
const habitImage = document.querySelector('.habit-img');

const projectTitle = document.querySelectorAll('.project-title');

const tabsSection = document.querySelectorAll('.tabs-section-hidden');

// Tab Events

// about section tabs

whoTab.addEventListener('click', (e) => {
  whoTab.classList.add('about-tab-active');
  whoTab.classList.remove('about-tab-inactive');

  whatTab.classList.remove('about-tab-active');
  whatTab.classList.add('about-tab-inactive');

  whereTab.classList.remove('about-tab-active');
  whereTab.classList.add('about-tab-inactive');

  whenTab.classList.remove('about-tab-active');
  whenTab.classList.add('about-tab-inactive');

  howTab.classList.remove('about-tab-active');
  howTab.classList.add('about-tab-inactive');

  whyTab.classList.remove('about-tab-active');
  whyTab.classList.add('about-tab-inactive');


  // texts
  whoText.classList.remove('about-text-hidden');
  whoText.classList.add('about-text-visible');

  whatText.classList.remove('about-text-visible');
  whatText.classList.add('about-text-hidden');

  whereText.classList.remove('about-text-visible');
  whereText.classList.add('about-text-hidden');

  whenText.classList.remove('about-text-visible');
  whenText.classList.add('about-text-hidden');

  howText.classList.remove('about-text-visible');
  howText.classList.add('about-text-hidden');

  whyText.classList.remove('about-text-visible');
  whyText.classList.add('about-text-hidden');
})

whatTab.addEventListener('click', (e) => {
  // tabs
  whoTab.classList.remove('about-tab-active');
  whoTab.classList.add('about-tab-inactive');

  whatTab.classList.add('about-tab-active');
  whatTab.classList.remove('about-tab-inactive');

  whereTab.classList.remove('about-tab-active');
  whereTab.classList.add('about-tab-inactive');

  whenTab.classList.remove('about-tab-active');
  whenTab.classList.add('about-tab-inactive');

  howTab.classList.remove('about-tab-active');
  howTab.classList.add('about-tab-inactive');

  whyTab.classList.remove('about-tab-active');
  whyTab.classList.add('about-tab-inactive');

  // texts
  whoText.classList.add('about-text-hidden');
  whoText.classList.remove('about-text-visible');

  whatText.classList.add('about-text-visible');
  whatText.classList.remove('about-text-hidden');

  whereText.classList.remove('about-text-visible');
  whereText.classList.add('about-text-hidden');

  whenText.classList.remove('about-text-visible');
  whenText.classList.add('about-text-hidden');

  howText.classList.remove('about-text-visible');
  howText.classList.add('about-text-hidden');

  whyText.classList.remove('about-text-visible');
  whyText.classList.add('about-text-hidden');
})

whereTab.addEventListener('click', (e) => {
  whoTab.classList.remove('about-tab-active');
  whoTab.classList.add('about-tab-inactive');

  whatTab.classList.remove('about-tab-active');
  whatTab.classList.add('about-tab-inactive');

  whereTab.classList.add('about-tab-active');
  whereTab.classList.remove('about-tab-inactive');

  whenTab.classList.remove('about-tab-active');
  whenTab.classList.add('about-tab-inactive');

  howTab.classList.remove('about-tab-active');
  howTab.classList.add('about-tab-inactive');

  whyTab.classList.remove('about-tab-active');
  whyTab.classList.add('about-tab-inactive');


  // texts
  whoText.classList.add('about-text-hidden');
  whoText.classList.remove('about-text-visible');

  whatText.classList.remove('about-text-visible');
  whatText.classList.add('about-text-hidden');

  whereText.classList.add('about-text-visible');
  whereText.classList.remove('about-text-hidden');

  whenText.classList.remove('about-text-visible');
  whenText.classList.add('about-text-hidden');

  howText.classList.remove('about-text-visible');
  howText.classList.add('about-text-hidden');

  whyText.classList.remove('about-text-visible');
  whyText.classList.add('about-text-hidden');
})

whenTab.addEventListener('click', (e) => {
  whoTab.classList.remove('about-tab-active');
  whoTab.classList.add('about-tab-inactive');

  whatTab.classList.remove('about-tab-active');
  whatTab.classList.add('about-tab-inactive');

  whereTab.classList.remove('about-tab-active');
  whereTab.classList.add('about-tab-inactive');

  whenTab.classList.add('about-tab-active');
  whenTab.classList.remove('about-tab-inactive');

  howTab.classList.remove('about-tab-active');
  howTab.classList.add('about-tab-inactive');

  whyTab.classList.remove('about-tab-active');
  whyTab.classList.add('about-tab-inactive');


  // texts
  whoText.classList.add('about-text-hidden');
  whoText.classList.remove('about-text-visible');

  whatText.classList.remove('about-text-visible');
  whatText.classList.add('about-text-hidden');

  whereText.classList.remove('about-text-visible');
  whereText.classList.add('about-text-hidden');

  whenText.classList.add('about-text-visible');
  whenText.classList.remove('about-text-hidden');

  howText.classList.remove('about-text-visible');
  howText.classList.add('about-text-hidden');

  whyText.classList.remove('about-text-visible');
  whyText.classList.add('about-text-hidden');
})

howTab.addEventListener('click', (e) => {
  whoTab.classList.remove('about-tab-active');
  whoTab.classList.add('about-tab-inactive');

  whatTab.classList.remove('about-tab-active');
  whatTab.classList.add('about-tab-inactive');

  whereTab.classList.remove('about-tab-active');
  whereTab.classList.add('about-tab-inactive');

  whenTab.classList.remove('about-tab-active');
  whenTab.classList.add('about-tab-inactive');

  howTab.classList.add('about-tab-active');
  howTab.classList.remove('about-tab-inactive');

  whyTab.classList.remove('about-tab-active');
  whyTab.classList.add('about-tab-inactive');


  // texts
  whoText.classList.add('about-text-hidden');
  whoText.classList.remove('about-text-visible');

  whatText.classList.remove('about-text-visible');
  whatText.classList.add('about-text-hidden');

  whereText.classList.remove('about-text-visible');
  whereText.classList.add('about-text-hidden');

  whenText.classList.remove('about-text-visible');
  whenText.classList.add('about-text-hidden');

  howText.classList.add('about-text-visible');
  howText.classList.remove('about-text-hidden');

  whyText.classList.remove('about-text-visible');
  whyText.classList.add('about-text-hidden');
})

whyTab.addEventListener('click', (e) => {
  whoTab.classList.remove('about-tab-active');
  whoTab.classList.add('about-tab-inactive');

  whatTab.classList.remove('about-tab-active');
  whatTab.classList.add('about-tab-inactive');

  whereTab.classList.remove('about-tab-active');
  whereTab.classList.add('about-tab-inactive');

  whenTab.classList.remove('about-tab-active');
  whenTab.classList.add('about-tab-inactive');

  howTab.classList.remove('about-tab-active');
  howTab.classList.add('about-tab-inactive');

  whyTab.classList.add('about-tab-active');
  whyTab.classList.remove('about-tab-inactive');


  // texts
  whoText.classList.add('about-text-hidden');
  whoText.classList.remove('about-text-visible');

  whatText.classList.remove('about-text-visible');
  whatText.classList.add('about-text-hidden');

  whereText.classList.remove('about-text-visible');
  whereText.classList.add('about-text-hidden');

  whenText.classList.remove('about-text-visible');
  whenText.classList.add('about-text-hidden');

  howText.classList.remove('about-text-visible');
  howText.classList.add('about-text-hidden');

  whyText.classList.add('about-text-visible');
  whyText.classList.remove('about-text-hidden');
})


// project section tabs
problemBtn.addEventListener('click', (e) => {
  problemBtn.classList.remove('tab-inactive');

  processBtn.classList.remove('tab-active');
  processBtn.classList.add('tab-inactive');

  solutionBtn.classList.remove('tab-active');
  solutionBtn.classList.add('tab-inactive');

  shadowProblemText.classList.remove('shadow-problem-text-hidden');
  shadowProblemText.classList.add('shadow-problem-text-visible');
  shadowProcessText.classList.add('shadow-process-text-hidden');
  shadowSolutionText.classList.add('shadow-solution-text-hidden');
})

processBtn.addEventListener('click', (e) => {
  processBtn.classList.add('tab-active');
  processBtn.classList.remove('tab-inactive');

  problemBtn.classList.add('tab-inactive');

  solutionBtn.classList.add('tab-inactive');
  solutionBtn.classList.remove('tab-active');

  shadowProblemText.classList.add('shadow-problem-text-hidden');
  shadowProblemText.classList.remove('shadow-problem-text-visible');
  shadowProcessText.classList.add('shadow-process-text-visible');
  shadowProcessText.classList.remove('shadow-process-text-hidden');
  shadowSolutionText.classList.add('shadow-solution-text-hidden');
  shadowSolutionText.classList.remove('shadow-solution-text-visible');
})

solutionBtn.addEventListener('click', (e) => {
  solutionBtn.classList.add('tab-active');
  solutionBtn.classList.remove('tab-inactive');

  problemBtn.classList.add('tab-inactive');

  processBtn.classList.remove('tab-active');
  processBtn.classList.add('tab-inactive');

  shadowProcessText.classList.remove('shadow-process-text-visible');
  shadowProcessText.classList.add('shadow-process-text-hidden');
  shadowProblemText.classList.add('shadow-problem-text-hidden');
  shadowProblemText.classList.remove('shadow-problem-text-visible');
  shadowSolutionText.classList.add('shadow-solution-text-visible');
  shadowSolutionText.classList.remove('shadow-solution-text-hidden');
})

innermileProblemBtn.addEventListener('click', (e) => {
  innermileProblemBtn.classList.remove('tab-inactive');
  innermileProcessBtn.classList.add('tab-inactive');
  innermileSolutionBtn.classList.add('tab-inactive');

  innermileProblemText.classList.remove('innermile-problem-text-hidden');
  innermileProblemText.classList.add('innermile-problem-text-visible');
  innermileProcessText.classList.add('innermile-process-text-hidden');
  innermileSolutionText.classList.add('innermile-solution-text-hidden');
})

innermileProcessBtn.addEventListener('click', (e) => {
  innermileProcessBtn.classList.add('tab-active');
  innermileProcessBtn.classList.remove('tab-inactive');
  innermileProblemBtn.classList.add('tab-inactive');
  innermileSolutionBtn.classList.add('tab-inactive');

  innermileProblemText.classList.add('innermile-problem-text-hidden');
  innermileProblemText.classList.remove('innermile-problem-text-visible');
  innermileProcessText.classList.add('innermile-process-text-visible');
  innermileProcessText.classList.remove('innermile-process-text-hidden');
  innermileSolutionText.classList.add('innermile-solution-text-hidden');
  innermileSolutionText.classList.remove('innermile-solution-text-visible');
})

innermileSolutionBtn.addEventListener('click', (e) => {
  innermileSolutionBtn.classList.add('tab-active');
  innermileSolutionBtn.classList.remove('tab-inactive');

  innermileProblemBtn.classList.add('tab-inactive');
  innermileProcessBtn.classList.add('tab-inactive');

  innermileProcessText.classList.remove('innermile-process-text-visible');
  innermileProcessText.classList.add('innermile-process-text-hidden');
  innermileProblemText.classList.add('innermile-problem-text-hidden');
  innermileProblemText.classList.remove('innermile-problem-text-visible');
  innermileSolutionText.classList.add('innermile-solution-text-visible');
  innermileSolutionText.classList.remove('innermile-solution-text-hidden');
})

habitProblemBtn.addEventListener('click', (e) => {
  habitProblemBtn.classList.remove('tab-inactive');
  habitProcessBtn.classList.add('tab-inactive');
  habitSolutionBtn.classList.add('tab-inactive');

  habitProblemText.classList.remove('habit-problem-text-hidden');
  habitProblemText.classList.add('habit-problem-text-visible');
  habitProcessText.classList.add('habit-process-text-hidden');
  habitSolutionText.classList.add('habit-solution-text-hidden');
})

habitProcessBtn.addEventListener('click', (e) => {
  habitProcessBtn.classList.add('tab-active');
  habitProcessBtn.classList.remove('tab-inactive');
  habitProblemBtn.classList.add('tab-inactive');
  habitSolutionBtn.classList.add('tab-inactive');

  habitProblemText.classList.add('habit-problem-text-hidden');
  habitProblemText.classList.remove('habit-problem-text-visible');
  habitProcessText.classList.add('habit-process-text-visible');
  habitProcessText.classList.remove('habit-process-text-hidden');
  habitSolutionText.classList.add('habit-solution-text-hidden');
  habitSolutionText.classList.remove('habit-solution-text-visible');
})

habitSolutionBtn.addEventListener('click', (e) => {
  habitSolutionBtn.classList.add('tab-active');
  habitSolutionBtn.classList.remove('tab-inactive');

  habitProblemBtn.classList.add('tab-inactive');
  habitProcessBtn.classList.add('tab-inactive');

  habitProcessText.classList.remove('habit-process-text-visible');
  habitProcessText.classList.add('habit-process-text-hidden');
  habitProblemText.classList.add('habit-problem-text-hidden');
  habitProblemText.classList.remove('habit-problem-text-visible');
  habitSolutionText.classList.add('habit-solution-text-visible');
  habitSolutionText.classList.remove('habit-solution-text-hidden');
})


// Item Events

testItem1.addEventListener('mouseover', (e) => {
  shadowImage.classList.add('shadow-boxing-img-medium');
})

testItem1.addEventListener('mouseleave', (e) => {
  shadowImage.classList.remove('shadow-boxing-img-medium');
  shadowImage.classList.add('shadow-boxing-img');
})

testItem2.addEventListener('mouseover', (e) => {
  innermileImage.classList.add('innermile-img-medium');
})

testItem2.addEventListener('mouseleave', (e) => {
  innermileImage.classList.remove('innermile-img-medium');
  innermileImage.classList.add('innermile-img');
})

testItem3.addEventListener('mouseover', (e) => {
  habitImage.classList.add('habit-img-medium');
})

testItem3.addEventListener('mouseleave', (e) => {
  habitImage.classList.remove('habit-img-medium');
  habitImage.classList.add('habit-img');
})


// Image Events

shadowImage.addEventListener('click', (event) => {
  testItem1.classList.toggle('test-item-1-large');
  testItem1.classList.toggle('test-item-1');


  testItem2.classList.toggle('test-item-2-hidden');
  testItem3.classList.toggle('test-item-3-hidden');
  shadowImage.classList.toggle('shadow-boxing-img-large');
  testsSection.style.height = '500px';
  textArea.classList.toggle('text-area-visible');
  projectTitle[1].classList.toggle('project-title-hidden');

  backgroundCircle.classList.toggle('background-circle-shadow');
})

innermileImage.addEventListener('click', (event) => {
  testItem1.classList.toggle('test-item-1-hidden');

  testItem2.classList.toggle('test-item-2-large');
  testItem2.classList.toggle('test-item-2');

  testItem3.classList.toggle('test-item-3-hidden');

  shadowImage.classList.toggle('shadow-boxing-img-hidden');
  innermileImage.classList.toggle('innermile-img-large');
  testsSection.style.height = '500px';
  innermileTextArea.classList.toggle('innermile-text-area-visible');
  projectTitle[0].classList.toggle('project-title-hidden');

  backgroundCircle.classList.toggle('background-circle-innermile');
  // backgroundCircle.classList.remove('background-circle');

})

habitImage.addEventListener('click', (event) => {
  testItem1.classList.toggle('test-item-1-hidden');

  testItem2.classList.toggle('test-item-2-hidden');

  testItem3.classList.toggle('test-item-3-large');
  testItem3.classList.toggle('test-item-3');

  shadowImage.classList.toggle('shadow-boxing-img-hidden');
  innermileImage.classList.toggle('innermile-img-hidden');
  habitImage.classList.toggle('habit-img-large');
  testsSection.style.height = '500px';
  habitTextArea.classList.toggle('habit-text-area-visible');
  projectTitle[2].classList.toggle('project-title-hidden');

  backgroundCircle.classList.toggle('background-circle-habit');
})

testsBtn.addEventListener('click', (event) => {
  testsSection.classList.toggle('tests-section-visible');
  backgroundCircle.classList.toggle('background-circle-grey');
  backgroundCircle.classList.toggle('background-circle');

})

aboutBtn.addEventListener('click', (event) => {
  aboutSection.classList.toggle('about-section-visibile');
  backgroundCircle.classList.toggle('background-circle-about');
})
