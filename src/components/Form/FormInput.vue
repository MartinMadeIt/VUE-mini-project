<template>
    <div class="inputField">
        <input 
            type="text" 
            class="input" 
            :placeholder="placeholder" 
            :v-model="name" 
            :name="name"
            :value="deafultValue"
        >
    </div>
</template>

<script>
import { getPositionFromLStorage } from '@/Controllers/useLocalStorage';


    export default {
        name: 'FormInput',
        props: {
            name: {
                type: String
            },
            placeholder: {
                type: String
            },
            label: {
                type: String
            }
        },
        setup(props) {
            const deafultValue = getPositionFromLStorage(props.name) ? getPositionFromLStorage(props.name) : null

            return {deafultValue}
        }
    }
</script>

<style scoped lang="scss">
@import "../../Utilities/utilities.scss";
.inputField {
    width: 100%;

    @include center;
    flex-direction: column;
    gap: 30px;

    .input {
        width: clamp(250px, 60%, 350px);
        aspect-ratio: 4/1;

        border: 1px solid $main;
        opacity: .6;
        border-radius: 4px;
        padding: 10px;
        transition: 250ms;

        &:focus {
            outline: none;
            border: 1px solid $main;
            opacity: 1;
        }
    }

}

</style>