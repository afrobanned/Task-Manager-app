var taskDetail = function(id, Tasks, Completed, Progress, ImageURL) {
  return `<div class="task">
  <span class="task-name">${Tasks}</span>
  <span class="check"><input type="checkbox" ${Completed ? 'checked' : '' }></span>
  <img src="${ImageURL}" class="imageURL"/>
  <span class="progress">${Progress}</span>
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
