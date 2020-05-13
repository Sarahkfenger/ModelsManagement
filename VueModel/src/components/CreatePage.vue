<template>
    <div class="createpage" id="create">
        <h1>Opret</h1>
        <p>First name:</p>
        <input type="text" name="firstname" v-model="input.firstname" placeholder="First name" />
        <br />
        <p>Last name:</p>
        <input type="text" name="lastname" v-model="input.lastname" placeholder="Last name" />
        <br />
        <p>Email:</p>
        <input type="text" name="email" v-model="input.email" placeholder="Email" />
        <br />
        <p>Password:</p>
        <input type="text" name="password" v-model="input.password" placeholder="Password" />
        <br />
        <button type="button" v-on:click="createManager()">Create Manager</button>
    </div>
</template>

<script>
    export default {
        name: 'createpage',
        data() {
            return {
                input: {
                    firstname: "",
                    lastname: "",
                    email: "",
                    password: "",
                }
            }
        },
        props: {
        },
        methods: {
            createManager() {
                if (this.input.firstname != "" && this.input.lastname != "" && this.input.email != "" && this.input.password != "") {
                    fetch('https://localhost:44368/api/managers', {
                        method: 'POST',
                        body: JSON.stringify(
                            {
                                firstname: this.input.firstname,
                                lastname: this.input.lastname,
                                email: this.input.email,
                                password: this.input.password
                            }),
                        Headers: new Headers({
                            'Content-Type': 'application/json'
                        })
                    }).then(res => {
                        if (res.status == 400) {
                            throw new Error(res.statusText);
                        }
                        if (res.status == 200) {
                            console.log("det virkede");
                        }
                });
            }
        }
    }
</script>

<style scoped>
    #create{

    }
</style>