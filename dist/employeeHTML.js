const generateTeamHTML = (myTeam) => {
  let teamCards = "";
  myTeam.forEach((employee) => {
    switch (employee.getRole()) {
      case "Manager":
        teamCards += gimmeManager(employee);
        break;
      case "Engineer":
        teamCards += gimmeEngineer(employee);
        break;
      case "Intern":
        teamCards += gimmeIntern(employee);
        break;
    }
  });
  return;

  // central html!
  `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-uWxY/CJNBR+1zjPWmfnSnVxwRheevXITnMqoEIeG1LJrdI0GlVs/9cVSyPYXdcSF"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="style.css" />
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
  </head>
  <body>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 jumbotron mb-3 team-heading bg-info text-white">
          <h1 class="text-center"><i class="fas fa-users"></i>     Welcome to My Team!</h1>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="team-area row d-flex justify-content-center">
      ${teamCards}
      </div>
    </div>
  </body>
</html>`;
};

// manager
const gimmeManager = (manager) => {
  return
  `<div class="card employee-card m-3 shadow-lg col-3">
  <div class="card-header bg-info text-white">
      <h2 class="card-title">${manager.name}</h2>
      <h3 class="card-title"><i class="fas fa-chalkboard-teacher"></i>/h3>
  </div>
  <div class="card-body bg-light">
      <ul class="list-group font-weight-bold">
          <li class="list-group-item">ID: ${manager.id}</li>
          <li class="list-group-item">Email: ${manager.email}<a href="mailto:{{ email }}">{{ email }}</a></li>
          <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
      </ul>
  </div>
</div>`;
};

// engineer(s)


// intern(s)

module.exports = generateTeamHTML;
