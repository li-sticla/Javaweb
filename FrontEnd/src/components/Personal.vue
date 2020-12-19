<template>
    <div class="home">
        <button @click="handleClick('back')">点击后退</button>
        <button @click="handleClick('push')">点击前进</button>
        <button @click="handleClick('replace')">点击替换</button>
    </div>
</template>
<script>
export default {
    name:'home',
    methods:{
        handleClick(type){
            if(type == 'back'){
                this.$router.back()
            }
            else if(type == 'push'){
                this.$router.push({
                    name: 'parent'
                })
            }
            else if(type == 'replace'){
                this.$router.replace({
                    name:'parent'
                })
            }
        }
    }
}
</script>