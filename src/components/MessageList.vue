<template>
    <ul>
        <li class="message"
            v-for="(message,i) in messages"
            v-bind:key="i">
            {{ message }}
        </li>
        <Message @message-clicked="handleMessageClick"
            :message="message"
            v-for="message in messages"
            :key="message" />
    </ul>
</template>
<script>
import Message from "./Message";

export default {
    name: "MessageList",
    props: ["messages"],
    components: { Message },
    methods: {
        handleMessageClick(message) {
            console.log(message)
        }
    },
};
   </script>
