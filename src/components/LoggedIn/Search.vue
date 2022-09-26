<template>
    <div class="d-flex justify-content-center">
        <h3 v-if="searchText" class="notification">Results for '{{searchText}}':</h3>
        <h3 v-else class="notification">No results...</h3>
    </div>
</template>

<script>
export default {
    props: ['searchText']
}
</script>

<style>

</style>