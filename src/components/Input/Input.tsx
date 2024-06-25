import TextField from '@mui/material/TextField';

type InputType = {
    variant: "outlined"  | 'filled' | 'standard'
    value: string
    onChange: (event: any) => void
    label: string
}

export const Input = ({variant, onChange, value, label} : InputType) => {
    return (
        <TextField id="outlined-basic"  label={label} variant={variant} value={value} onChange={onChange}/>
    )
}