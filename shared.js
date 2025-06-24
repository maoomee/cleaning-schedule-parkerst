const duties = "Trash / recycling / counters / stove / floor";
const defaultPeople = ["Mousami", "Misbah", "Lisa", "Zemen", "Pratikshya", "Janavi"];
const startDate = new Date("2024-06-17");

function getPeople() {
  const saved = localStorage.getItem("cleaningPeople");
  return saved ? JSON.parse(saved) : defaultPeople;
}

function setPeople(list) {
  localStorage.setItem("cleaningPeople", JSON.stringify(list));
}

function getCurrentIndex() {
  const now = new Date();
  const skippedWeeks = parseInt(localStorage.getItem("skippedWeeks") || "0");
  const diffWeeks = Math.floor((now - startDate) / (7 * 24 * 60 * 60 * 1000)) + skippedWeeks + 1;
  const people = getPeople();
  return diffWeeks % people.length;
}

function getToday() {
  return new Date().toDateString();
}
