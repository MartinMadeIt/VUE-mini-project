<template>
    <NavbarForm />
    <div class="form">
        <FormIndicator 
            :current=current 
            :steps=steps
        />

        <div class="formField">

            <form 
            class="formField__firstSection"
            v-if="current === 1"
            @submit.prevent="handleSubmit"
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
                <button 
                    type="submit"
                    class="submit"
                ><i class="uil uil-check-circle"></i></button>
            </form>

            <form 
            class="formField__firstSection"
            v-else-if="current === 2"
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
                <button 
                    type="submit"
                    class="submit"
                ><i class="uil uil-check-circle"></i></button>
        </form>
        <form 
            class="formField__firstSection"
            v-else
            @submit.prevent="handleSubmit"
            >
                <FormInput 
                    name="email"
                    placeholder="E-mail"
                    label="Second label"
                />
                <div class="allowCheck">
                    <input type="checkbox" :checked="defaultValueCheckbox" >
                    <p>*Wyrazam zgodę na przetwarzanie moich danych przez firmę XYZ, a takze otrzymywanie informacji handlowych drogą emailową</p>
                </div>
                <button 
                    type="submit"
                    class="submit"
                ><i class="uil uil-check-circle"></i></button>
            </form>

            
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
import FormInput from './FormInput.vue';
import { setPositionInLStorage, getPositionFromLStorage } from "../../Controllers/useLocalStorage"

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

        const defaultValueCheckbox = getPositionFromLStorage('allowMarketing') ? getPositionFromLStorage('allowMarketing') : false


        return {current, steps,  handleNext, handlePrev, handleSubmit, defaultValueCheckbox, setPositionInLStorage}
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
            height: 400px;
            padding: 60px;

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

                .allowCheck {
                    @include center;
                    gap: 10px;
                    width: clamp(300px, 60%, 500px);
                    text-align: justify;
                    font-size: 10px;

                }

            }
        }

        .submit {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            font-size: 24px;
            border: 1px solid $green;
            color: $green;
            cursor: pointer;
            transition: all 250ms;
            opacity: .5;

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