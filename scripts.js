$.getJSON( "https://api.airtable.com/v0/appUAJSEFDMl7iv8C/Tasks?api_key=keyQ7f5YOlvzPBKe3", function( data ) {
  var items = [];
  $.each( data.records, function( index, val ) {
    console.log(val.fields["Tasks"])
    items.push( "<li id='" + val.id + "'>" + val.fields["Tasks"] + '<input type="checkbox">'+ "</li>" );
  });

  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});
function openWeekday(evt, weekdayWhich) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(weekdayWhich).style.display = "block";
    evt.currentTarget.className += " active";
}
