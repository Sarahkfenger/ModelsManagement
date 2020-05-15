<template>
    <div class="createjob" id="create">
        <h1>Create new job</h1>
        <p>Customer:</p>
        <input type="text" name="cutomer" v-model="input.customer" placeholder="Customer" />
        <p>Start date:</p>
        <input type="date" name="startdate" v-model="input.startdate" placeholder="Start date" />
        <p>Duration in days:</p>
        <input type="number" name="days" v-model.number="input.days" placeholder="Duration" pattern="[0-9]*" min="0" />
        <p>Location:</p>
        <input type="text" name="location" v-model="input.location" placeholder="Location" />
        <p>Comments:</p>
        <input type="text" name="comments" v-model="input.comments" placeholder="Comments" />
        <br />
        <button type="button" v-on:click="createJob()">Create new job</button>
        <br />
        <p class="typo__p" v-if="createstatus === 'ErrorInFields'">Please fill out all fields</p>
        <p class="typo__p" v-if="createstatus === 'OK'">The job is created!</p>
    </div>
</template>

<script>
    export default {
        name: 'createjob',
        data() {
            return {
                input: {
                    customer: null,
                    startdate: "",
                    days: null,
                    location: "",
                    comments: ""
                },
                createstatus: "pending"
            }
        },
        methods: {
            async createJob() {
                if (this.input.customer != "" && this.input.startDate != "" && this.input.days != "" && this.input.location != "") {
                    fetch('https://localhost:44368/api/Jobs', {
                        method: 'POST',
                        credentials: 'include',
                        headers: {
                            'Authorization': 'Bearer ' + localStorage.getItem("token"),
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(
                            {
                                customer: this.input.customer,
                                startDate: this.input.startDate,
                                days: this.input.days,
                                location: this.input.location,
                                comments: this.input.comments
                            })
                    }).then(res => {
                        if (!res.ok) {
                            if (res.status == 400)
                                throw new Error(res.statusText);
                            else
                                throw new Error('Network response was not ok');
                        } else {
                            this.createstatus = "OK";
                        }
                    });
                } else {
                    this.createstatus = "ErrorInFields";
                }
            }
        }
    }
</script>

<style scoped>
    #create {
        text-align: center;
        width: 500px;
        padding: 50px;
        border: dotted;
        margin: auto;
    }

    h1 {
        font-size: 200%;
        text-align: center;
    }
</style>