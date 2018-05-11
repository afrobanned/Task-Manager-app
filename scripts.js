// grabing data from airtable and displaying it on website
var taskDetail = function(id, Tasks, Completed, Progress, ImageURL) {
  console.log(Progress)
  return `<div class="task">
  <img src="${ImageURL}" class="imageURL"/>
  <span class="task-name">${Tasks}</span>
  <span class="check"><input type="checkbox" ${Completed ? 'checked' : '' }></span>
  <span class="progress">${Progress}</span>
  <select class="option">
    <option ${Progress === 'Have to Start' ? 'selected' : ''} value="Have To Start">Have To Start</option>
    <option ${Progress === 'In Progress' ? 'selected' : ''} value="In Progress">In Progress</option>
    <option ${Progress === 'Procrastinating' ? 'selected' : ''} value="Procrastinating">Procrastinating</option>
    <option ${Progress === 'Finished' ? 'selected' : ''} value="Finished">Finished</option>
  </select>
  </div>`;
}
$.getJSON( "https://api.airtable.com/v0/appUAJSEFDMl7iv8C/Tasks?api_key=keyQ7f5YOlvzPBKe3", function( data ) {
  var items = [];
  $.each( data.records, function( index, val ) {
    console.log(val.fields)
    var id = val.id;
    var ImageURL = val.fields["ImageURL"]
   var Tasks = val.fields["Tasks"];
   var Completed = val.fields["Completed"] || ''
   var Progress = val.fields["Progress"] || ''
    var itemHTML = taskDetail(id, Tasks, Completed, Progress, ImageURL);
    items.push( itemHTML )
  });

$(".task-list" ).append(items.join(""));
});
