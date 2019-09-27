<template>
    <div class="navbar-item">
        <form action='/stop' v-on:submit.prevent="onSubmit">
        <input type="text" name="id" id="search" class="input is-rounded" @keydown.esc="clear()" placeholder="Stop Number">
        </form>
    </div>
</template>

<script>
    export default {
        name: 'SearchBox',
        data() {
            return {
                id: ''
            }
        },
        methods: {
            clear() {
                let s = document.getElementById('search');
                s.value = ''
            },
            onSubmit(){
                let s = document.getElementById('search');
                s.value =  s.value == '' ? 1 : s.value
                let val = s.value;
                this.$router.push({path: `/stop/${val}`})
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>