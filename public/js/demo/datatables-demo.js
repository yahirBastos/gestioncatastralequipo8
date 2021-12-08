// Call the dataTables jQuery plugin
$(document).ready(function() {


  // var table = $('#dataTable').DataTable({

    

  // });

  // table.reload();

  // $('#dataTable').DataTable(

  // );
  let url = 'http://localhost:3004/users';

  let table = $('#dataTable').DataTable( {
    "ajax": {
      "url": url,
      "dataSrc": ""
    },
    "columns": [
        { "data": "id" },
        { "data": "nivel"},
        { "data": "nombre"}
             
    ]
} );


});
