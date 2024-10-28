import {Inter} from 'next/font/google'

const interRegular = Inter({
    weight: '400',
    subsets: ['latin']
})

export const SkillComponent = (props: {
    count:string,
    type: string
})=>{
    return <div className="flex flex-col gap-2.5 items-center">
        <span className={interRegular.className} style={{
            fontSize: '64px',
            color: '#44AAFF'
        }}>{props.count}</span>
        <span className={interRegular.className} style={{
            fontSize: '24px',
            color: '#999999'
        }}>{props.type}</span>
    </div>
}