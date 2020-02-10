<template>
    <div class="quote">
        <p>{{ quote }}</p>
    </div>
</template>

<script>
export default {
    props: {
        quote: {
            type: String,
            required: true,
        },
        deleteFn: Function,
    },
}
</script>

<style scoped>
    div.quote {
        padding: 20px 10px;
        border: 1px solid black;
        border-radius: 3px;
        display: inline-block;
        cursor: pointer;
        margin: 10px;
        vertical-align: top;
        width: 20%;
        height: 80px;
    }

    div.quote:hover {
        border-color: #168aad;
        background: #c28f98;
    }

    p {
        font-family: 'Arizonia', cursive;
        font-size: 24px;
        color: #6e6e6e;
    }
</style>
