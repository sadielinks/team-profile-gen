const generateEngineer = require("./")

// engineer card + details to be dynamically added by user answers
function generateEngineer(responses) {
    return (`

<div class="card employee-card m-3 shadow-lg col-3">
    <div class="card-header bg-info text-white">
        <h2 class="card-title">${responses.name}</h2>
        <h3 class="card-title"><i class="fas fa-laptop-code"></i></h3>
    </div>
    <div class="card-body bg-light">
        <ul class="list-group font-weight-bold">
            <li class="list-group-item">ID: ${responses.id}</li>
            <li class="list-group-item">Email: ${responses.email}<a href="mailto:{{ email }}">{{ email }}</a></li>
            <li class="list-group-item">Github: ${responses.GitHub}</li>
        </ul>
    </div>
</div>`
    )
}

module.exports = generateEngineer;