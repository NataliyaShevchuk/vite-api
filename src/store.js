import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
    CharacterData: [],
    LocalHostError: "",
    pageInfo: {},
    currentPage: 1,
    /**
     * @property {number} count,
     * @property { number} pages,
     * @property {string | null}  next,
     * @property { null } prev
     */
    loading: false,
    contenutoDiFilter: "",
});

export function fetchCharacters() {
    store.loading = true;
    
    axios.get("https://rickandmortyapi.com/api/character", {
        params: {
            page: store.currentPage,
            ...store.contenutoDiFilter
        }
    })
    .then( (resp) => {
        console.log(resp);
        console.log(resp.data.results);

        store.CharacterData = resp.data.results;
        store.pageInfo = resp.data.info;

        store.loading = false;
    })
    .catch(() => {
        store.LocalHostError = "A causa di un guasto l'operazione non è andata a buon fine. Riprova più tardi.";

        store.loading = false;
    });

}