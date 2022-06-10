<template>
    <header class="home-header">
        <img  src="../assets/icon-left-font.png" alt="logo Groupomania">
        <nav>
            <ul>
                <a @click="goToAccount()"><li>Mon compte</li></a>
                <a @click="logOut()"><li>Déconnexion</li></a>
            </ul>
        </nav>
    </header>
    <main>
        <h1>Accédez aux forums</h1>
        <section class="forum-access">
            <article class="forum-access__article">
                <p>Les plus populaires</p>
            </article>
            <article class="forum-access__article">
                <p> Les plus récents</p>
            </article>
        </section>
    </main>
</template>

<script>
    export default{
        name: 'HomeView',

        methods:{
            logOut: function(){
                this.$router.push('/')
            },
            goToAccount: function(){
                this.$router.push('/account')
            }
        }
    }
</script>

<style>
    body{
        font-family: 'Noto Sans', sans-serif;
        font-size: 1.5vw;
        padding: 2vw 2vw 2vw 2vw;
    }

    h1{
        font-size : 2.5vw;
        text-align : center;
    }

    .home-header{
        display: flex;
        flex-direction: row;
        height: 9vw;
    }
    .home-header img{
        width: 38vw;
        object-fit: cover;
        margin-right : 25vw;
 
    }
    nav{
        display: flex;
        align-items: center;
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
        width: 10vw;

    }
    
    a{
        cursor: pointer;
    }
    .forum-access{
        display: flex;
        flex-direction: row;
        margin-top: 4vw;
        justify-content: space-around;
        height: 60vw;
    }

    .forum-access__article{
        height: 80%;
        width: 42vw;
        border: 4px solid grey;
        border-radius: 4%;
    }

    .forum-access__article p{
        text-align: center;
    }
</style>