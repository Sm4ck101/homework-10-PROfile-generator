function generateHTML(employees) {
  const cardsArray = employees.map((emp) => {
    let lastItem;
    if (emp.getRole() === "Manager") {
      lastItem = `Office Number: ${emp.officeNumber}`;
    } else if (emp.getRole() === "Engineer") {
      lastItem = `Github: ${emp.github}`;
    } else {
      lastItem = `School: ${emp.school}`;
    }
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-header card text-bg-primary mb-3">${emp.name}</div>
        <div class="card-body">
          <ul class="list-group">
            <li class="list-group-item">id:${emp.id}</li>
            <li class="list-group-item">email:${emp.email}</li>
            <li class="list-group-item">${lastItem}</li>
          </ul>
        </div>
      </div>
      `;
  });

  let cardsString = cardsArray.join("");

  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>PRO-file Team Maker</title>
        <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
      integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
      crossorigin="anonymous"
    />
    <style>
        .employee-cards {
            display: flex;
            flex-wrap: wrap;
        }
        .card {
            margin: 10px;
        }
    </style>
    </head>
    <body>
    <header class="p-3 mb-2 bg-danger text-white text-center fs-1">My Team</header>
    <div class="employee-cards">
        ${cardsString}
    </div>
    </body>
    </html>
    `;
}

module.exports = generateHTML;
