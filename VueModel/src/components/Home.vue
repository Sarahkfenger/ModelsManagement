<template>
    <div class="home" id="login">
        <h1>Welcome to Model Management</h1>
        <p>First you need to login</p>
        <input type="text" name="username" v-model="input.username" placeholder="Username"/>
        <br/>
        <br/>
        <input type="password" name="password" v-model="input.password" placeholder="Password"/>
        <br/>
        <br/>
        <button type="button" v-on:click="login()">Login</button>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        props: {
        },
        data() {
            return {
                input: {
                    username: "",
                    password: "",
                }
            }
        }, 
        methods: {
            login() {
                if (this.input.username != "" && this.input.password != "") {
                    fetch('https://localhost:44368/api/Account/login', {
                        method: 'POST',
                        body: JSON.stringify({
                            email: this.input.username,
                            password: this.input.password
                        }),
                        headers: new Headers({
                            'Content-Type': 'application/json'
                        })
                    }).then(res => res.json().then(token => {
                        localStorage.setItem("token", token.jwt);

                    }))
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
</style>

