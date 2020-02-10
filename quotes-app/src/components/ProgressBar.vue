<template>
    <div class="progress-bar">
        <h2>Quotes Added</h2>
        <div class="progress-bar__outline">
            <div class="progress-bar__fluid" :style="{'width': (quotesLength / maxQuotes) * 100 + '%'}">
                {{quotesLength}}/{{ maxQuotes }}
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        props: ['quotesLength', 'maxQuotes']
    }
</script>

<style scoped>

    div.progress-bar {
        margin: 0 auto;
    }

    div.progress-bar__outline {
        width: 100%;
        border: 1px #ccc solid;
        background: #ccc;
        border-radius: 4px;

    }

    div.progress-bar__fluid {
        background: #168aad;
    }
</style>