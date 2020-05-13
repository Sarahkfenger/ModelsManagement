<template>
    <div>
        <span v-if="isManager">Now you see me</span>
    </div>
</template>

<script>
    export default {
        name: "StartPage",

        created() {
            let jwt = localStorage.getItem("token");
            let jwtData = jwt.split('.')[1]
            let decodedJwtJsonData = window.atob(jwtData)
            let decodedJwtData = JSON.parse(decodedJwtJsonData)

            let role = decodedJwtData["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];

            if (role == "Manager") {
                this.isManager = true
            }
            else if (role == "Model") {
                this.isModel = true
            }
        },

        data: function () {
            return {
                isManager: false,
                isModel: false,
            }
        }
    
    }
</script>

<style>

</style>
