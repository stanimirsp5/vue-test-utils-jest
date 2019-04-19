<template>
    <div>
        <form>
            <input type="text"
                v-model="inputValue">
            <span class="reversed">{{ reversedInput }}</span>
        </form>
        <form @submit.prevent="onSubmit(inputValue)"></form>

    </div>
</template>
<script>
import axios from "axios";
export default {
    props: ["reversed"],
    data() {
        return {
            inputValue: "",
            results: []
        }
    },
    computed: {
        reversedInput() {
            return this.reversed ? this.inputValue.split("").reverse().join("") : this.inputValue;
        }
    },
    watch: {
        inputValue(newVal, oldVal) {
            if (newVal.trim().length && newVal !== oldVal) {
                console.log(newVal)
            }
        }
    },
    methods: {
        onSubmit(value) {
            // axios.get("https://jsonplaceholder.typicode.com/posts?q=" + value).then(results => {
            //     this.results = results.data;
            // });
            const getPromise = axios.get("https://jsonplaceholder.typicode.com/posts?q=" + value);
            getPromise.then(results => { this.results = results.data; });
            return getPromise;

        }
    }
};
 </script>
