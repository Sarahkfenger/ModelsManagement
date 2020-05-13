<template>
    <div class="jobs" id="list">
        <h1>Jobs</h1>
        <div v-for="job in jobList" :key="job.id">
            <table border="1">
                <tr>
                    <th>Customer</th>
                    <th>Start Day</th>
                    <th>Days</th>
                    <th>Location</th>
                    <th>Comments</th>
                    <th>Models</th>
                    <th>Expenses</th>
                </tr>
                <tr>
                    <td>{{job.customer}}</td>
                    <td>{{job.startDay}}</td>
                    <td>{{job.days}}</td>
                    <td>{{job.location}}</td>
                    <td>{{job.comments}}</td>
                    <td>{{job.models}}</td>
                    <td>expenses</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Jobs',
        data() {
            return {
                jobList: []
            }
        },
        //at start
        async created() {
            let response = await fetch('https://localhost:44368/api/Jobs', {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("token"),
                    'Content-Type': 'jobs/json'
                }
            });
                
            if (response.ok)
                this.jobList = await response.json();
            else
                alert("Response not ok " + response.statusText);            
        }
    }

</script>


<style scoped>
    #list {
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;

    }
</style>