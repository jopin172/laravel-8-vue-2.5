<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Test de Johan</title>
        <style>
            .is-active { color:aqua; font-weight: bold; }
        </style>
    </head>
    <body>
        <div id="app">
            <dashboart></dashboart>
        </div>
        <script src="{{ mix('sistema/js/app.js') }}"></script>
    </body>
</html>
