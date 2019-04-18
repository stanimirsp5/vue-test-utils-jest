<template>
    <ul>
        <li v-for="(message,i) in messages"
            v-bind:key="i">
            {{ message }}
        </li>
    </ul>
</template>
<script> export default { name: "list", props: ["messages"] }; </script>
