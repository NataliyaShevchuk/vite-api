import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
    CharacterData: [],
    loading: true,
});

export function fetchCharacters() {

}