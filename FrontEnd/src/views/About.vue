<template>
    <div>
        <p>{{food}}</p>
    </div>
</template>
<script>
export default {
    props:{
        food: {
            type:String,
            default:'apple'
        }
    }
}
</script>