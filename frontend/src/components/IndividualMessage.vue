<template>
    <v-flex sm8 offset-sm2>
        <v-card>
            <v-toolbar dark>
                <v-toolbar-title>Individual Message</v-toolbar-title>
            </v-toolbar>
            <v-card-text>{{ message.text }}</v-card-text>
        </v-card>
    </v-flex>
</template>

<script>
export default {
    data() {
        return {
            message: "",
        };
    },
    async created() {
        this.message = (
            await this.$store.dispatch(
                "getIndividualMessage",
                this.$route.params.id
            )
        ).data;
    },
};
</script>
