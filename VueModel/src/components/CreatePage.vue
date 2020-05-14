<template>
    <div class="createpage" id="create">
        <h1>Opret</h1>
        <span>
            Which do you want to create?:
            <input type="radio" id="model" value="model" v-model="input.picked" />
            <label>Model</label>
            <input type="radio" id="manager" value="manager" v-model="input.picked" />
            <label>Manager</label>
        </span><br />
        <span>Picked: {{ input.picked }}</span>
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
        <div v-show="input.picked == input.isModel">
            <p>Phone number:</p>
            <input type="text" name="phoneno" v-model="input.phoneno" placeholder="Phone number" />
            <br />
            <p>Adress line:</p>
            <input type="text" name="adressline1" v-model="input.adressline1" placeholder="Adress" />
            <br />
            <p>Adress line continued:</p>
            <input type="text" name="adressline2" v-model="input.adressline2" placeholder="Adress continued" />
            <br />
            <p>City:</p>
            <input type="text" name="city" v-model="input.city" placeholder="City" />
            <br />
            <p>Zip:</p>
            <input type="text" name="zip" v-model="input.zip" placeholder="Zip" />
            <br />
            <p>Country:</p>
            <input type="text" name="country" v-model="input.country" placeholder="Country" />
            <br />
            <p>Nationality:</p>
            <input type="text" name="nationality" v-model="input.nationality" placeholder="Nationality" />
            <br />
            <p>Birthday:</p>
            <input type="date" name="birthdate" v-model="input.birthdate" placeholder="Birth date" />
            <br />
            <p>Height:</p>
            <input type="number" name="height" v-model.number="input.height" placeholder="Height" />
            <br />
            <p>Shoe size:</p>
            <input type="number" name="shoesize" v-model.number="input.shoesize" placeholder="Shoe size" />
            <br />
            <p>Hair color:</p>
            <input type="text" name="haircolor" v-model="input.haircolor" placeholder="Hair color" />
            <br />
            <p>Eye color:</p>
            <input type="text" name="eyecolor" v-model="input.eyecolor" placeholder="Eye color" />
            <br />
            <p>Comments:</p>
            <input type="text" name="comments" v-model="input.comments" placeholder="Comments" />
            <br />
        </div>

        <br />
        <br />
        <button type="button" v-on:click="create()">Create {{ input.picked }}</button>
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
                    phoneno: "",
                    adressline1: "",
                    adressline2: "",
                    city: "",
                    zip: "",
                    country: "",
                    nationality: "",
                    birthdate: null,
                    height: null,
                    shoesize: null,
                    haircolor: "",
                    eyecolor: "",
                    comments: "",
                    picked: "manager",
                    isModel: "model",
                    isManager: "manager"
                }
            }
        },
        props: {
        },
        methods: {
            async create() {
                if (this.input.picked == this.input.isManager) {
                    if (this.input.firstname != "" && this.input.lastname != "" && this.input.email != "" && this.input.password != "") {
                        fetch('https://localhost:44368/api/Managers', {
                            method: 'POST',
                            credentials: 'include',
                            headers: {
                                'Authorization': 'Bearer ' + localStorage.getItem("token"),
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(
                                {
                                    firstName: this.input.firstname,
                                    lastName: this.input.lastname,
                                    email: this.input.email,
                                    password: this.input.password
                                })
                        }).then(res => {
                            if (!res.ok) {
                                if (res.status == 400)
                                    throw new Error(res.statusText);
                                else
                                    throw new Error('Network response was not ok');
                            }
                        });
                    } else {
                        this.input.firstname = "Manager gik galt";
                    }
                } else if (this.input.picked == this.input.isModel) {
                    if (this.input.firstname != "" && this.input.lastname != ""
                        && this.input.email != "" && this.input.password != ""
                        && this.input.phoneno != "" && this.input.adressline1 != ""
                        && this.input.city != "" && this.input.zip != ""
                        && this.input.country != "" && this.input.nationality != ""
                        && this.input.birthday != "" && this.input.height != ""
                        && this.input.shoesize != "" && this.input.haircolor != ""
                        && this.input.eyecolor != "") {
                        fetch('https://localhost:44368/api/Models', {
                            method: 'POST',
                            credentials: 'include',
                            headers: {
                                'Authorization': 'Bearer ' + localStorage.getItem("token"),
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(
                                {
                                    firstName: this.input.firstname,
                                    lastName: this.input.lastname,
                                    email: this.input.email,
                                    phoneNo: this.input.phoneno,
                                    adressline1: this.input.adressline1,
                                    adressline2: this.input.adressline2,
                                    zip: this.input.zip,
                                    city: this.input.city,
                                    country: this.input.country,
                                    birthDate: this.input.birthdate,
                                    nationality: this.input.nationality,
                                    height: this.input.height,
                                    shoeSize: this.input.shoesize,
                                    hairColor: this.input.haircolor,
                                    eyeColor: this.input.eyecolor,
                                    comments: this.input.comments,
                                    password: this.input.password
                                })
                        }).then(res => {
                            if (!res.ok) {
                                if (res.status == 400)
                                    throw new Error(res.statusText);
                                else
                                    throw new Error('Network response was not ok');
                            }
                        });
                    } else {
                        this.input.firstname = "Model gik galt";
                    }
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
         text-align:center;
     }
</style>