<template>
    <div class="banner">
        <img class="banner__image" src="../assets/icon.png" alt="Logo de Groupomania en arrière plan"/>
        <h1 class="banner__text">Groupomania Network</h1>
    </div>
    <div>
        <h2 class="slogan">Bienvenue sur le réseau Groupomania. Accèdez à une nouvelle dimension dans vos échanges entre collègues</h2>
    </div>
    <div class="entrance-form">
        <h2 class="entrance-form__title" v-if="mode == 'login'">Connexion</h2>
        <h2 class="entrance-form__title" v-else> Inscription </h2>
        <p class="entrance-form__subtitle" v-if="mode == 'login'">Nouveau sur le site?  <span class="entrance-form__subtitle__link" @click="switchToRegister">Inscrivez-vous</span></p>
        <p class="entrance-form__subtitle" v-else> Déjà membre? <span class="entrance-form__subtitle__link" @click="switchToLogin"> Connectez-vous</span></p>
        <form class="entrance-form__form"  @submit.prevent="checkForm()">
            <div>
                <label for="email">Email</label>
                <input class="entrance-form__form__input" v-model="email" type="email" name="email" id="email" @input="checkInvalidEmail()" required>
                <p id="emailErrorMsg" class="errorMsg" v-show="errorEmail">Email invalide</p>
            </div>
            <div v-if="mode == 'register'">
                <label for="firstName">Prénom</label>
                <input class="entrance-form__form__input" v-model="firstName" type="text" name="firstName" id="firstName"  @input="checkInvalidFirstName()" required>
                <p id="firstNameErrorMsg" class="errorMsg" v-show="errorFirstName">Prénom invalide</p>

                <label for="lastName">Nom</label>
                <input class="entrance-form__form__input" v-model="lastName" type="text" name="lastName" id="lastName" @input="checkInvalidLastName()" required>
                <p id="lastNameErrorMsg" class="errorMsg" v-show="errorLastName">Nom invalide</p>
            </div>
            <div>
                <label for="password">Mot de passe</label>
                <input class="entrance-form__form__input" v-model="password" type="password" name="password" id="password" @input="checkInvalidPassword()" required>
                <p id="passwordNameErrorMsg" class="errorMsg" v-show="errorPassword">Mot de passe trop court</p>
            </div>
            <div>
                <button class="entrance-form__form__button" type="submit" v-if="mode == 'login'" >Connectez-vous</button>
                <button class="entrance-form__form__button"  type= "submit" v-else >Inscrivez-vous</button>
            </div>
        </form>
    </div>
</template>

<script>
export default{
    name: 'LoginView',
    data: function () {
        return {
            mode: 'login',
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            errorEmail: false,
            errorFirstName: false,
            errorLastName: false,
            errorPassword: false
        }
    },

    methods: {
        switchToRegister: function() {
            this.mode = 'register';
        },
        switchToLogin: function() {
            this.mode = 'login';
        },
        checkInvalidEmail: function(){
            let regexTestEmail = /^([\w.]+)@([\w]+)([a-zA-Z]{2,})/i;
            if(!regexTestEmail.test(this.email) == true){
                this.errorEmail = true;
            }else{
                this.errorEmail = false;
            }
        },
        checkInvalidPassword: function(){
            if(this.password.length <8){
                this.errorPassword = true;
            }else{
                this.errorPassword = false;
            }
        },
        validName: function(name){
            let regexTestName = /^[A-Za-zÀ-ÖØ-öø-ÿ][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
            return regexTestName.test(name);
        },
        checkInvalidFirstName : function(){
            if(!this.validName(this.firstName)){
                this.errorFirstName = true;
            }else{
                this.errorFirstName = false;
            }
        },
        checkInvalidLastName: function(){
            if(!this.validName(this.lastName)){
                this.errorLastName = true;
            }else{
                this.errorLastName = false;
            }
        },
        checkForm: function() {
            if(this.mode == 'login'){
                if(!this.errorEmail && !this.errorPassword){
                    this.$router.push('/home');
                }
            }else{
                if(!this.errorEmail && !this.errorFirstName && !this.errorLastName && !this.errorPassword){
                    this.$router.push('/home');
                }
            }
        }

    }
}
</script>

<style lang=scss>
body{
    font-family: 'Noto Sans', sans-serif;
    font-size: 1.5vw;
    padding: 0 16vw 0 16vw;
}

#app{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.banner{
    height: 27vw;
    width: 27vw;
    position:relative;
}

.banner__image{
    box-sizing: content-box;
    height :100%;
    position : absolute;
    margin:0;
    top:0;
    z-index :-1;
}

.banner__text{
    position: absolute;
    margin:0;
    left:2.6vw;
    top: 12vw;
    z-index: 1;
    font-size: 2vw;
    text-align: center;
}

.slogan{
    font-style: italic;
    font-size: 1.6vw;
}

input, label{
    display: block;
}

.entrance-form{
    padding: 0 3.5vw 0 3vw;
    border: 1vw solid #97fbe2;
    border-radius: 20%;
}

.entrance-form__title{
    text-align: center;
}

.entrance-form__subtitle__link{
    text-decoration: underline;
    cursor: pointer;
}

.entrance-form__form__input{
    margin: 0 0 1.5vw 0;
    width: 100%;
    height: 2.7vw;
}
.entrance-form__form__button{
    padding: 1.1vw 1vw 1.1vw 1vw;
    margin: 1vw 0 2vw 25%;
    font-size: 1.6vw
}

.errorMsg{
    font-size: 1.3vw;
    font-style: italic;
    color: red;
}

@media screen and (max-width:1000px){
    body
    {
        font-size: 2.8vw;
        padding: 0 8vw 0 8vw;
    };
    .banner{
        height: 35vw;
        width: 35vw;
    }
    .banner__text{
        left:3.2vw;
        top:15vw;
        font-size:2.7vw;       
    }
    .slogan{
        font-size: 2.5vw;
    }
    .entrance-form{
        font-size: 2.5vw;
    }

    .entrance-form__form__button{
    padding: 1.8vw 1.4vw 1.8vw 1.4vw;
    margin: 2vw 0 2vw 25%;
    font-size: 2.5vw
    }

}

@media screen and (max-width:550px){
    body
    {
        font-size: 3.5vw;
        padding: 0 5.5vw 0 5.5vw;
    };
    .banner{
        height: 45vw;
        width: 45vw;
    }
    .banner__text{
        left:2.8vw;
        top:20vw;
        font-size:3.5vw;       
    }
    .slogan{
        font-size: 3.5vw;
    }
    .entrance-form{
        font-size: 3.2vw;
    }

    .entrance-form__form__button{
    margin: 3vw 0 3vw 25%;
    font-size: 3.2vw
    }
}

/*
@media screen and (max-width: 500){
    body
    {
        font-size: 4vw;
        padding: 0 3vw 0 3vw;
    };
    .banner{
        height: 50vw;
        width: 50vw;
    }
    .banner__text{
        left:2.8vw;
        top:20vw;
        font-size:4vw;       
    }
    .slogan{
        font-size: 4vw;
    }
}
*/
</style>


