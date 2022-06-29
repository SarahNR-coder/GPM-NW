<template>
    <div class="page">
    <header class="publish-header">
        <img  src="../assets/icon-left-font.png" alt="logo Groupomania">
        <nav>
            <ul>
                <a @click="backToHome()"><li>Accueil</li></a>
                <a @click="goToAccount()"><li>Mon compte</li></a>
                <a @click="logOut()"><li>Déconnexion</li></a>
            </ul>
        </nav>
    </header>
    <main>
        <section class="article-form">
            <h1>Votre article</h1>
            <form class="article-form__form">
                <div>
                    <label for="title">Titre de l'article</label>
                    <textarea id="title"></textarea>

                    <label for="content">Contenu de l'article</label>
                    <textarea id="content"></textarea>

                    <button type="submit" id="post">Postez</button>
                </div>

            </form>
        </section>
    </main>
    </div>
</template>

<script>
export default{
    name: 'PublishView',

    methods: {
        backToHome: function(){
            this.$router.push('/home')
        },
        goToAccount: function(){
            this.$router.push('/account')
        },
        logOut: function(){
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
   body{
        font-family: 'Noto Sans', sans-serif;
        font-size: 1.5vw;
        padding: 2vw 2vw 2vw 2vw;
    }

    .page{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    h1{
        font-size : 2.5vw;
        text-align : center;
    }

    .publish-header{
        display: flex;
        flex-direction: row;
        height: 9vw;
        margin:0 0 2vw 0;
        padding: 0 5vw 0 5vw;
    }
    .publish-header img{
        width: 38vw;
        object-fit: cover;
        margin-right : 17vw;
 
    }
    nav{
        display: flex;
        align-items: center;
        margin-right: 12vw;
    }
    nav ul{
        display: flex;
        flex-direction : row;
        justify-content: space-around;
        align-items:center;
        width: 25vw;
        list-style-type : none;

    }

    nav ul li{
        width: 12vw;
        text-align: center;
        padding: 0 3vw 0 0;
        font-size: 2vw;
    }
    
    a{
        cursor: pointer;
    }
    input, label, button{
        display: block;
    }

    label{
        font-size: 2vw;
    }
    textarea{
        width: 80vw;
        font-size: 1.8vw;
        margin: 1vw 0 3vw 0;
    }

    #content{
        height: 50vw;
    }

    #post{
        position: absolute;
        left: 44%; 
        margin: 2.5vw 0 3vw 0;
        border-radius: 15%;
        width: 15vw;
        height: 10vw;
        font-size: 2.3vw;
    }

    @media screen and (max-width: 700px){
        body{
            font-size: 2vw;
        }

        h1{
            font-size: 3.5vw;
        }

        nav{
            margin: 0 15vw 0 0;
        }
        nav ul li{
            width: 15vw;
            font-size: 2.7vw;
            padding: 0 1.5vw 0 0;
        }

        label{
            font-size: 2.7vw;
        }

        #post{
            font-size: 2.8vw;
        }
    }

</style>