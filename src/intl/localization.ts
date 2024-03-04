import {loadMessages} from "@progress/kendo-react-intl";
import ptBR from "@/messages/pt-BR.json"

const language = "pt-BR"

export default {
    loadMessages: () => loadMessages(ptBR, language),
    language
}