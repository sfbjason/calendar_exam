<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="shortcut icon" type="image/png" href="{{asset('favicon.png')}}" />
  <meta name="csrf-token" content="{{ csrf_token() }}">
 <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,500i,600,700,800" rel="stylesheet"> 
  {{-- <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,500" rel="stylesheet"> --}}
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link href="https://cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Cabin:400,700" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Montserrat:900" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css">
  <link rel="stylesheet" type="text/css" href="{{asset('css/app.css')}}">
  <title>Appetiser Apps | Coding Challenge</title>
</head>

<body>
  <div id="app">
      <app></app>
  </div>
  <script type="text/javascript" src="{{asset('js/app.js')}}"></script>
</body>

</html>