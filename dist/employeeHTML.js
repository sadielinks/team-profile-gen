function generateTeamHTML(data) {

`<!-- central html! -->
<!DOCTYPE html>
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
          <!-- manager, engineer, & intern cards to appear here -->
      </div>
    </div>
  </body>
</html>`;

}

module.exports = generateTeamHTML;