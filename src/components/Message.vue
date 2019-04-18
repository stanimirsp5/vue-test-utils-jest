<template>
    <li style="padding-top: 10px"
        class="message">{{ message }}</li>
</template>

<script>
export default {
    name: 'Message',
    props: {
        message: {
            type: String,
        },
        message2: {
            type: String,
            required: true,
            validator: message => message.length > 1

        },
        author: {
            type: String,
            default: 'Paco'
        }

    },

};
</script>
