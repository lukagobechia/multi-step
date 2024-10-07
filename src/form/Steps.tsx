import { useRef } from 'react'
import './Steps.css'
type stepsProps = {
    stepNumber: string
    stepTitle: string
    stepDesc: string
}
function Steps({ stepNumber, stepTitle, stepDesc }: stepsProps) {
    const stepNumRef = useRef<HTMLDivElement>(null);

    const handleClick = () => {
        if (stepNumRef.current) {
            stepNumRef.current.focus(); 
        }
    };
    return (
        <>
            <div className='step-one' onClick={handleClick}>
                <div className='stepNum' ref={stepNumRef} tabIndex={0}>
                    <span>{stepNumber}</span>
                </div>
                <div className='stepDesc'>
                    <p>{stepTitle}</p>
                    <h4>{stepDesc}</h4>
                </div>
            </div>
        </>
    )

}
export default Steps;