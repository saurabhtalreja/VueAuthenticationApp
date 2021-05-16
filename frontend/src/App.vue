<template>
    <v-app>
        <v-app-bar app>
            <v-btn text to="/">Messages</v-btn>
            <v-btn text to="/NewMessage">New Message</v-btn>
            <v-spacer />
            <v-btn text v-if="!$store.state.token" to="/Register"
                >Register</v-btn
            >
            <v-btn text v-if="!$store.state.token" to="/Login">Login</v-btn>
            <v-btn
                text
                v-if="$store.state.token"
                @click="$store.commit('logout')"
                >Logout</v-btn
            >
        </v-app-bar>
        <v-content>
            <br />
            <router-view />
        </v-content>
    </v-app>
</template>

<script>
export default {
    name: "App",

    components: {},

    data: () => ({}),
};
</script>
