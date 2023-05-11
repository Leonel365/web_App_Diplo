<template>
    <h1>Bienvenido señor Admin</h1>
    <ul>
        <li>
            <RouterLink to="#" class="block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0 md:hover:text-blue-500" aria-current="page">
                Usuarios
            </RouterLink>
        </li>
        <li>
            <RouterLink to="/tests" class="block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0 md:hover:text-blue-500" aria-current="page">
                Test
            </RouterLink>
        </li>
        <li>
            <RouterLink to="../resutadosGenerales" class="block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0 md:hover:text-blue-500" aria-current="page">
                Resultados
            </RouterLink>
        </li>
        <li>
            <RouterLink to="#" class="block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0 md:hover:text-blue-500" aria-current="page">
                Publicaciones
            </RouterLink>
        </li>
    </ul>
</template>