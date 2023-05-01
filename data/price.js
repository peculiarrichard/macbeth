import basic from "../public/assests/basic.png";
import premium from "../public/assests/premium.png";

const prices = [
  {
    id: 1,
    img: basic,
    name: "Basic",
    description: "One time",
    amount: "100",
    benefits:
      "Three (3) consultation sessions for the week.Benefit of family follow up and guidance.First hand access to materials and books as you will be added to our premium forum",
  },
  {
    id: 2,
    img: premium,
    name: "Premium",
    description: "Monthly",
    amount: "300",
    benefits:
      "Three (3) consultation sessions a week for a month.Benefit of family follow up and guidance.First hand access to materials and books as you will be added to our premium forum.Assurance of 30% discount in prices of our books.Physical sessions (in person) if we are in the same city",
  },
];

export default prices;
