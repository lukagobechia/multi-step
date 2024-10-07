import './PersonalInfo.css'
import Steps from './Steps';
function Form() {
    return (
        <>
            <div className='container'>
                <div className='steps'>
                    <Steps stepNumber='1' stepTitle='STEP 1' stepDesc='YOUR INFO'/>
                    <Steps stepNumber='2' stepTitle='STEP 2' stepDesc='SELECT PLAN'/>
                    <Steps stepNumber='3' stepTitle='STEP 3' stepDesc='ADD-ONS'/>
                    <Steps stepNumber='4' stepTitle='STEP 4' stepDesc='SUMMARY'/>
                </div>
                <div className='form'>
                    <div>
                        <h1>Personal info</h1>
                        <p>Please provide your name, email address, and phone number.</p>
                    </div>
                    <form>
                        <div className='input-field'>
                            <label htmlFor="fullName">Name</label>
                            <input type="text" id='fullName' name='fullName' />
                        </div>
                        <div className='input-field'>
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id='email' name='email' />

                        </div>
                        <div className='input-field'>
                            <label htmlFor="tel">Phone Number</label>
                            <input type="tel" id='tel' name='tel' />
                        </div>

                        <div className='btn'>
                            <button>Next Step</button>
                        </div>
                    </form>

                </div>

            </div>
        </>
    )
}
export default Form;