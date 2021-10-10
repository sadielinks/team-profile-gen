// start adding in the data from index.js to HTML
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
    return (