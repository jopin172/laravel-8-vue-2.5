<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function __construct()
    {

    }

    public function index()
    {
        $datos = [
            'name' => 'Johan Piña',
            'email' => 'johan@gmail.com',
            'user' => 'jopin172',
            'menu' => [
                ['name' => 'home', 'title' => 'Home'],
                ['name' => 'usuarios', 'title' => 'Usuarios'],
                ['name' => 'noticias', 'title' => 'Noticias'],
                ['name' => 'contacto', 'title' => 'Contacto'],
            ],
            'logout' => '#logout'
        ];
        return json_encode($datos);
    }

}
