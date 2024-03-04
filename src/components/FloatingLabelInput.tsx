import {Input, InputProps} from "@progress/kendo-react-inputs";
import {FloatingLabel} from "@progress/kendo-react-labels";

export default function FloatingLabelInput({label, ...props}: InputProps) {
    return <FloatingLabel
        label={label}
        style={props.style}
        editorId={props.id}
        editorValue={props.value as string}
    >
        <Input
            {...props}
        />
    </FloatingLabel>
}