<template>
    <v-flex sm8 offset-sm2>
        <v-card>
            <v-toolbar dark>
                <v-toolbar-title> Messages </v-toolbar-title></v-toolbar
            >
            <!-- <v-card class="mx-auto" max-width="400" tile> -->
            <v-list-item
                v-for="(item, index) in $store.state.messages"
                :key="item"
                :to="'message/' + index"
            >
                <v-list-item-content>
                    <v-list-item-title>{{ item.text }}</v-list-item-title>
                    <v-list-item-title>{{ item.user }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <!-- </v-card> -->
        </v-card></v-flex
    >
</template>

<script>
export default {
    async created() {
        // await axios.get("http://localhost:2999/messages").then((res) => {
        //     this.messageData = res.data;
        // });
        // or

        // this.$store.state.messages = (
        //     await axios.get("http://localhost:2999/messages")
        // ).data;
        this.$store.dispatch("getMessages");
        // this.$root.$on("newMessage", (msg) => {
        //     this.messageData.push(msg);
        // });
    },
};
</script>
