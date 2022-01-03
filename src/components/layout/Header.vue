<template>
<div>
    <b-navbar id ="navigation_bar" toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand  tag="h1" class="mb-0">
            <i class="fas fa-laptop"></i> {{title}}
        </b-navbar-brand>
        
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item :key="index" v-for="(data,index) in menus" v-bind:href = data.url>{{data.title}}</b-nav-item>
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
            menus : []
        }
    },
    created() { 
        fetch('http://yhjang1.shop:3000/menus?type=vueWebMenus')
            .then(response => response.json())
            .then(res =>{
                if(res.result === 1) {
                    this.menus = res.data;
                } else { 
                    console.log("result is not 1");
                }
            });
    }
}
</script>

<style>
#navigation_bar {
    cursor: default;
}
</style>