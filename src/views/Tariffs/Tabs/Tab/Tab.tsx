import { Typography } from "../../../../components/typography/Typography"

type TabType = {
    title: string
    key: number
    description: string
}

export const Tab = ({description, key, title}: TabType) =>{
    return (
        <div key={key}>
            <Typography children={title} variant="h3"/>
            <div>{description}</div>
        </div>
    )
}