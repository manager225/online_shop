<template>
    <div class="v-catalog-item">

        <v-popup
        v-if="isInfoPopupVisible"
        rightBtnTitle="Add to cart"
        :popupTitle="product_data.name"
        @closePopup="closeInfoPopup"
        @rightBtnAction="addToCart"
        >
            <img class="v-catalog-item__image" :src=" require('../../assets/images/' + product_data.image) " alt="img">
            <div>
                <p class="v-catalog-item__name">{{product_data.name}}</p>
                <p class="v-catalog-item__price">Price: {{product_data.price}} ₽.</p>
                <p class="v-catalog-item__price">{{product_data.category}}</p>
            </div>
        </v-popup>

        <img class="v-catalog-item__image"
             :src=" require('@/assets/images/' + product_data.image)"
             alt="img">

        <p class="v-catalog-item__name">
            {{product_data.name}}
        </p>
        <p class="v-catalog-item__price">
            Price: {{product_data.price}} ₽.
        </p>

        <button
                class="v-catalog-item__show-info"
                @click="showPopupInfo"
        >
            Show info
        </button>
        <br>
        <button
                class="v-catalog-item__add_to_cart btn"
                @click="addToCart"
        >
            add to cart
        </button>
    </div>

</template>

<script>
import vPopup from '../popup/v-popup'

export default {
    name: 'v-catalog-item',
    components: {
        vPopup
    },
    props: {
        product_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {
            isInfoPopupVisible: false
        }
    },
    computed: {},
    methods: {
        showPopupInfo() {
            this.isInfoPopupVisible = true
        },
        closeInfoPopup() {
            this.isInfoPopupVisible = false
        },
        addToCart() {
            this.$emit('addToCart', this.product_data)
        }
    },
};
</script>

<style lang="scss">
    .v-catalog-item {
        flex-basis: 20%;
        box-shadow: 0 0 8px 0 #e0e0e0;
        padding: $padding*2;
        margin-bottom: $margin*2;
        margin-left: $margin*2;
        margin-right: $margin*2;
        &__image {
            width: 100px;
        }
        &__show-info {
            border-radius: 4px;
            margin-bottom: 4px;
            padding: 3px 5px;
            border: 0;
            outline: none;
            cursor: pointer;
        }
    }
</style>
