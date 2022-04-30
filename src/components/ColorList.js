import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];

  //with objects
  const users = [
    {id: 1, firstName: "Duane", lastName: "Watson"},
    {id: 2, firstName: "Dwayne", lastName: "Johnson"},
  ]
  const userHeadings = users.map((user) => {
    return <h1 key={user.id}>{user.firstName} {user.lastName}</h1>
  })
  const colorElements = colors.map((color) => {
    return <li key={color} style={{color: color}}>{color}</li>
  })

  console.log(colorElements)

  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
        {colorElements}
        {userHeadings}
      </ol>
    </div>
  );
}

export default ColorList;
