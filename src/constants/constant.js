import {ReactComponent as BarChart} from '../assets/svg/barChart.svg'
import {ReactComponent as Customer} from '../assets/svg/people.svg'
import {ReactComponent as Bag} from '../assets/svg/bag.svg'
import {ReactComponent as Settings} from '../assets/svg/settings.svg'

export const navButtons = [
    {id:1, title:"Dashboard", path:'/', icon:<BarChart />},
    {id:2, title:"Customers", path:'/customers', icon:<Customer />},
    {id:3, title:"Product", path:'/product', icon:<Bag />},
    {id:4, title:"Settings", path:'/settings', icon:<Settings />},
]