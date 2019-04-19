<template>
    <div id="app">
        <MessageList :messages="messages" />
    </div>
</template>
<script>
import MessageList from "@/components/MessageList";
import Form from "@/components/Form";
export default {
    name: "app",
    data: () => ({
        messages: ["Hey John", "Howdy Paco"]
    }),
    components:
    {
        MessageList, Form
    }
}; </script>
