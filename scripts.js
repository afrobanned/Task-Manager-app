$.getJSON( "https://api.airtable.com/v0/appUAJSEFDMl7iv8C/Tasks?api_key=keyQ7f5YOlvzPBKe3", function( data ) {
  var items = [];
  $.each( data.records, function( index, val ) {
    console.log(val.fields["Tasks"])
    items.push( "<li id='" + val.id + "'>" + val.fields["Tasks"] + "</li>" );
  });

  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
  $("<div>I like mangos</div>").appendTo("body")
});
function myFunction(){
  var checkbox=document.getElementById("myCheck");
  var text

}