<template>
    <NavbarForm />
    <div class="form"
    >
        <FormIndicator 
            :current=current 
            :steps=steps
        />

        <form 
            class="formField"
            @submit.prevent="handleSubmit"
        >
            <div 
            class="formField__firstSection"
            v-show="current === 1"
            >
                <FormInput 
                name="company"
                placeholder="Nazwa Firmy"
                label="Company"
                />

                <FormInput 
                name="address"
                placeholder="Adres"
                label="Address"
                />
        </div>

            <div 
            class="formField__firstSection"
            v-show="current === 2"
            @submit.prevent="handleSubmit"
            >
                <FormInput 
                name="nip"
                placeholder="NIP"
                label="regon"
                />

                <FormInput 
                name="regon"
                placeholder="REGON"
                label="regon"
                />

                <FormInput 
                name="country"
                placeholder="Kraj działalności"
                label="Second label"
                />
            </div>

            <div 
            class="formField__thirdSection"
            v-show="current === 3"
            @submit.prevent="handleSubmit"
            >
                <FormInput 
                    name="email"
                    placeholder="E-mail"
                    label="Second label"
                />


            </div>

            <button 
                type="submit"
                class="submit"
                v-show="current === 3"
            >Submit <i class="uil uil-check-circle"></i></button>
        </form>

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
import FormInput from './FormInput.vue';
import { setPositionInLStorage } from "../../Controllers/useLocalStorage"

    export default {
    name : 'FormView', 
    components: { NavbarForm, ControlButtonsForm, FormIndicator, FormInput },
    setup() {

        const current = ref(1)
        const steps = [1,2,3]

        const handleNext = () => current.value < 3 ? current.value++ : null
        const handlePrev = () => current.value > 1 ? current.value-- : null

        const handleSubmit = (e) => {
            const inputs = Array.from(e.target);

            inputs.forEach(input => {
                if(input.tagName.toLowerCase() === 'input') {
                    setPositionInLStorage(input.name, input.value)
                }
            });
            // setPositionInLStorage(e.target.elements.company.name, e.target.elements.company.value)
        }


        return {current, steps,  handleNext, handlePrev, handleSubmit, setPositionInLStorage}
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
            min-height: 400px;
            padding: 60px;
            @include center;
            flex-direction: column;

            &__firstSection,
            &__secondSection,
            &__thirdSection {
                opacity: 1;
                height: 100%;
                @include center;
                flex-direction: column;
                gap: 30px;
            }

            &__thirdSection {
                gap: 100px;
            }

        }

        .submit {
            width: clamp(150px, 60%, 250px);
            aspect-ratio: 4/1;

            margin: 100px auto;
            border-radius: 8px;
            font-size: 18px;
            font-weight: 400;
            border: 1px solid $green;
            color: $green;
            cursor: pointer;
            transition: all 250ms;
            opacity: .5;
            @include center;

            &:hover {
                opacity: 1;
                background-color: $green;
                color: white;
            }

            &:active {
                transform: scale(.7)
            }
        }
    }

</style>