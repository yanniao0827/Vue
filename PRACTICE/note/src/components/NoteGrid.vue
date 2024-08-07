<script setup></script>

<template>
    <h2 class="mb-4">筆記本</h2>
    <div class="container">
        <div class="row">
            <div class="col-3">
                <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="card" >
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.card{
    margin-right: 10px;
    padding: 0.8em;
    transition: all 0.3s;
}

.card:hover{
    transform: scale(1.1);
    background-color: #FFF7E9;
    box-shadow: 3px 3px 15px #8c8984;
}

</style>