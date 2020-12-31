<template>
<div>
    <input @input="changeData" :value='value'>
</div>
</template>
<script>
export default {
    name:'Ainput',
    props:{
        value: {
           type: [String,Number],
           default: '',
        }    
    },
    methods:{
        changeData(event){
            const value = event.target.value
            this.$emit('input',value)
        }
    }
}
</script>