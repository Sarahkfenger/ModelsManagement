<template>
    <div class="jobs" id="list">
        <h1>Jobs</h1>
        <table>
            <tr>
                <th>Customer</th>
                <th>Start Date</th>
                <th>Days</th>
                <th>Location</th>
                <th>Comments</th>
                <th>Models</th>
                <th>Expenses</th>
            </tr>
        </table>
        <div v-for="job in jobList" :key="job.id" v-on:click="updateSelectedJob(job)">
            <table>
                <tr>
                    <td>{{job.customer}}</td>
                    <td>{{job.startDate}}</td>
                    <td>{{job.days}}</td>
                    <td>{{job.location}}</td>
                    <td>{{job.comments}}</td>
                    <td>{{getModels()}}</td>
                    <td>{{getExpense(job)}}</td>
                </tr>
            </table>
        </div>
        <p>Selected job: {{selectedJob.customer}} {{selectedJob.location}}</p>
        <table>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
            </tr>
        </table>
        <div v-for="model in modelList" :key="model.id" v-on:click="updateSelectedModel(model)">
            <table>
                <tr>
                    <td>{{model.firstName}}</td>
                    <td>{{model.lastName}}</td>
                </tr>
            </table>
        </div>
        <p>Selected model: {{selectedModel.firstName}} {{selectedModel.lastName}}</p>
        <div>
            <button type="button" v-on:click="addModel()">Add selected model to selected job</button>
            <button type="button" v-on:click="addModel()">Delete selected model from selected job</button>
        </div>
    </div>
   
</template>

<script>
    export default {
        name: 'Jobs',
        data() {
            return {
                jobList: [],
                modelList: [],
                expenseList: [],
                jobModelList: [],
                selectedJob: {},
                selectedModel: {},
                expense: 0,
                jobModels: {}
            }
        },
        methods: {
            updateSelectedJob(selectedItem) {
                this.selectedJob = selectedItem;
            },
            updateSelectedModel(selectedItem) {
                this.selectedModel = selectedItem;
            },
            getExpense(job) {
                this.expense = 0;
                this.expenseList.forEach(e => {
                    if (e["jobId"] == job["efJobId"])
                        this.expense += e["amount"];
                })
                return this.expense;
            },
            getModels() {
               // var id = job["efJobId"].toString();
                var models = "";

               this.jobModelList["1"]["models"].forEach(m => models += m["firstName"] + " " + m["lastName"] + " ");
                
                return models;
            },
            async addModel() {
                let response = await fetch('https://localhost:44368/api/Jobs/' + this.selectedJob["efJobId"] + '/model/' + this.selectedModel["efModelId"], {
                    method: 'POST',
                    credentials: 'include',
                    headers: new Headers({
                        'Authorization': 'Bearer ' + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    })
                });

                if (response.ok) {
                    alert("Model has been added. Please refresh page");
                }
                else
                    alert("Response not ok " + response.statusText);      
            },
            async deleteModel() {
                let response = await fetch('https://localhost:44368/api/Jobs/' + this.selectedJob["efJobId"] + '/model/' + this.selectedModel["efModelId"], {
                    method: 'DELETE',
                    credentials: 'include',
                    headers: new Headers({
                        'Authorization': 'Bearer ' + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    })
                });

                if (response.ok) {
                    alert("Model has been delected. Please refresh page");
                }
                else
                    alert("Response not ok " + response.statusText);
            },
        },
        //at start
        async created() {
            let response = await fetch('https://localhost:44368/api/Jobs', {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("token"),
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                this.jobList = await response.json();
                this.jobList.forEach(async j => {
                    let jobModelsResponse = await fetch('https://localhost:44368/api/Jobs/' + j["efJobId"], {
                        method: 'GET',
                        credentials: 'include',
                        headers: {
                            'Authorization': 'Bearer ' + localStorage.getItem("token"),
                            'Content-Type': 'application/json'
                        }
                    });

                    if (jobModelsResponse.ok)
                        this.jobModelList.push(await jobModelsResponse.json());
                })
            }
            else
                alert("Response not ok " + response.statusText);

            let modelResponse = await fetch('https://localhost:44368/api/Models', {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("token"),
                    'Content-Type': 'application/json'
                }
            });

            if (modelResponse.ok) {
                this.modelList = await modelResponse.json();
            }
            else
                alert("Response not ok " + modelResponse.statusText);

            let expenseResponse = await fetch('https://localhost:44368/api/Expenses', {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("token"),
                    'Content-Type': 'application/json'
                }
            });

            if (expenseResponse.ok) {
                this.expenseList = await expenseResponse.json();
            }
            else
                alert("Response not ok " + expenseResponse.statusText);
            
        }

    }

</script>


<style scoped>
    #list {
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;

    }
    table, th, td {
        border: 1px solid black;
    }

    th, td {
        padding: 5px;
        width: 130px;
    }
    button{
        padding: 10px;
    }
</style>