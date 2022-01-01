<template>
<div>
    <b-navbar id ="navigation_bar" toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand >{{title}}</b-navbar-brand>
        
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item :key="index" v-for="(data,index) in menus" v-on:click="changePage(index)">{{data.title}}</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
    name:"Header",
    data(){
        return {
            title : "개발자의놀이터",
            currentIndex:0,
            menus : []
        }
    },
    methods:{
        changePage (index) { 
            if(this.currentIndex === index) return;
            const page = this.menus[index].title;
            switch(page) { 
                case 'HOME':{
                    this.$router.push('home');
                    this.currentIndex = index;
                    break;
                }
                case 'AUDIO':{
                    this.$router.push('audio');
                    this.currentIndex = index;
                    break;
                }
                default: {
                    break;
                }
            }
        }

    },
    created() { 
         var currentUrl = window.location.pathname;
         if(currentUrl =='/audio') this.currentIndex = 3;

        fetch('http://yhjang1.shop:3000/menus')
            .then(response => response.json())
            .then(data =>this.menus = data);
    }
}
</script>

<style>
#navigation_bar {
    cursor: default;
}
</style>