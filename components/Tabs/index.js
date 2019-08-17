// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

//axios get request
axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(res => {
    let topics = res.data.topics;
    //call to component function
    tabCreator(topics);
  })
  .catch(err => {
    console.error("Hey you guys...");
  });

//component function
function tabCreator(topicsTab) {
  let topicDiv = document.querySelector(".topics");

  //using array method (forEach) to to create a tab for each topic
  topicsTab.forEach(i => {
    let tab = document.createElement("div");
    tab.classList.add("tab");
    tab.textContent = i;

    topicDiv.appendChild(tab);
  });
}
