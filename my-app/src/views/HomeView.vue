<template>
<div class = "page">
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
                <ul>
                    <li v-for="item in mostRecent" :key="item">
                        <a @click="goToArticle(item.id)">{{ item.titre }} de userId = {{ item.user_id }}, le {{ item.date_publication }} ({{ item.nombre_likes }} likes)</a>
                    </li>
                </ul>
            </article>
        </section>
        <section class="write-article">
            <a @click="writeArticle()"><p>Ecrivez votre article</p></a>
        </section> 
    </main>
</div>
</template>

<script>
    import { mapState } from 'vuex';

    export default{
        name: 'HomeView',
        created() {
            this.$store.dispatch('updateRecent');
        },
        computed: {

            ...mapState({
                mostRecent: 'mostRecentArticles'
            })
        },
        methods:{
            logOut: function(){
                this.$router.push('/')
            },
            goToAccount: function(){
                this.$router.push('/account')
            },
            writeArticle: function(){
                this.$router.push('/publish')
            },
            goToArticle: function(id){
                this.$router.push(`/article/:${id}`)
            }
        }
    }
</script>

<style scoped>
    .page{
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
        width: 35vw;
        object-fit: cover;
    }
    nav{
        display: flex;
        align-items: center;
        margin: 0 0 0 25vw;
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
        width: 14vw;
        font-size: 1.8vw;
    }
    
    a{
        cursor: pointer;
    }
    .forum-access{
        display: flex;
        flex-direction: row;
        margin: 4vw 0 4vw 0;
        justify-content: space-around;
        height: 60vw;
    }

    .forum-access__article{
        height: 100%;
        width: 42vw;
        border: 4px solid grey;
        border-radius: 4%;
    }

    .forum-access__article p{
        text-align: center;
        font-size: 1.8vw;
    }

    .write-article{
        text-align: center;
        text-decoration: underline;
        font-size: 2.5vw;
    }
    @media screen and (max-width:830px){
        h1{
            font-size: 2.7vw;
        }

        nav ul li{
            width: 20vw;
            font-size: 2.15vw;
        }

        .forum-access__article p{
            font-size: 2.15vw;
        }

    }
    @media screen and (max-width: 500px){
        h1{
            font-size: 15px;
        }

        .home-header{
            justify-content: space-between;
        }

        nav{
            margin:0;
        }

        nav ul{
            width: 100%;
        }

        nav ul li{
            width: 80px;
            font-size: 12.5px;
            box-sizing: content;
        }

        .forum-access{
            flex-direction: column;
            height: 130vw;
            align-items: center;
        }

        .forum-access__article{
            width: 75vw;
            margin: 3.5vw 0 3.5vw 0;
        }

        .forum-access__article p{
            font-size: 12.5px;
        }

        .write-article{
            font-size: 13px;
        }

        .home-header img{
            width: 120px;
        }
    }
</style>