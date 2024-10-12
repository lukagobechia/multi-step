import FormWrapper from './FormWrapper';
// import './PersonalInfo.css';

type UserData = {
  name: string;
  email: string;
  phoneNumber: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

function PersonalInfo({ name, email, phoneNumber, updateFields }: UserFormProps) {
  return (
    <FormWrapper title="Personal Info" info="Please provide your name, email address, and phone number.">
      <div className='form'>
        <div className="input-field">
          <label htmlFor="fullName">Name</label>
          <input
            type="text"
            id="fullName"
            value={name}
            onChange={e => updateFields({ name: e.target.value })}
          />
        </div>
        <div className="input-field">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={e => updateFields({ email: e.target.value })}
          />
        </div>
        <div className="input-field">
          <label htmlFor="tel">Phone Number</label>
          <input
            type="tel"
            id="tel"
            placeholder="e.g. +1 237 567 89"
            value={phoneNumber}
            onChange={e => updateFields({ phoneNumber: e.target.value })}
          />
        </div>
      </div>

    </FormWrapper>
  );
}

export default PersonalInfo;
