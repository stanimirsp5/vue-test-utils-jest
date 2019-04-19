<template>
    <li style="padding-top: 10px"
        class="message"
        @click="handleClick">{{ message }}
    </li>
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
            validator: message => message.length > 1

        },
        author: {
            type: String,
            default: 'Paco'
        }

    },
    methods: {
        handleClick() {
            this.$emit("message-clicked", this.message)
        }
    }

};
</script>
