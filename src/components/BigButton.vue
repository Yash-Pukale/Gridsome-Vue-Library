<template>
  <button :style="`padding:10px;background:${color}`">
    Big Button
  </button>
</template>

<script>
export default {
    props:{
        color : {
            type : String,
            required : false,
            default : 'grey'
        }
    }
}
</script>

<style>

</style>