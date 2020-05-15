<template>
    <nav class="navbar container" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <p class="navbar-item">
                <strong class="is-size-4">Company Name</strong>
            </p>
            
            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div id="navbar" class="navbar-menu">
            <div class="navbar-start">
                <router-link to="/jobs" class="navbar-item">Jobs</router-link>
                <router-link to="/createpage" class="navbar-item">Create manager or model</router-link>
                <router-link to="/createjob" class="navbar-item">Create job</router-link>
            </div>
            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons" onclick="logout">
                        <a class="button is-dark">
                            <strong>Log Out</strong>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>

</template>

<script>
    export default {
        name: 'Nav'
    }
</script>

<style scoped>
    .nav {
        margin-top: 25px;
        margin-bottom: 30px;
    }
        .a    {
        font-weight: bold;
        color: #2c3e50;
    }
</style>