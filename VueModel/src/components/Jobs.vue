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
                <th v-if="isManager">Expenses</th>
            </tr>
        </table>
        <div v-for="job in jobList" :key="job.id">
            <table>
                <tr v-on:click="updateSelectedJob(job)">
                    <td>{{job.customer}}</td>
                    <td>{{job.startDate}}</td>
                    <td>{{job.days}}</td>
                    <td>{{job.location}}</td>
                    <td>{{job.comments}}</td>
                    <td>{{getModels(job)}}</td>
                    <td v-if="isManager">{{getExpense(job)}}</td>
                </tr>
            </table>
        </div>
        <p>Selected job: {{selectedJob.customer}} {{selectedJob.location}}</p>
        <br />
        <table v-if="isManager">
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
            </tr>
        </table>
        <div v-if="isManager" v-for="model in modelList" :key="model.id" v-on:click="updateSelectedModel(model)">
            <table>
                <tr>
                    <td>{{model.firstName}}</td>
                    <td>{{model.lastName}}</td>
                </tr>
            </table>
        </div>
        <p v-if="isManager">Selected model: {{selectedModel.firstName}} {{selectedModel.lastName}}</p>
        <br />
        <div v-if="isManager">
            <button type="button" v-on:click="addModel()">Add selected model to selected job</button>
            <button type="button" v-on:click="deleteModel()">Delete selected model from selected job</button>
        </div>
        <div v-if="!isManager">
            <input type="number" v-model.number="addedExpense" placeholder="Expense" />
            <button type="button" v-on:click="addExpense()">Add expense</button>
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
                addedExpense: 0,
                jobModels: {},
                isManager: false,
                modelId: 0,
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
            getModels(job) {
                var models = "";
                this.jobModelList.forEach(j => {
                    if (j["location"] == job["location"] && j["customer"] == job["customer"])
                        j["models"].forEach(m => models += m["firstName"] + " " + m["lastName"] + " ");
                })
                
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
            async addExpense() {
                let response = await fetch('https://localhost:44368/api/Expenses/', {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(
                        {
                            modelId: this.modelId,
                            jobId: this.selectedJob["efJobId"],
                            date: this.selectedJob["startDate"],
                            text: "",
                            amount: this.addedExpense,
                        })
                })

                if (response.ok) {
                    alert("Expence has been added. Please refresh page");
                }
                else
                    alert("Response not ok " + response.statusText);
            }
        },
        //at start
        async created() {

            // Checks if user is model or manager
            let jwt = localStorage.getItem("token");
            let jwtData = jwt.split('.')[1]
            let decodedJwtJsonData = window.atob(jwtData)
            let decodedJwtData = JSON.parse(decodedJwtJsonData)

            let role = decodedJwtData["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];

            if (role == "Manager") 
                this.isManager = true            
            else
                this.modelId = decodedJwtData["modelId"];


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

            if (this.isManager) {
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
            }

            if (this.isManager) {
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

    }
</script>


<style scoped>
    #list {
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: 10px;
    }
    table, th, td {
        border: 1px solid black;        
    }
    table{
        margin-left: 10px;
    }
    th, td {
        padding: 5px;
        width: 160px;
    }
    button{
        padding: 10px;
        margin: 10px;
    }
    h1 {
        font-size: 200%;
        margin: 10px;
    }
    p {
        font-size: 125%;
        margin: 10px;
    }
</style>