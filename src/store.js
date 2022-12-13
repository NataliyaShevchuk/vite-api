import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
    CharacterData: [],
    pageInfo: {},
    /**
     * @property {number} count,
     * @property { number} pages,
     * @property {string | null}  next,
     * @property { null } prev
     */
    loading: false,
});

// export function fetchCharacters() {

// }