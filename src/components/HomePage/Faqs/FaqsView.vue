<template>
    <section class="faqs" id="faqs">
        <h3 class="faqs__header">Najczęściej zadawane <span class="underlined">pytania</span></h3>
        <div class="faqs__questions">
            <SingleFaq 
                v-for="(question, index) in QUESTIONS"
                :key="index"
                :title=question.title
                :answer=question.answer
            />
        </div>
    </section>
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
@import "../../../Utilities/utilities.scss";

    .faqs {
        width: 98%;
        margin-top: 150px;
        margin-bottom: 200px;
        font-size: calc(14px + 1vw);
        font-family: $maven;

        @include center;
        flex-direction: column;

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

            @include underlined;
        }
    }

</style>