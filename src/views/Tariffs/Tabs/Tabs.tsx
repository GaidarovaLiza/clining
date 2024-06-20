import { Tab } from "./Tab/Tab"
import style from './Tabs.module.scss'

export const Tabs = () => {

const tabs = [
    {title: "Все тарифы", description: "Some description", id: 1},
    {title: "Специальное предложение", description: "Some description", id: 2},
    {title: "Дополнительные опции", description: "Some description", id: 3},
]

    return (
        <div className={style.content}>
            {tabs.map(tab => <Tab description={tab.description} key={tab.id} title={tab.title}/>)}
        </div>
    )
}