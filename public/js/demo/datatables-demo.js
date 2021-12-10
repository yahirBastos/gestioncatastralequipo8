$(document).ready(function () {

  $('#dataTable').DataTable({



  });

});

// $(document).ready(function () {
//   $("#dataTable").dataTable();

//   $.ajax({
//       url: 'http://localhost:4000/users',
//       type: 'GET',
//       dataType: 'json',
//       success: function (result) {
//           let daftar = result.results;
//           var html = '';
//           $.each(daftar, function (i, data) {
//               html += `<tr>
//                               <td> ` + data.id + `</td>
//                               <td>` + data.nombre + `</td>
//                               <td>` + data.apellido + `</td>
//                               <td>` + data.telefono + `</td>
//                               <td> ` + data.documento + ` </td>
//                               <td> ` + data.email + ` </td>
//                               <td>` + data.contrasena + `</td>
//                               <td> ` + data.acciones + `</td>
//                           </tr>`;

//               //This is selector of my <tbody> in my table
//               $("#list-list").html(html);
//           });
//       }
//   });
// })


// $('#dataTable').DataTable({
//   "ajax": {
//       "url": "http://localhost:3004/users",
//       "type": "GET",   // you can probably remove this
//       "datatype": 'json',   // you can probably remove this
//   },
//   columns: [
//       { 'data': 'id' },
//       { 'data': 'nombre' },
//       { 'data': 'apellido' },
//       { 'data': 'telefono' },
//       { 'data': 'documento' },
//       { 'data': 'email' },
//       { 'data': 'contrasena' },
//       { 'data': 'acciones' }
//   ]
// });



// $('#example').DataTable({
//   "ajax": {
//       "url": "http://localhost:3004/users",
//       "type": "GET",   // you can probably remove this
//       "datatype": 'json'   // you can probably remove this
//   },
//   columns: [
//       { 'user': 'id' },
//       { 'user': 'nombre' },
//       { 'user': 'apellido' },
//       { 'user': 'telefono' },
//       { 'user': 'documento' },
//       { 'user': 'email' },
//       { 'user': 'contrasena' },
//       { 'user': 'acciones' },


//   ]
// });



//$(document).ready(function () {
//   $('#dataTable').DataTable({
//        "paging": true,
//        "pageLength": 10,
//        "processing": false,
//        "serverSide": false,
//        "ajax": {
//            "data":"json",
//            "url": "http://localhost:3004/users"
//        },
//            "columns":
//                [
//                   { "users": "id" },
//                   { "users": "nivel" },
//                   { "users": "nombre" },
//                   { "users": "apellido" },
//                   { "users": "telefono" },
//                   { "users": "documento" },
//                   { "users": "email" },
//                   { "users": "contrasena" },
//                   { "users": "acciones" }
//                ]
       
//    });
// });


// Call the dataTables jQuery plugin
// $(document).ready(function () {


  // var table = $('#dataTable').DataTable({



  // });

  // table.reload();

  // $('#dataTable').DataTable(

  // );
//   let url = 'http://localhost:3004/users';

//   let table = $('#dataTable').DataTable({
//     "ajax": {
//       ""
//       "url": url,
//       "dataSrc": ""
//     },
//     "columns": [
//       { "users": id },
//       { "users": "nivel" },
//       { "users": "nombre" },
//       { "users": "apellido" },
//       { "users": "telefono" },
//       { "users": "documento" },
//       { "users": "email" },
//       { "users": "contrasena" },
//       { "users": "acciones" }
//     ]
//   });


// });
