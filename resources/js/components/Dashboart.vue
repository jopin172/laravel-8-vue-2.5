<template>
    <div>
        <div>
            Bienvenido Estimado/a <strong>{{ dataAdmin.name }}</strong>

            <ul>
                <li v-for="enlace in dataAdmin.menu" :key="enlace.id">
                    <router-link :to="{name: enlace.name}" exact>{{enlace.title}}</router-link>
                </li>
            </ul>

            <a :href="dataAdmin.logout">Logout</a>
        </div>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>

import axios from 'axios';

export default {
    data () {
        return {
            dataAdmin : []
        }
    },
    mounted () {
        axios.get('/sistema/admin').then(response => {
            console.log(response.data);
            this.dataAdmin = response.data;
        }).catch(e => console.log(e));
    }
}
</script>
