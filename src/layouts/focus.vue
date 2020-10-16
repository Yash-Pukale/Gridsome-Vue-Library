<template>
    <div :style="`border:2px solid ${color};padding:20px`">
        <h4>
            Coming from Focus.vue !!
        </h4>
        <slot />
    </div>
</template>
<script>
export default {
    props:{
        color: {
            required : false,
            default : 'yellow'
        }
    }
    
}
</script>