import {Inter} from 'next/font/google'

const interRegular = Inter({
    weight: '400',
    subsets: ['latin']
})


export const ExperienceComponent = (props:{
    from:string,
    to: string,
    description: string
})=>{
    return <div className="flex flex-col gap-2.5">
        <div><span className={interRegular.className} style={{
            fontSize: '16px',
            lineHeight: '22px',
            color: '#999999'
        }}>{props.from} - {props.to}</span></div>
        <div><span className={interRegular.className} style={{
            fontSize: '20px',
            lineHeight: '24px'
        }}>{props.description}</span></div>
    </div>
};