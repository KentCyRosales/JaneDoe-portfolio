function addRecommendation() {
  let text = document.getElementById("rec-input").value;

  if (text.trim() === "") return;

  let list = document.getElementById("recommend-list");

  let card = document.createElement("div");
  card.className = "recommend-card";
  card.innerText = text;

  list.appendChild(card);

  document.getElementById("rec-input").value = "";
}