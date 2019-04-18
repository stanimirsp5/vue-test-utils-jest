<template>
    <ul>
        <li class="message"
            v-for="(message,i) in messages"
            v-bind:key="i">
            {{ message }}
        </li>
    </ul>
</template>
<script>
import Message from "./Message";

export default {
    name: "list",
    props: ["messages"],
    components: { Message }

};
   </script>
