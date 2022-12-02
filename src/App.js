import "./App.css";
import { useState, React } from "react";
import Message from "./snackbar";

function App() {
  const [branches, updatelist] = useState([

    {
      sr: 1,
      name: "Abhyankar Nagar",
      checked: false,
    },
    {
      sr: 2,
      name: "Adyar",
      checked: false,
    },
    {
      sr: 3,
      name: "Asgaon",
      checked: false,
    },
    {
      sr: 4,
      name: "Besa Road",
      checked: false,
    },
    {
      sr: 5,
      name: "Bhandara",
      checked: false,
    },
    {
      sr: 6,
      name: "Bhramapuri",
      checked: false,
    },
    {
      sr: 7,
      name: "Butibori",
      checked: false,
    },
    {
      sr: 8,
      name: "Chandrapur",
      checked: false,
    },
    {
      sr: 9,
      name: "Dhantoli",
      checked: false,
    },
    {
      sr: 10,
      name: "DN College",
      checked: false,
    },
    {
      sr: 11,
      name: "Dharampeth",
      checked: false,
    },
    {
      sr: 12,
      name: "Dighori",
      checked: false,
    },
    {
      sr: 13,
      name: "Friends Colony",
      checked: false,
    },
    {
      sr: 14,
      name: "Gadchiroli",
      checked: false,
    },
    {
      sr: 15,
      name: "Gondia",
      checked: false,
    },
    {
      sr: 16,
      name: "Gumthala",
      checked: false,
    },
    {
      sr: 17,
      name: "Hamdapur",
      checked: false,
    },
    {
      sr: 18,
      name: "Hingna",
      checked: false,
    },
    {
      sr: 19,
      name: "Kalmeshwar",
      checked: false,
    },
    {
      sr: 20,
      name: "Kanhan",
      checked: false,
    },
    {
      sr: 21,
      name: "Katol",
      checked: false,
    },
    {
      sr: 22,
      name: "Kavdas",
      checked: false,
    },
    {
      sr: 23,
      name: "Lakadganj",
      checked: false,
    },
    {
      sr: 24,
      name: "Lalganj",
      checked: false,
    },
    {
      sr: 25,
      name: "Loyed Steel",
      checked: false,
    },
    {
      sr: 26,
      name: "Maskasath",
      checked: false,
    },
    {
      sr: 27,
      name: "Midc Wardha",
      checked: false,
    },
    {
      sr: 28,
      name: "Mohgaon",
      checked: false,
    },
    {
      sr: 29,
      name: "Mouda",
      checked: false,
    },
    {
      sr: 30,
      name: "Nagpur",
      checked: false,
    },
    {
      sr: 31,
      name: "Onkar Nagar",
      checked: false,
    },
    {
      sr: 32,
      name: "Paunar",
      checked: false,
    },
    {
      sr: 33,
      name: "Pauni",
      checked: false,
    },
    {
      sr: 34,
      name: "Pratap Nagar",
      checked: false,
    },
    {
      sr: 35,
      name: "Rani Durgawati",
      checked: false,
    },
    {
      sr: 36,
      name: "Sakoli",
      checked: false,
    },
    {
      sr: 37,
      name: "Salod Hirapur",
      checked: false,
    },
    {
      sr: 38,
      name: "Saoner",
      checked: false,
    },
    {
      sr: 39,
      name: "Sewagram",
      checked: false,
    },
    {
      sr: 40,
      name: "Sri Ayurved Mahavidyala",
      checked: false,
    },
    {
      sr: 41,
      name: "Udyog Bhavan",
      checked: false,
    },
    {
      sr: 42,
      name: "Tiroda",
      checked: false,
    },
    {
      sr: 43,
      name: "Tumsar",
      checked: false,
    },
    {
      sr: 44,
      name: "Umred",
      checked: false,
    },
    {
      sr: 45,
      name: "Wadi",
      checked: false,
    },
    {
      sr: 46,
      name: "Wardha",
      checked: false,
    },
    {
      sr: 47,
      name: "Wardha Road",
      checked: false,
    },
    {
      sr: 48,
      name: "Warora",
      checked: false,
    },
    {
      sr: 49,
      name: "Zadshi",
      checked: false,
    },
  ]);

  const getMessage = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    let index = 1;
    let message = `Date: ${
      day + "/" + month + "/" + year
    } \nSir the following branches have not reported yet.\n`;

    for (let i = 0; i < branches.length; i++) {
      if (!branches[i].checked) {
        message += `${index + ") " + branches[i].name}\n`;
        index++;
      }
    }

    navigator.clipboard.writeText(message);
    console.log(message);
  };

  const checkBranch = (elem) => {
    const branchIndex = elem.target.id - 1;
    const status = elem.target.checked;
    let updatedList = branches;
    updatedList[branchIndex].checked = status;
    updatelist(updatedList);
  };

  return (
    <div className="App">
    <Message getMessage={getMessage}></Message>
      <table style={{width:"70%", marginTop: "20px", marginBottom: "20px"}}>
        {branches.map((elem) => {
          return (
            <tr key={elem.sr}>
            <th>{elem.sr}</th>
            <th>{elem.name}</th>
            <th><input id={elem.sr} type="checkbox" style={{width:"240%",}} onClick={checkBranch} /></th>
            </tr>
          );
        })}
      </table>
      <Message getMessage={getMessage}></Message>
    </div>
  );
}

export default App;
