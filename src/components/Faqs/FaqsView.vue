<template>
    <div class="faqs">
        <h3 class="faqs__header">Najczęściej zadawane <span class="underlined">pytania</span></h3>
        <div class="faqs__questions">
            <SingleFaq 
                v-for="(question, index) in QUESTIONS"
                :key="index"
                :title=question.title
                :answer=question.answer
            />
        </div>
    </div>
</template>

<script>
import SingleFaq from './SingleFaq.vue';

import { QUESTIONS } from '@/Utilities/mocks';

    export default {
    name: "FaqsView",
    setup() {
        return { QUESTIONS }
    },
    components: { SingleFaq }
}
</script>

<style scoped lang="scss">
    .faqs {
        width: 98%;
        margin-top: 150px;
        margin-bottom: 200px;
        font-size: calc(14px + 1vw);
        font-family: 'Maven Pro', sans-serif;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        &__header {
            text-align: center;
            font-size: 1em;
            margin: 30px;
        }

        &__questions {
            font-size: .6em;
            width: 80%;
        }

        .underlined {
            position: relative;

            &::before {
                position: absolute;
                content: '';
                bottom: -3px;
                left: 0px;
                width: 100%;
                height: 3px;
                background-color: rgb(255, 106, 0);
            }
        }
    }

</style>