<template>
    <div class="table-div">
        <!-- <div v-for="mainType in priceListValues.mainType" style="padding: 70px 25px 70px 25px">
            <p class="table-main-title">{{mainType.name}}</p>
            <div v-for="type in mainType">
                <p class="table-title">{{type.name}}</p>
                <div class="d-flex justify-content-center">
                    <table v-if="type.exist == true">
                        <tr>
                            <th>Name</th>
                            <th v-if="mainType.name == 'Drinks'">Amount</th>
                            <th v-else>Ingredients</th>
                            <th>Price</th>
                        </tr>
                        <tr v-for="product in priceListProps">
                            <td v-if="type.type == product.type">{{product.name}}</td>
                            <td v-if="type.type == product.type">{{product.description}}</td>
                            <td v-if="type.type == product.type">{{product.price}} €</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
    export default{
        //props:['priceListProps', 'priceListValues'],
        data(){
            return{
                mainTypes: null,
                drinkTypes: null,
                foodTypes: null
            }
        },
        mounted(){
            
        }
    }
</script>

<style>
    .table-div{
        align-items: center;
        background-color: var(--dark-gray);
        max-width: 90%;
        margin-left: 5%;
        margin-right: 5%;
        border-radius: 20px;
    }

    .table-main-title{
        color: white;
        font-size: 3rem;
        text-align: center;
    }

    .table-title{
        color: white;
        font-size: 2.1rem;
        text-align: center;
        padding-top: 1rem;
    }

    table{
        color: white;
        text-align: center;
        width: 100%;
    }

    th{
        color: white;
        text-align: center;
        border: solid white 1px;
        font-size: 1.3rem;
    }

    tr{
        color: white;
        text-align: center;
        font-size: 1.3rem;
    }
</style>