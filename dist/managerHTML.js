// manager card + details to be dynamically added by user answers
function generateManager(responses) {
    return (

`<div class="card employee-card m-3 shadow-lg col-3">
    <div class="card-header bg-info text-white">
        <h2 class="card-title">${responses.name}</h2>
        <h3 class="card-title"><i class="fas fa-chalkboard-teacher"></i>/h3>
    </div>
    <div class="card-body bg-light">
        <ul class="list-group font-weight-bold">
            <li class="list-group-item">${responses.id}</li>
            <li class="list-group-item">${responses.email}<a href="mailto:{{ email }}">{{ email }}</a></li>
            <li class="list-group-item">${responses.officeNumber}</li>
        </ul>
    </div>
</div>`
)
}

module.exports = generateManager