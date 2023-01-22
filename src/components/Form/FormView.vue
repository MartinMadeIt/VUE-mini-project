<template>
    <NavbarForm />
    <div class="form">
        <FormIndicator 
            :current=current 
            :steps=steps
        />

        <div class="formField">

            
        </div>

        <ControlButtonsForm 
            @next-step="handleNext"
            @prev-step="handlePrev"
            :current= "current"
        />
    </div>

</template>

<script>
import { ref } from 'vue';
import NavbarForm from './NavbarForm.vue';
import ControlButtonsForm from './ControlButtonsForm.vue';
import FormIndicator from './FormIndicator.vue';

    export default {
    name : 'FormView', 
    components: { NavbarForm, ControlButtonsForm, FormIndicator },
    setup() {

        const current = ref(1)
        const steps = [1,2,3]

        const handleNext = () => current.value < 3 ? current.value++ : null
        const handlePrev = () => current.value > 1 ? current.value-- : null

        return {current, steps, handleNext, handlePrev}
    }
}
</script>

<style scoped lang="scss">
@import "../../Utilities/utilities.scss";

    .form {
        position: relative;
        width: 100vw;
        min-height: 100vh;
        padding: 80px 20px 10px 20px;
        font-family: $maven;


        .formField {
            height: 600px;
        }
    }

</style>